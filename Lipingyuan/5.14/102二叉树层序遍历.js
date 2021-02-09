/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) return [];
    let queue = [root], res = [], level = 0;
    while (queue.length) {
        let size = queue.length;
        res[level] = [];
        while (size--) {
            let front = queue.shift();
            /* 结果 */
            res[level].push(front.val);
            /* 下一层元素存到队列 */
            if (front.left) queue.push(front.left);
            if (front.right) queue.push(front.right);
        }
        level++;
    }
    return res;
};