import { Review } from "../Data types & operators. Objects and functions/DataTypes.mjs";

export class AbstractProduct {
    /**
     * Product`s constructor.
     * @param {string} ID unique identificator.
     * @param {string} name product`s name.
     * @param {string} description description for product.
     * @param {number} price price of in product.
     * @param {number} quantity available products.
     * @param {Review[]} reviews reviews about product.
     * @param {string[]} images product images.
     * @param {Date} date date.
     * @param {string} brand product`s brand.
     */
    constructor(ID, name, description, price, quantity, reviews, images, date, brand) {
        this.ID = ID;
        this.name = name;
        this.description = description;
        this.price = price;
        this.quantity = quantity;
        this.reviews = reviews;
        this.images = images;
        this.date = date;
        this.brand = brand;
    }
}
//Getters and setters

AbstractProduct.prototype.getId = function () {
    return this.ID;
}
AbstractProduct.prototype.setId = function (ID) {
    return this.ID = ID;
}
AbstractProduct.prototype.getName = function () {
    return this.name;
}
AbstractProduct.prototype.setName = function (name) {
    return this.name = name;
}
AbstractProduct.prototype.getDescription = function () {
    return this.description;
}
AbstractProduct.prototype.setDescription = function (description) {
    return this.description = description;
}
AbstractProduct.prototype.getPrice = function () {
    return this.price;
}
AbstractProduct.prototype.setPrice = function (price) {
    return this.price = price;
}
AbstractProduct.prototype.getBrand = function () {
    return this.brand;
}
AbstractProduct.prototype.setBrand = function (brand) {
    return this.brand = brand;
}
AbstractProduct.prototype.getQuantity = function () {
    return this.quantity;
}
AbstractProduct.prototype.setQuantity = function (quantity) {
    return this.quantity = quantity;
}
AbstractProduct.prototype.getDate = function () {
    return this.date;
}
AbstractProduct.prototype.setDate = function (date) {
    return this.date = date;
}
AbstractProduct.prototype.getReviews = function () {
    return this.reviews;
}
AbstractProduct.prototype.setReviews = function (reviews) {
    return this.reviews = reviews;
}
AbstractProduct.prototype.getImages = function () {
    return this.images;
}
AbstractProduct.prototype.setImages = function (images) {
    return this.images = images;
}


/**
 * @returns string with all info about obj.
 */
AbstractProduct.prototype.getFullInformation = function () {
    let res = ``;
    for (let key of Object.keys(this)) {
        res += `${key} : ${this[key]} \n`;
    }
    return res;
}
/**
 * @param n integer number of products (>0).
 * @returns price for n products.
 */
AbstractProduct.prototype.getPriceForQuantity = function (n) {
    let cost = this.price * n;
    return `$${cost}`;
}
/**
     * Finds review by ID and return it.
     * @param {string} ID unique key of review.
     * @returns finded review.
     */
AbstractProduct.prototype.getReviewByID = function (ID) {
    return this.reviews.filter((e) => e.getId() == ID);
}

/**
 * Finds image by name and returns it.
 * @param {string} name image name.
 * @returns finded image.
 */
AbstractProduct.prototype.getImage = function (name) {
    if (name !== undefined) {
        return this.images[name]
    }
    return this.images[0];
};

/**
 * Adds new review to reviews array.
 * @param {Review} review review which need ti be added. 
 */
AbstractProduct.prototype.addReview = function (review) { this.reviews.push(review) };

/**
* Removes review from reviews array.
* @param {Review} review review which need to be removed.
*/
AbstractProduct.prototype.deleteReview = function (review) {
    this.reviews = this.reviews.filter((e) => e != review);
};

/**
 * Calculate and returns average rating for product.
 * @returns product's average rating.
 */
AbstractProduct.prototype.getAverageRating = () => {
    let sumOfOne = 0;
    let sumOfAllReviews = 0;
    for (let i = 0; i < this.reviews.length; i++) {
        let review = this.reviews[i];
        let ratings = review.getRating();
        let keys = Object.keys(ratings);
        for (let key of keys) {
            let rate = ratings[key];
            sumOfOne += rate;
        }
        sumOfAllReviews += sumOfOne / keys.length;
        sumOfOne = 0;
    }
    return sumOfAllReviews / this.reviews.length;
}