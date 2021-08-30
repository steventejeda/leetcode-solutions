var hasCycle = function(head) {
    //create a slow node pointer and fast node pointer
    let slow = head;
    let fast = head;
    
    //while the two pointers exist and the fast pointer has a next value
    while(fast && fast.next){
    //move the slow pointer by one node and the fast pointer by two nodes
        slow = slow.next
        fast = fast.next.next
        
    //if at any time the slow pointer and the fast pointer are equal
    //the linked list contains a cycle
    if (slow == fast){
        return true;
    }
        
    }
    //return false if a cycle is never found
    return false;
};