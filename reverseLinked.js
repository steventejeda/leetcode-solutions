// O(n) time & O(1) space
function reverse(head) {
    let node = head,
        previous,
        temp;
  
    while (node) {
      // save next before node.next is overwritten
      temp = node.next;
  
      // reverse pointer
      node.next = previous;
  
      // step forward in the list
      previous = node;
      node = temp;
    }
  
    return previous;
  }