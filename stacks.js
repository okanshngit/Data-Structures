class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
} 

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0; 
    }

    push(val){
        let newNode = new Node(val)
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else{
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }

    pop(){
        if(!this.first) return null;

        let temp = this.first;
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.val;
    }
}

// Without oop 

var t = -1;
var max = 10;
var a = Array(max).fill(0);

function push(val) {
    if(t >= (max-1)){
        console.log("stack overflow");
        return false;
    } else {
        t += 1;
        a[t] = val;
        console.log(`${val} pushed into stack`)
        return true;
    }
    
}