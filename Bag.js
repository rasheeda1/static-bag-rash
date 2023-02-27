class Bag {
    static maxWeight = 23;
    constructor(weight) {
        if(weight > Bag.maxWeight){
            throw new Error(`Bag weight cannot exceed 23 kg`);
        } 
        this.weight = weight
    }
    
}

module.exports = Bag