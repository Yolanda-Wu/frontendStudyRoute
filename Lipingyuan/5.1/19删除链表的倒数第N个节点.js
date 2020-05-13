/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let p = new ListNode(null);
    p.next = head;
    let front = p;
    let tail = p;
    while (n--) {
        front = front.next;
    }//2
    while (front.next) {
        tail = tail.next;//1 2 3
        front = front.next;//3 4 5
    }
    tail.next = tail.next.next;//3->4   3->5
    return p.next;
};
/*
给定一个链表: 1->2->3->4->5, 和 n = 2.

当删除了倒数第二个节点后，链表变为 1->2->3->5.
*/