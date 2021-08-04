var isValidBST = function(root) {
    return validateBst(root, -Infinity, Infinity)
 };
 
 function validateBst(root, minValue, maxValue) {
     if(root == null) return true;
      if(root.val >= maxValue || root.val <= minValue) return false;
     return validateBst(root.right, root.val, maxValue) &&
             validateBst(root.left, minValue, root.val)
 };