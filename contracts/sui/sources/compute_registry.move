module plankton_compute::compute_registry {
    use sui::object::{Self, UID};
    use sui::transfer;
    use sui::tx_context::{Self, TxContext};
    use sui::coin::{Self, Coin};
    use sui::balance::{Self, Balance};
    use sui::sui::SUI;
    use plankton_compute::plank_token::PLANK_TOKEN;

    /// Minimum stake required to register a node (1000 PLANK)
    const MIN_STAKE: u64 = 1_000_000_000_000;

    /// Error codes
    const EInsufficientStake: u64 = 0;
    const ENotOwner: u64 = 1;

    /// Represents a registered compute node on the network
    struct ComputeNode has key, store {
        id: UID,
        owner: address,
        endpoint: vector<u8>,
        capacity: u64,
        total_jobs: u64,
        is_active: bool,
        staked_balance: Balance<PLANK_TOKEN>
    }

    /// Shared state for the protocol (optional, simplified here to individual objects)
    struct Registry has key {
        id: UID,
        node_count: u64
    }

    fun init(ctx: &mut TxContext) {
        transfer::share_object(Registry {
            id: object::new(ctx),
            node_count: 0
        });
    }

    /// Register a new compute node by staking PLANK tokens
    public entry fun register_node(
        endpoint: vector<u8>,
        capacity: u64,
        stake: Coin<PLANK_TOKEN>,
        ctx: &mut TxContext
    ) {
        let stake_value = coin::value(&stake);
        assert!(stake_value >= MIN_STAKE, EInsufficientStake);

        let node = ComputeNode {
            id: object::new(ctx),
            owner: tx_context::sender(ctx),
            endpoint: endpoint,
            capacity: capacity,
            total_jobs: 0,
            is_active: true,
            staked_balance: coin::into_balance(stake)
        };

        // Transfer the node object to the sender (they own their node profile)
        // Alternatively, this could be a shared object if we want public discoverability on-chain easily
        transfer::transfer(node, tx_context::sender(ctx));
    }

    /// Update node capacity or endpoint
    public entry fun update_node(
        node: &mut ComputeNode,
        endpoint: vector<u8>,
        capacity: u64,
        ctx: &mut TxContext
    ) {
        assert!(node.owner == tx_context::sender(ctx), ENotOwner);
        node.endpoint = endpoint;
        node.capacity = capacity;
    }

    /// Add more stake to an existing node
    public entry fun add_stake(
        node: &mut ComputeNode,
        additional_stake: Coin<PLANK_TOKEN>
    ) {
        let balance = coin::into_balance(additional_stake);
        balance::join(&mut node.staked_balance, balance);
    }

    /// Unstake and potentially deactivate node
    public entry fun unstake(
        node: &mut ComputeNode,
        amount: u64,
        ctx: &mut TxContext
    ) {
        assert!(node.owner == tx_context::sender(ctx), ENotOwner);
        
        let split_balance = balance::split(&mut node.staked_balance, amount);
        let coin = coin::from_balance(split_balance, ctx);
        
        transfer::public_transfer(coin, tx_context::sender(ctx));

        // Check remaining balance
        if (balance::value(&node.staked_balance) < MIN_STAKE) {
            node.is_active = false;
        }
    }
}
