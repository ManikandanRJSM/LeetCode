/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let currentnode = head
    let prevnode = null
    
    while(currentnode){
        let nextnode = currentnode.next
        currentnode.next = prevnode
        prevnode = currentnode
        currentnode = nextnode
    }
    return prevnode
};

const list = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: null
      }
    }
  }
};

console.log(reverseList(list))