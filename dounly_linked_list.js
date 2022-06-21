class Node {
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

//Methods: push, pop, shift(removes from beggining)
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.lng = 0;
    }

    push(val){
        let newNode = new Node(val);
        if(this.lng === 0) {
            this.head = newNode;
            this.tail = newNode;
            
        }else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode
        }
        this.lng++;
        return this;
    }

    pop() {
        if(!this.head) return undefined;
        let poppedNode = this.tail;
        if(this.lng ===1){
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
            
        }
        this.lng--
        return poppedNode;       
    }

    shift(){
        if(!this.head) return undefined;
        let oldHead = this.head;
        if(this.lng ===1){
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
            this.lng--
            return oldHead;
    }
}