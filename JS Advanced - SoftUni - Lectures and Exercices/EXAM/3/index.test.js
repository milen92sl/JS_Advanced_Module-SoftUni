const flowerShop = require('./index.js');
const { expect, assert } = require('chai');

describe('FlowerShop tests', () => {

    describe('calcPriceOfFlowers tests', () => {
        it('invalid input - only numbers', () => {
            expect(() => flowerShop.calcPriceOfFlowers(1, 1, 1)).to.throw('Invalid input!');
        });

        it('invalid input - only strings', () => {
            expect(() => flowerShop.calcPriceOfFlowers('Rose', 'asd', '1')).to.throw('Invalid input!');
        });

        it('invalid input - price', () => {
            expect(() => flowerShop.calcPriceOfFlowers('Rose', 'asd', 1)).to.throw('Invalid input!');
        });

        it('invalid input - quantity', () => {
            expect(() => flowerShop.calcPriceOfFlowers('Rose', 10, 'asd')).to.throw('Invalid input!');
        });

        it('Valid data returns the right message', () => {
            expect(flowerShop.calcPriceOfFlowers('Rose', 20, 1)).to.equal(`You need $20.00 to buy Rose!`);
        });
    });

    describe('checkFlowersAvailable tests', () => {
        it('Invalid input - empty array', () => {
            expect(flowerShop.checkFlowersAvailable('Lily',[])).to.equal('The Lily are sold! You need to purchase more!');
        });

        it('Invalid input - in array which does not have the inputed flower', () => {
            expect(flowerShop.checkFlowersAvailable('Lily',['Rose', 'Sunflower'])).to.equal('The Lily are sold! You need to purchase more!');
        });

        it('Valid input - in array which have the inputed flower', () => {
            expect(flowerShop.checkFlowersAvailable('Lily',['Rose', 'Sunflower', 'Lily'])).to.equal('The Lily are available!');
        });
    });

    describe('sellFlowers tests', () => {
        it('invalid input - invalid input - string', () => {
            expect(() => flowerShop.sellFlowers(['Rose', 'Sunflower', 'Lily'], '1')).to.throw('Invalid input!');
        });

        it('invalid input - invalid space with negative number', () => {
            expect(() => flowerShop.sellFlowers(['Rose', 'Sunflower', 'Lily'],-5)).to.throw('Invalid input!');
        });

        it('invalid input - invalid parameters space is >= gardenArr.lenght', () => {
            expect(() => flowerShop.sellFlowers(['Rose', 'Sunflower', 'Lily'],3)).to.throw('Invalid input!');
        });

        it('invalid input - invalid parameters space is >= gardenArr.lenght', () => {
            expect(() => flowerShop.sellFlowers(['Rose', 'Sunflower', 'Lily'],4)).to.throw('Invalid input!');
        });

        it('invalid input - invalid gardenArr', () => {
            expect(() => flowerShop.sellFlowers('asdsadas',5)).to.throw('Invalid input!');
        });

        it('invalid input - invalid gardenArr', () => {
            expect(() => flowerShop.sellFlowers('',5)).to.throw('Invalid input!');
        });

        it('invalid input - invalid gardenArr', () => {
            expect(() => flowerShop.sellFlowers({},5)).to.throw('Invalid input!');
        });

        it('invalid input - invalid gardenArr', () => {
            expect(() => flowerShop.sellFlowers(5,5)).to.throw('Invalid input!');
        });

        it('Valid input - returns the right message', () => {
            expect(flowerShop.sellFlowers(['Rose', 'Sunflower', 'Lily'], 1)).to.equal('Rose / Lily');
        });
    });
});