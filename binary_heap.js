class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }
    insert(val){
        this.values.push(val);
        this.bubbleUp();
        
    }

    bubbleUp(){
        let idx = this.values.length - 1;
        const element  = this.values[idx]

        while(true){
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];
            if(element <= parent) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
            
        }
    }
}