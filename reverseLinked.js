var reverseList = function(head) {
    //Since this is a singly linked list, a node does not have reference to it's previous node. A pointer is needed to store a previous element of the node beforehand
        let previous = null;
    //To identify the current node
        let current = head;
    //to store the next node before changing the reference. If the 
    //current value changes without saving it, the next pointer in //iteration is going to be lost.
        let nextTemp = null;
        while(current!= null) {
    //save the next pointer in the temp variable.
            nextTemp = current.next;
    //reverse the pointer of the current node to its previous node.
            current.next = previous;
    //  The previous node becomes the node that the pointer is currently at.
            previous = current;  
    // And the current nodes becomes the next node that was saved earlier.
            current = nextTemp; 
        }
    // At the end, the previous node will be the head node of the new list.
        return previous
    };