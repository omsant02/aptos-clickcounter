module todolist_addr::todolist {
use std::signer;

    /// Resource that wraps an integer counter
    struct Counter has key { i: u64 }

     public entry fun publish(account: &signer, i: u64) {
      move_to(account, Counter { i })
    }

    
    public fun get_count(account: &signer): u64 acquires Counter {
      let signer_address = signer::address_of(account);
      borrow_global<Counter>(signer_address).i
    }

    
    public entry fun increment(account: &signer) acquires Counter {
      let signer_address = signer::address_of(account);
      let c_ref = &mut borrow_global_mut<Counter>(signer_address).i;
      *c_ref = *c_ref + 1
    }
}