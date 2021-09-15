var maxDepth = function(root) {
    if (root === null) {
    return 0;
  } else {
    let leftDepth = maxDepth(root.left),
        rightDepth = maxDepth(root.right);
    let childDepth = leftDepth > rightDepth ? leftDepth : rightDepth;
    return 1 + childDepth;
  }
    
     
};