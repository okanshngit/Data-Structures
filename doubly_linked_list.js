class Node {
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

//Methods: push, pop, shift(removes from beggining), unshift(add end),
// get, set, insert, remove
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

    // Verilen değer sonrasına eleman ekleme.
    insertAfter(givenVal, val){
        const newNode = new Node(val)
        
        if(!this.head){
            this.head = newNode
            this.tail = newNode;
        } else {
            let current = this.head;

            while(current.val !== givenVal){
                current = current.next;
            }
            const afterNode = current.next;
            newNode.next = afterNode;
            afterNode.prev = newNode;

            newNode.prev = current;
            current.next = newNode;
            
        }

        this.length++;
    }

    remove(index){

        if(index < 0 || index >= this.lng) return null;
        if(index === 0 ) return this.shift();
        if(inde === this.lng - 1) return this.pop();

        let deletedNode = this.get(index)
        deletedNode.prev.next = deletedNode.next
        deletedNode.next.prev = deletedNode.prev;
        deletedNode.next = null
        deletedNode.prev = null
        this.lng--
        return deletedNode;
    }

    // İstenen değeri silme.
    delNode(val){
        if(!this.head) return null;
        if(val === this.tail.val) return this.delEnd()
        if(val === this.head.val) return this.delFront()

        let current = this.head;
        

        while(current.val !== val){
            current = current.next;
        }

        current.prev.next = current.next;
        current.next.prev = current.prev;
				current.next = null;
        current.prev = null;

        this.length--;
				return current;
    }
}