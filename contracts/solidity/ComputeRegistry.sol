// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

/**
 * @title Plankton Compute Registry
 * @dev Manages the registration of compute nodes and distribution of rewards on EVM L2s.
 */
contract ComputeRegistry is Ownable, ReentrancyGuard {
    
    struct ComputeNode {
        address owner;
        string endpoint;    // IP or URL of the compute node
        uint256 stake;      // Amount of PLANK staked
        uint256 totalJobs;  // Total jobs processed
        uint256 capacity;   // Available compute units (TFLOPS/etc abstract)
        bool isActive;
        uint256 registeredAt;
    }

    IERC20 public immutable plankToken;
    uint256 public constant MIN_STAKE = 1000 * 10**18; // 1,000 PLANK minimum
    
    mapping(address => ComputeNode) public nodes;
    address[] public nodeList;
    
    event NodeRegistered(address indexed nodeAddress, string endpoint, uint256 stake);
    event NodeUpdated(address indexed nodeAddress, uint256 capacity, bool isActive);
    event StakeIncreased(address indexed nodeAddress, uint256 amount);
    event StakeWithdrawn(address indexed nodeAddress, uint256 amount);
    event JobCompleted(address indexed nodeAddress, uint256 jobId, uint256 reward);

    constructor(address _token, address initialOwner) Ownable(initialOwner) {
        plankToken = IERC20(_token);
    }

    // --- Node Actions ---

    function registerNode(string calldata _endpoint, uint256 _capacity, uint256 _stakeAmount) external nonReentrant {
        require(nodes[msg.sender].owner == address(0), "Node already registered");
        require(_stakeAmount >= MIN_STAKE, "Insufficient stake");

        // Transfer stake to this contract
        require(plankToken.transferFrom(msg.sender, address(this), _stakeAmount), "Transfer failed");

        nodes[msg.sender] = ComputeNode({
            owner: msg.sender,
            endpoint: _endpoint,
            stake: _stakeAmount,
            totalJobs: 0,
            capacity: _capacity,
            isActive: true,
            registeredAt: block.timestamp
        });

        nodeList.push(msg.sender);
        emit NodeRegistered(msg.sender, _endpoint, _stakeAmount);
    }

    function updateStatus(bool _isActive, uint256 _capacity) external {
        require(nodes[msg.sender].owner == msg.sender, "Not registered");
        nodes[msg.sender].isActive = _isActive;
        nodes[msg.sender].capacity = _capacity;
        emit NodeUpdated(msg.sender, _capacity, _isActive);
    }

    function unstake(uint256 _amount) external nonReentrant {
        ComputeNode storage node = nodes[msg.sender];
        require(node.owner == msg.sender, "Not registered");
        require(node.stake >= _amount, "Insufficient staked balance");
        
        uint256 remaining = node.stake - _amount;
        require(remaining == 0 || remaining >= MIN_STAKE, "Remaining stake below minimum");

        node.stake = remaining;
        if (remaining == 0) {
            node.isActive = false; // Deactivate if full unstake
        }

        require(plankToken.transfer(msg.sender, _amount), "Transfer failed");
        emit StakeWithdrawn(msg.sender, _amount);
    }

    // --- Admin / Protocol ---

    /**
     * @dev Called by the protocol oracle/dispatcher to log job completion and distribute rewards
     */
    function recordJobCompletion(address _nodeAddress, uint256 _jobId, uint256 _reward) external onlyOwner {
        ComputeNode storage node = nodes[_nodeAddress];
        require(node.owner != address(0), "Node not found");
        require(node.isActive, "Node not active");

        node.totalJobs += 1;
        
        // Transfer reward from Protocol Treasury (this contract should rely on allowance or funded balance)
        // For simplicity, assuming this contract holds the reward pool or mints (if authorized)
        // Here we just transfer existing PLANK allowed to the contract or held by it.
        require(plankToken.transfer(_nodeAddress, _reward), "Reward transfer failed");
        
        emit JobCompleted(_nodeAddress, _jobId, _reward);
    }
}
