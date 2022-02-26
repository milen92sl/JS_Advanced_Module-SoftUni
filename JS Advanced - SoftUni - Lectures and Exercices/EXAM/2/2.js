class LibraryCollection {
    constructor(capacity){
        this.capacity = capacity;
        this.books = [];
    }

    addBook(bookName, bookAuthor){
        bookName = bookName.toLowerCase();

        if (this.capacity <= 0) {
            throw new Error('Not enough space in the collection.');
        }else{
            this.books.push({ bookName, bookAuthor, payed: false });
            this.capacity--;
        }

        return `The ${bookName}, with an author ${bookAuthor}, collect.`
    }

    payBook( bookName ) {
        let book;
        let isBookInTheArray = false;
        for (let el of this.books) {
             if(el.bookName !== bookName) {
                book = el;
                book.payed = true
                isBookInTheArray = true;
                return `${bookName} has been successfully paid.`;
            }
        }
        if (!isBookInTheArray) {
            throw new Error(`${bookName} is not in the collection.`);
        }
        if (book.payed === true) {
            throw new Error(`The ${bookName} has already been paid.`)
        }

    }

    removeBook(bookName) {

        let book;
        let isBookInTheArray = false;
        for (let el of this.books) {
            if (el.bookName !== bookName) {
                isBookInTheArray = false;
            } else {
                book = el;
                this.books.removeBook(bookName);
                isBookInTheArray = true;
                return `${bookName} remove from the collection.`
            }
        }

        if (!isBookInTheArray) {
            throw new Error(`The book, you're looking for, is not found.`);
        }

        if (book.payed === false) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`)
        }

    }

    getStatistics(bookAuthor){
        let result = [];
        let emptySlots = this.capacity;
        let payedBook = '';
        
        if (bookAuthor === '') {
            result.push(`The book collection has ${emptySlots} empty spots left.`);
            this.books.forEach(obj => {
                //{articleModel, articleName, quantity}
                console.log(obj);
                if(obj.payed == true){
                   payedBook = 'Has Paid';                    
                }else{
                    payedBook = 'Not Paid';
                }
                result.push(`${obj.bookName} == ${obj.bookAuthor} - ${payedBook}`);
            });
        } else if (bookAuthor === "bookAuthor") {
            this.books.forEach(obj => {
                if(obj.payed == true){
                    payedBook = 'Has Paid';                    
                 }else{
                     payedBook = 'Not Paid';
                 }
                result.push(`${obj.bookName} == ${obj.bookAuthor} - ${payedBook}`);
                if(this.books.find(bookAuthor == obj.bookAuthor)){
                    throw new Error(`${bookAuthor} is not in the collection.`)
                }
            });
        }
        return result.join('\n');
    }
}


const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());
