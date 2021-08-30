var mergeTwoLists = function(l1, l2) {
    let current = new ListNode();
     let mockVal = current;
     
     while(l1 && l2){
         if(l1.val < l2.val){
             current.next = l1;
             l1 = l1.next;
         } else {
             current.next = l2;
             l2 = l2.next;
         }
         current = current.next;
     }
  current.next = l1 ? l1 : l2;
     
     return mockVal.next
 };