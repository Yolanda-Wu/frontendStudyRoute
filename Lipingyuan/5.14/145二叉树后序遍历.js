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
var postorderTraversal = function (root) {
    let stack = [], p = root;
    /* 记录访问 */
    let vis = new Set(), res = [];
    while (stack.length || p) {
        /* 找到最下方结点 */
        while (p) {
            stack.push(p);
            p = p.left;
        }
        let node = stack[stack.length - 1];
        /* 有右子树先遍历右子树 */
        if (node.right && !vis.has(node.right)) {
            p = node.right;
            vis.add(node.right);
        } else {
            res.push(node.val);
            stack.pop();
        }
    }
    return res;
};