var deleteNode = function(node) {
    if(node == null || node.next == null){
      return null;
  }
  node.val = node.next.val;
  node.next  = node.next.next;
};