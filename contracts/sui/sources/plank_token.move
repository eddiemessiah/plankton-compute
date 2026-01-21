module plankton_compute::plank_token {
    use std::option;
    use sui::coin::{Self, Coin, TreasuryCap};
    use sui::transfer;
    use sui::tx_context::{Self, TxContext};
    use sui::url;

    /// The type identifier of the PLANK coin
    struct PLANK_TOKEN has drop {}

    /// Register the PLANK currency
    fun init(witness: PLANK_TOKEN, ctx: &mut TxContext) {
        // Create the currency using the One-Time-Witness
        let (treasury, metadata) = coin::create_currency(
            witness, 
            9, // decimals
            b"PLANK", // symbol
            b"Plankton Compute Token", // name
            b"The official token of the Plankton Infinite Compute Protocol", // description
            option::some(url::new_unsafe_from_bytes(b"https://plankton-compute.netlify.app/logo.png")), // icon url
            ctx
        );

        // Make the metadata public/frozen (optional, but standard for immutable metadata)
        transfer::public_freeze_object(metadata);

        // Transfer the treasury capability to the deployer so they can mint tokens
        transfer::public_transfer(treasury, tx_context::sender(ctx));
    }

    /// Mint new tokens - only the owner of TreasuryCap can call this
    public entry fun mint(
        treasury_cap: &mut TreasuryCap<PLANK_TOKEN>, 
        amount: u64, 
        recipient: address, 
        ctx: &mut TxContext
    ) {
        let coin = coin::mint(treasury_cap, amount, ctx);
        transfer::public_transfer(coin, recipient);
    }

    /// Burn tokens
    public entry fun burn(
        treasury_cap: &mut TreasuryCap<PLANK_TOKEN>, 
        coin: Coin<PLANK_TOKEN>
    ) {
        coin::burn(treasury_cap, coin);
    }
}
