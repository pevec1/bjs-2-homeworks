class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state_ = 100;
        this.type = null;
    }
    get state() {
        return this.state_;
    }
    set state(stateFix) {
        if (stateFix >= 100) {
            //alert(this.state)
            this.state_ = 100;
        } else if (stateFix < 0) {
            this.state_ = 0;
        } else {
            //alert(state)
            this.state_ = stateFix;
        }
    }
    fix() {
        return this.state *= 1.5;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.state_ = 100;
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.state_ = 100;
        this.type = 'book';
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.state_ = 100;
        this.type = 'novel';
    }
}


class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.state_ = 100;
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.state_ = 100;
        this.type = 'detective';
    }
}

//exe 2

class Library extends Book {
    constructor(nameLib, author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.name = nameLib;
        this.books = [];
    }
    addBook(book) {
        if (this.state > 30) {
            return this.books.push(book);
        }
    }
    findBookBy(type, value) {
        for (let i = 0; i < this.books.length; i++) {
            for (let key in this.books[i - 1]) {
                if (this.books[i][type] == value) {
                    return this.books[i];
                } else {
                    return null;
                }
            }
        }
    }
    giveBookByName(bookName) {
        for (let i = 0; i < this.books.length; i++) {
            for (let key in this.books[i]) {
                if (this.books[i][key] != bookName) {
                    const book = this.books[i];
                    this.books.splice(i, 1);
                    return book;
                }
            }
        }
        return null;
    }
}
