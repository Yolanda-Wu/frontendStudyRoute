
function ListNode(val) {
    this.val = val;
    this.next = null;
}
var addTwoNumbers = function (l1, l2) {
    let l3 = new ListNode(null);
    let head = l3;
    let carry = 0;//进位
    while (true) {
        /* 计算数值 */
        l3.val = (l1 ? parseInt(l1.val) : 0) + (l2 ? parseInt(l2.val) : 0) + carry;//2 5 7
        carry = Math.floor(l3.val / 10);//进位
        l3.val %= 10;
        /* l1,l2判断 */
        if (l1)
            l1 = l1.next;
        if (l2)
            l2 = l2.next;
        if (!l1 && !l2 && !carry) break;
        /* 生成新节点 */
        l3.next = new ListNode(null);
        l3 = l3.next;
    }
    return head;
};
// console.log(parseInt('342') + parseInt('567'))
let l1 = {
    val: 2,
    next: {
        val: 4,
        next: {
            val: 3,
            next: null
        }
    }
}
let l2 = {
    val: 5,
    next: {
        val: 6,
        next: {
            val: 4,
            next: null
        }
    }
}
console.log(addTwoNumbers(l1, l2))
/**
 * 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
 * 输出：7 -> 0 -> 8
 * 原因：342 + 465 = 807
 */