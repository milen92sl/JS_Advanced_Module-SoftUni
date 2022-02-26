class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }
 
    addBook(bookName, bookAuthor) {
        if (this.books.length === this.capacity) {
            throw new Error('Not enough space in the collection.')
        } else {
            let book = {
                bookName,
                bookAuthor,
                payed: false,
            }
            this.books.push(book)
            return `The ${bookName}, with an author ${bookAuthor}, collect.`
        }
    }
 
    payBook(bookName) {
        if (!this.isExist(bookName)) {
            throw new Error(`${bookName} is not in the collection.`)
        } else if (this.isPayed(bookName)) {
            throw new Error(`${bookName} has already been paid.`);
        } else {
            let book = this.findBook(bookName)
            book.payed = true
            return `${bookName} has been successfully paid.`
        }
    }
 
    removeBook(bookName) {
        if (!this.isExist(bookName)) {
            throw new Error("The book, you're looking for, is not found.")
        } else if (!this.isPayed(bookName)) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`);
        } else {
            let book = this.findBook(bookName)
            let index = this.books.indexOf(book)
            this.books.splice(index, 1)
            return `${bookName} remove from the collection.`
        }
    }
 
    getStatistics(bookAuthor) {
        let emptySlots = this.capacity - this.books.length
        if (!bookAuthor) {
            let sortedBooks = this.sortBooks(this.books)
            let toPrint = `The book collection has ${emptySlots} empty spots left.\n` +
                sortedBooks.map(book => {
                    let paid = (book.payed) ? 'Has Paid' : 'Not Paid';
                    return `${book.bookName} == ${book.bookAuthor} - ${paid}.`
                }).join('\n')
            return toPrint
        } else {
            if (!this.isAuthorExist(bookAuthor)) {
                throw new Error(`${bookAuthor} is not in the collection.`)
            } else {
                let filteredBooks = this.filterBooks(bookAuthor, this.books)
                let toPrint = filteredBooks.map(book => {
                    let paid = (book.payed) ? 'Has Paid' : 'Not Paid';
                    return `${book.bookName} == ${book.bookAuthor} - ${paid}.`
                }).join('\n')
                return toPrint
            }
        }
    }
 
    sortBooks(books) {
        let sortedBooks = books.sort((a, b) => {
            return a.bookName.localeCompare(b.bookName)
        })
        return sortedBooks
    }
 
    filterBooks(author, books) {
        let filteredBooks = books.filter(book => {
            return book.bookAuthor === author
        })
        return filteredBooks
    }
 
 
    isExist(bookName) {
        return this.findBook(bookName) ? true : false;
    }
    isPayed(bookName) {
        return this.findBook(bookName).payed ? true : false;
    }
    findBook(bookName) {
        return this.books.find(book => book.bookName === bookName)
    }
 
    isAuthorExist(author) {
        return this.findAuthor(author) ? true : false;
    }
    findAuthor(author) {
        return this.books.find(book => book.bookAuthor === author)
    }
}