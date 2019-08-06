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
  let matches = [];
  if (tree.value === target) return tree.value;

  else if (target < tree.value ) {
    matches.push(tree.value);
    if (tree.left) {
        matches = matches.concat(findClosestValueInBst(tree.left, target));
      }
      else {
        console.log(matches);
        return matches;
      };
    }

  else { //if target>=tree.value
    matches.push(tree.value);
    if (tree.right) {
        matches = matches.concat(findClosestValueInBst(tree.right, target));
      }
    else {
      console.log(matches);
      return matches;
    }
    }
    return matches.reduce((acc, elem) => {
      if (Math.abs(elem-target)<Math.abs(acc-target)) {
        acc = elem;
        return acc;
      }
      else return acc;
    }, Infinity);
  }


