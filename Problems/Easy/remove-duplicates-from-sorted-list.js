/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if(head) {
        copy = head
        while(copy.next != null) {
            if(copy.val == copy.next.val) {
                copy.next = copy.next.next
                continue
            }
            copy = copy.next
        }
    }
    return head
};