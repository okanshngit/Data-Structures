class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }

    insert(value){
        var newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while(true){
            if(value === current.value) return undefined;
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                } 
                current = current.right;
            }
        }
    }
    
    find(value){
        if(this.root === null) return false;

        var current = this.root
        var found = false;

        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                found = true
            }
        }
        if(!found) return false;
        return current;
    } 

    // 28.06.22
    // Breadth First Search 
    bfs(){
        var data = [];
        var queue = [];
        var node = this.root;
        queue.push(node);

        while(queue.length){
            node = queue.shift();
            data.push(node);
            if(node.left){
                queue.push(node.left)
            }
            if(node.right){
                queue.push(node.right)
            }
            return data;
        }
    }
}