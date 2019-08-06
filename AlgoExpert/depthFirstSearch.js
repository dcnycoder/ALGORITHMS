class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }
  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }
  depthFirstSearch(array) {
    array.push(this.name);
      if (this.children)  {
        for (let i=0; i<this.children.length; i++) {
          array = array.concat(this.children[i].depthFirstSearch([]));
        }
      }
    return array;
  }
}

let A = new Node('A').addChild('B').addChild('E');
A.children[0].addChild("C").addChild("D");
A.children[0].children[1].addChild('H').addChild('I');
A.children[1].addChild("F").addChild("G");

console.log(A.depthFirstSearch([]));
