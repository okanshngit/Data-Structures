class Node {
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

//Methods: push, pop, shift(removes from beggining), unshift(add end),
// get, set, inser
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

    set(index, val){
        let foundNode = this.get(index);
        if(foundNode != null){
            foundNode.val = val;
            return true;
        }
        return false;
    }

    insert(index, val){
        if(index < 0 || index > this.lng) return false;
        if(index === 0 ) return !!this.unshift(val);
        if(inde === this.lng) return !!this.push(val);

        let beforeNode =  this.get(index - 1);
        let newNode = new Node(val);
        let afterNode = beforeNode.next;

        beforeNode.next = newNode;
        newNode.prev = beforeNode;
        newNode.next = afterNode;
        afterNode.prev = newNode;
        
        this.lng++;
        return true;
    }
}