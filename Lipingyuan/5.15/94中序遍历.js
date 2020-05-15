/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    if (!root) return [];
    let res = [], stack = [], p = root;
    while (p || stack.length) {
        while (p) {
            stack.push(p);
            p = p.left;
        }
        let node = stack.pop();
        res.push(node.val);
        p = node.right;
    }
    return res;
};