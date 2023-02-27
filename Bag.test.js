const Bag = require('./Bag')

describe('Bag class', () => {
    //bag has weight
    /*test('throw an error if the weight exceeds the limit', () => {
        const bag = new Bag(25)
        expect(bag.weight).toBe(25)
    })
    //if bag has no weight, return error
    test('bag has no weight to return an error', () => {
        expect(() => new Bag()).toThrowError('bag needs weight')
    })*/
    test('throws an error if bag weight exceeds maximum', () => {
        expect(() => new Bag(24)).toThrow('Bag weight cannot exceed 23 kg');
      });
      
      test('creates a new bag if weight is within maximum', () => {
        const bag = new Bag(10);
        expect(bag.weight).toBe(10);
      });
      
      test('creates a new bag with maximum weight', () => {
        const bag = new Bag(Bag.MAX_WEIGHT);
        expect(bag.weight).toBe(Bag.MAX_WEIGHT);
      });
      
})