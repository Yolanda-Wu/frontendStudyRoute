/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    if (!l1 || !l2)
        return l1 ? l1 : l2;
    let p = new ListNode(null);
    let head = p;
    while (l1 && l2) {
        if (l1.val <= l2.val) {
            p.next = l1;
            p = p.next;
            l1 = l1.next;
        } else {
            p.next = l2;
            p = p.next;
            l2 = l2.next;
        }
    }
    if (l1) p.next = l1;
    if (l2) p.next = l2;
    return head.next;
};