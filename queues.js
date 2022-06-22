class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
} 

class Queues {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0; 
    }

    enqueue(val){
        let newNode = new Node(val);
        
        //Case 1: Hiç eleman yok
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        }

        //Case 2: Sona ekleme 

        else {
            this.last.next = newNode;
            this.last = newNode  
        }
        this.size++;
        return size;
    }

    dequeue(){
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