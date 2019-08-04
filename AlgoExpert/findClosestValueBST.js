//const arr = [10,5,15,2,5,1];
const arr = [10,5,15,2,5,1,13,22,14];


function BST(value=null, left=null, right=null) {
      this.value = value;
      this.left = left;
      this.right = right;
}

BST.prototype.append = function(value) {
  const newNode = new BST(value);
  if (!this.value) this.value = value;
  else {
    if (value<this.value) {
      if (!this.left) {
        this.left = newNode;
      }
      else this.left.append(value);
    }
    else {
      if (!this.right) {
        this.right = newNode;
      }
      else this.right.append(value);
    }
  }
}

let tree = new BST();
arr.map(elem => {
  tree.append(elem);
})

function findClosestValueInBst(tree, target) {

}


