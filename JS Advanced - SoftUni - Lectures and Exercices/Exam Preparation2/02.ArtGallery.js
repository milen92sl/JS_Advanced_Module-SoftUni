class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = {
            "picture": 200,
            "photo": 50,
            "item": 250
        };
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity) {
        articleModel = articleModel.toLowerCase();

        let isInTheArr = false;

        if (!this.possibleArticles[articleModel]) {
            throw new Error('This article model is not included in this gallery!');
        }

        for (const el of this.listOfArticles) {
            if (el.articleName === articleName && el.articleModel == articleModel) {
                el.quantity += Number(quantity);
                isInTheArr = true;
            }
        }

        if (!isInTheArr) {
            this.listOfArticles.push({ articleModel, articleName, quantity });
        }

        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
    }
    inviteGuest(guestName, personality) {
        for (const guest of this.guests) {
            if (guest.guestName === guestName) {
                throw new Error(`${guestName} has already been invited.`)
            }
        }
        let obj = { guestName, points: 0, purchaseArticle: 0 };

        switch (personality) {
            case 'Vip': obj.points = 500; break;
            case 'Middle': obj.points = 250; break;
            default: obj.points = 50; break;
        }

        this.guests.push(obj);

        return `You have successfully invited ${guestName}!`
    }
    buyArticle(articleModel, articleName, guestName) {
        let article;
        let guest;

        let isArticleInTheArray = false;


        for (let el of this.listOfArticles) {
            if (el.articleName !== articleName || el.articleModel !== articleModel) {
                isArticleInTheArray = false
            } else {
                article = el;
                isArticleInTheArray = true;
                break;
            }
        }
        if (!isArticleInTheArray) {
            throw new Error('This article is not found.');
        }
        if (article.quantity = 0) {
            throw new Error(`The ${articleName} is not available.`)
        }

        let isGuestInTheArray = false;
        for (let el of this.guests) {
            if (el.guestName !== guestName) {
                isGuestInTheArray = false
            } else {
                guest = el;
                isGuestInTheArray = true;
                break;
            }
        }
        if (!isGuestInTheArray) {
            return 'This guest is not invited.';
        }
        if (guest.points < this.possibleArticles[articleModel]) {
            return 'You need to more points to purchase the article.';
        } else {
            article.quantity--;
            guest.points -= this.possibleArticles[articleModel];
            guest.purchaseArticle++;
        }

        return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`

    }
    showGalleryInfo(criteria) {
        let result = [];
        if (criteria === "article") {
            result.push("Articles information:");
            this.listOfArticles.forEach(obj => {
                //{articleModel, articleName, quantity}
                console.log(obj);
                result.push(`${obj.articleModel} - ${obj.articleName} - ${obj.quantity}`);
            });
        } else if (criteria === "guest") {
            result.push("Guests information:");
            // {guestName, points: status, purchaseArticle: 0}
            this.guests.forEach(obj => {
                result.push(`${obj.guestName} - ${obj.purchaseArticle}`);
            });
        }
        return result.join('\n');
    }
}

const artGallery = new ArtGallery('Curtis Mayfield');
console.log(artGallery.addArticle('picture', 'Mona Liza', 3));
console.log(artGallery.addArticle('Item', 'Ancient vase', 2));
console.log(artGallery.addArticle('PICTURE', 'Mona Liza', 1));
// Successfully added article Mona Liza with a new quantity- 3.
// Successfully added article Ancient vase with a new quantity- 2.
// Successfully added article Mona Liza with a new quantity- 1.

console.log(artGallery.inviteGuest('John', 'Vip'));
console.log(artGallery.inviteGuest('Peter', 'Middle'));
console.log(artGallery.inviteGuest('John', 'Middle'));
// // You have successfully invited John!
// // You have successfully invited Peter!
// // John has already been invited.
console.log(artGallery.showGalleryInfo('guest'));
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery);