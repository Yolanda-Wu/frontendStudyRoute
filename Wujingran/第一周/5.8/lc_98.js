/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  let res = [];
  let stack = [];
  if (!root) return true;
  while (stack.length > 0 || root) {
    if (root) {
      stack.push(root);
      root = root.left;
    } else {
      root = stack.pop();
      res.push(root.val);
      if (root.right) {
        root = root.right;
      } else {
        root = null;
      }
    }
  }
  const length = res.length;
  res = res.filter((v, i) => v > res[i - 1] || i === 0);
  return res.length === length;
};
