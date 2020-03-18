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
var isSymmetric = function(root) {
    if(root == null) return true
    return compareNodes(root.left, root.right)
};

var compareNodes = function(p, q) {
    if (p == null || q == null) return p == q;
    if (p.val != q.val) return false;
    return compareNodes(p.left, q.right) && compareNodes(p.right, q.left);
}



//Caution: if(!p) is slower than if(p == null)