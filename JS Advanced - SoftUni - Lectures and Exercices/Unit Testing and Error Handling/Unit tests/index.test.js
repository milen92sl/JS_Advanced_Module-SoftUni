const mathEnforcer = require('./index.js');
const { assert, expect } = require('chai');

describe('mathEnforcer function tests', () => {

    describe('add five function tests', () => {
        //Tests with incorrect input
        it('Should return undefined with string', () => {
            assert(mathEnforcer.addFive('TEST') === undefined);
        });
        it('Should return undefined with an object', () => {
            assert(mathEnforcer.addFive({}) === undefined);
        });
        it('Should return undefined with an array', () => {
            assert(mathEnforcer.addFive([]) === undefined);
        });
        it('Should return undefined with undefined', () => {
            assert(mathEnforcer.addFive(undefined) === undefined);
        });
        it('Should return undefined with null', () => {
            assert(mathEnforcer.addFive(null) === undefined);
        });
        //Tests with correct input
        it('Positive integer number +5', () => {
            assert(mathEnforcer.addFive(5) === 10);
        });

        it('Negative number +5', () => {
            assert(mathEnforcer.addFive(-5) === 0);
        });

        it('Decimal number +5', () => {
            assert(mathEnforcer.addFive(5.5) === 10.5);
        });
    });

    describe('subtract ten function tests', () => {
        // Test with incorrect input
        it('Should return undefined with string', () => {
            assert(mathEnforcer.subtractTen('TEST') === undefined);
        });
        it('Should return undefined with an object', () => {
            assert(mathEnforcer.subtractTen({}) === undefined);
        });
        it('Should return undefined with an array', () => {
            assert(mathEnforcer.subtractTen([]) === undefined);
        });
        it('Should return undefined with undefined', () => {
            assert(mathEnforcer.subtractTen(undefined) === undefined);
        });
        it('Should return undefined with null', () => {
            assert(mathEnforcer.subtractTen(null) === undefined);
        });

        //Tests with correct input
        it('Positive integer number -10', () => {
            assert(mathEnforcer.subtractTen(5) === -5);
        });

        it('Negative number -10', () => {
            assert(mathEnforcer.subtractTen(-5) === -15);
        });

        it('Decimal number -10', () => {
            assert(mathEnforcer.subtractTen(15.5) === 5.5);
        });
    });

    describe('sum of two numbers function tests', () => {
        //Tests with correct input
        it('Two positive integer numbers', () => {
            assert(mathEnforcer.sum(3,2) === 5);
        });

        it('Two negative integer numbers', () => {
            assert(mathEnforcer.sum(-3,-2) === -5);
        });

        it('Two decimal numbers', () => {
            assert(mathEnforcer.sum(10.5,2.1) === 12.6);
        });

        //Tests with incorrect input
        it('First parameter string, second number', ()=>{
            assert(mathEnforcer.sum('', 20) === undefined)
        })

        it('First parameter number, second string', ()=>{
            assert(mathEnforcer.sum(20, 'asd') === undefined)
        })        
    });
});