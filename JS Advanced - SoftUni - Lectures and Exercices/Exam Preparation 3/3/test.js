const testNumbers = require('./testNumbers');
const { expect } = require('chai');

describe('Test Numbers', () => {

    describe('sumNumbers', () => {
        it('Works with valid numbers', ()=> {
            expect(testNumbers.sumNumbers(3,5)).to.equal('8.00');
        });

        it('Works with negative number', ()=> {
            expect(testNumbers.sumNumbers(3,-5)).to.equal('-2.00');
        });

        it('Works with floating points', ()=> {
            expect(testNumbers.sumNumbers(1.5555,0.3333)).to.equal('1.89');
        });

        it('Returns undefined with invalid parameters - string', ()=> {
            expect(testNumbers.sumNumbers('1','2')).to.equal(undefined);
            expect(testNumbers.sumNumbers(3,'2')).to.equal(undefined);
            expect(testNumbers.sumNumbers("3",2)).to.equal(undefined);
            expect(testNumbers.sumNumbers({},4)).to.equal(undefined);
        });

        it('Returns undefined with invalid parameters', ()=> {
            expect(testNumbers.sumNumbers(null,null)).to.equal(undefined);
            expect(testNumbers.sumNumbers(3,null)).to.equal(undefined);
            expect(testNumbers.sumNumbers(null,2)).to.equal(undefined);
            expect(testNumbers.sumNumbers([],4)).to.equal(undefined);
        });
    });

    describe('numberChecker', () => {
        it('Works with odd value', ()=> {
            expect(testNumbers.numberChecker(1)).to.contain("odd");
        });

        it('Works with even number', ()=> {
            expect(testNumbers.numberChecker(2)).to.contain("even");
        });

        it('Works with empty string', ()=> {
            expect(testNumbers.numberChecker('')).to.contain("even");
        });

        it('Works with odd value as string', ()=> {
            expect(testNumbers.numberChecker('1')).to.contain("odd");
        });

        it('Works with even number as string', ()=> {
            expect(testNumbers.numberChecker('2')).to.contain("even");
        });

        it('Detects invalid parameter' , () => {
            expect(() => testNumbers.numberChecker('a')).to.throw();
        });
    });

    describe('averageSumArray', () => {
        it('Works with integers' , () => {
            expect(testNumbers.averageSumArray([1,2,3])).to.equal(2);
        });

        it('Works with floats' , () => {
            expect(testNumbers.averageSumArray([1.5,2.5,3.5])).to.equal(2.5);
        });
    });
});