const arr = [10,5,15,2,5,1];
// const arr = [10,5,15,2,5,1,13,22,14];


function BST(value=null, left=null, right=null) {
      this.value = value;
      this.left = left;
      this.right = right;
      // this.append = (value) => {
      //   this.value = value;
      // }

}
//   return arr.map(elem => {
//     if (!BST.value) {
//       BST.value = elem;
//       BST.
//     }
//     else {
//       return BST(elem);
//     }
//   })

// console.log(makeBST(arr));

// BST.prototype.append = function(value) {
//   this.value = value;
// }

BST.prototype.append = function(value) {
  const newNode = new BST(value);
  //if (!this.value) this = newNode;
  if (!this.value) this.value = value;
  else {
    //const newNode = new BST(value);
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
console.log("tree: ", tree);
console.log("tree.left.left: ", tree.left.left);



function findClosestValueInBst(tree, target) {

}


