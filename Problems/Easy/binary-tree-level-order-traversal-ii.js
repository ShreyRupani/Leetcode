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
var levelOrderBottom = function(root, depth = 0) {
    var order = []
    return addToOrder(root, depth, order).reverse();
};

var addToOrder = function (node, depth, order) {
    var level = order[depth]? order[depth] : []
    if(node && node.val) {
        level.push(node.val)
        order[depth] = level
    } else {
        return order
    }
    order = addToOrder(node.left, depth+1, order)
    order = addToOrder(node.right, depth+1, order)

    return order
}