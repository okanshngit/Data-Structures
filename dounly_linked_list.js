class Node {
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

//Methods: push, pop, shift(removes from beggining), unshift(add end),
// get, 
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

    unshift(val){
        let newNode = new Node(val);
        if(this.lng === 0){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.lng++;
        return this;
    }

    get(index){
        if(index < 0 || index >= this.lng) return null;
        
        //Left part
        if(index <= this.lng/2){
            let count = 0;
            let current = this.head;
            while(count != index){
                current = current.next;
                count++;
            }

        // Right part
        } else{
            let count = this.lng -1;
            let current = this.tail;
            while(count != index){
                current = current.prev;
                count--;
            }
        }
     return current;
    }
}