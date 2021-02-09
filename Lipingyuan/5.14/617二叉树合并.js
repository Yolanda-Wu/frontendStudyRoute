/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function (t1, t2) {
    if (!t1 && !t2) return null;
    let root = new TreeNode();
    /* 取值 */
    root.val = (t1 ? t1.val : 0) + (t2 ? t2.val : 0);
    /* 合并左边 */
    root.left = mergeTrees(t1 ? t1.left : t1, t2 ? t2.left : t2);
    /* 合并右边 */
    root.right = mergeTrees(t1 ? t1.right : t1, t2 ? t2.right : t2);
    return root;
};