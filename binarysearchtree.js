function Node(data){
  this.data = data;
  this.left = null;
  this.right = null;
}

class Tree {
  constructor() {
    this.root = null;
  }

  addNode(data){
    const newNode = new Node(data);
    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode)
    }
  }

  remove(data){
    this.root = this.removeNode(this.root, data);
  }

  insertNode(node, newNode) {
    if(newNode.data < node.data){
      if(!node.left){
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode)
      }
    } else {
      if(!node.right) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode)
      }
    }
  }

  removeNode(node, data) {
    if (!node) {
      return null;
    }
    if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else if( data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    } else {
      if (!node.right && !node.left) {
        node = null;
        return node;
      }
      if (!node.left) {
        node = node.right;
        return node;
      }
      if (!node.right) {
        node = node.left;
        return node;
      }
    }
  }
}

/*
Inorder => left, root, right
Preorder => root, left, right
Postorder => left, right, root
*/