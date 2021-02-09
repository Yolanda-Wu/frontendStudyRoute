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
    if (!l1 || !l2) return l1 ? l1 : l2;
    let p = new ListNode(0);
    let root = p;
    while (l1 && l2) {
        if (l1.val < l2.val) {
            p.next = l1;
            l1 = l1.next;
        }
        else {
            p.next = l2;
            l2 = l2.next;
        }
        p = p.next;
    }
    if (l1) p.next = l1;
    if (l2) p.next = l2;
    return root;
};



// /* 快速排序 */
// function quickSort(arr, x, y) {
//     if (x >= y) return;
//     let p = arr[y];
//     let i = x, j = x;
//     /* i和j都从左边触发，但是j只在i遇到小于p的值进行交换的时候向后走
//        也就是[x,j-1]区间内不会大于p，j位置是第一个大于p的位置 */
//     while (i <= y) {
//         if (arr[i] < p) {
//             let tmp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = tmp;
//             /* a[j] < p时j++ */
//             j++;
//         }
//         i++;
//     }
//     /* j就是第一个大于[y]的元素，将j和y位置元素替换 */
//     let tmp = arr[j];
//     arr[j] = arr[y];
//     arr[y] = tmp;
//     /* 对左右区间进行排序 */
//     quickSort(arr, x, j - 1);
//     quickSort(arr, j + 1, y);
// }
// let arr = [3, 23, 4, 62, 45, 13]
// quickSort(arr, 0, arr.length - 1)
// console.log(arr)




