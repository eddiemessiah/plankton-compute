// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title Plankton Token ($PLANK)
 * @dev Standard ERC20 for the Plankton Compute Protocol.
 * Built for Base and Ethereum L2s.
 */

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";

contract PlanktonToken is ERC20, Ownable, ERC20Permit {
    uint256 public constant MAX_SUPPLY = 1_000_000_000 * 10**18; // 1 Billion

    constructor(address initialOwner) 
        ERC20("Plankton Compute", "PLANK") 
        Ownable(initialOwner)
        ERC20Permit("Plankton Compute")
    {
        // Mint entire supply to owner (proto-DAO/Deployer) for distribution
        _mint(initialOwner, MAX_SUPPLY);
    }

    // Function to burn tokens (e.g. from protocol revenue)
    function burn(uint256 amount) public {
        _burn(_msgSender(), amount);
    }
}
