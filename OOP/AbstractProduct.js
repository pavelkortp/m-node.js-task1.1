import { Review } from "../Data types & operators. Objects and functions/DataTypes.js";

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
export function AbstractProduct(ID, name, description, price, quantity, reviews, images, date, brand) {
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


Object.assign(AbstractProduct.prototype, {
    /**
     * Gets value or sets sets a new value.
     * If we need get, put only property in args.
     * @param {string} property name of property.
     * @param {*} value new value.
     * @returns value or nothing.
     */
    property: function (property, value = undefined) {
        if (value === undefined) return this[property];
        this[property] = value;
    },

    getId: function () {
        return this.ID;
    },
    setId: function (ID) {
        return this.ID = ID;
    },

    getName: function () {
        return this.name;
    },
    setName: function (name) {
        return this.name = name;
    },

    getDescription: function () {
        return this.description;
    },
    setDescription: function (description) {
        return this.description = description;
    },

    getPrice: function () {
        return this.price;
    },
    setPrice: function (price) {
        return this.price = price;
    },

    getBrand: function () {
        return this.brand;
    },
    setBrand: function (brand) {
        return this.brand = brand;
    },

    getQuantity: function () {
        return this.quantity;
    },
    setQuantity: function (quantity) {
        return this.quantity = quantity;
    },

    getDate: function () {
        return this.date;
    },
    setDate: function (date) {
        return this.date = date;
    },

    getReviews: function () {
        return this.reviews;
    },
    setReviews: function (reviews) {
        return this.reviews = reviews;
    },

    getImages: function () {
        return this.images;
    },
    setImages: function (images) {
        return this.images = images;
    },

    /**
    * @returns string with all info about obj.
    */
    getFullInformation: function () {
        let res = ``;
        for (let key of Object.keys(this)) {
            res += `${key} : ${this[key]} \n`;
        }
        return res;
    },
    /**
     * @param n integer number of products (>0).
     * @returns price for n products.
     */
    getPriceForQuantity: function (n) {
        let cost = this.price * n;
        return `$${cost}`;
    },

    /**
     * Finds review by ID and return it.
     * @param {string} ID unique key of review.
     * @returns finded review.
     */
    getReviewByID: function (ID) {
        return this.reviews.filter((e) => e.getId() == ID);
    },

    /**
    * Finds image by name and returns it.
    * @param {string} name image name.
    * @returns finded image.
    */
    getImage: function (name) {
        if (name !== undefined) {
            return this.images[name]
        }
        return this.images[0];
    },

    /**
     * Adds new review to reviews array.
     * @param {Review} review review which need ti be added. 
     */
    addReview: function (review) { this.reviews.push(review) },

    /**
    * Removes review from reviews array.
    * @param {Review} review review which need to be removed.
    */
    deleteReview: function (review) {
        this.reviews = this.reviews.filter((e) => e != review);
    },


    /**
     * Calculate and returns average rating for product.
     * @returns product's average rating.
     */
    getAverageRating: function () {
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
})












