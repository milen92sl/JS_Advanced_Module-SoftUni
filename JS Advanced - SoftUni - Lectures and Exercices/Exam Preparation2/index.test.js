
const { assert, expect } = require('chai');
const library = require('./index.js');

describe('Library tests', () => {

    describe('calcPriceOfBook tests', () => {
        it('invalid input - name of the book', () => {
            expect(() => library.calcPriceOfBook(1, 1)).to.throw('Invalid input');
        });

        it('invalid input - year', () => {
            expect(() => library.calcPriceOfBook('1', '1')).to.throw('Invalid input');
        });

        it('Valid data and year is below 1980', () => {
            expect(library.calcPriceOfBook('The Little Prince', 1943)).to.equal(`Price of The Little Prince is 10.00`);
        });

        it('Valid data and year is equal to 1980', () => {
            expect(library.calcPriceOfBook('The Little Prince', 1980)).to.equal(`Price of The Little Prince is 10.00`);
        });

        it('Valid data and year is greater than 1980', () => {
            expect(library.calcPriceOfBook('The Little Prince', 1992)).to.equal(`Price of The Little Prince is 20.00`);
        });
    });
    describe('findBook tests', () => {
        it('Invalid input - empty array', () => {
            expect(() => library.findBook([], 'The little prince')).to.throw('No books currently available');
        });

        it('Invalid ino+put - available book', () => {
            expect(library.findBook(['The little prince', 'The Secret', 'To the Moon and back'], 'The little prince')).to.equal('We found the book you want.');
        });

        it('Invalid input - not available book', () => {
            expect(library.findBook(['The little princes', 'The Secret', 'To the Moon and back'], 'Troy')).to.equal('The book you are looking for is not here!');
        });
    })
    describe('arrangeTheBooks tests', () => {
        it('invalid input - invalid input - string', () => {
            expect(() => library.arrangeTheBooks('asd')).to.throw('Invalid input');
        });

        it('invalid input - invalid count with negative number', () => {
            expect(() => library.arrangeTheBooks(-5)).to.throw('Invalid input');
        });

        it('Valid input - less than available space on the shelves', () => {
            expect(library.arrangeTheBooks(25)).to.equal('Great job, the books are arranged.');
        });

        it('Valid input - equal to the available space on the shelves', () => {
            expect(library.arrangeTheBooks(40)).to.equal('Great job, the books are arranged.');
        });

        it('Valid input but greater than available spaces on the shelves', () => {
            expect(library.arrangeTheBooks(50)).to.equal('Insufficient space, more shelves need to be purchased.');
        });
    })
})