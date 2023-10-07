/**
 * Review of product.
 * @param {string} ID Review key (unique value).
 * @param {string} author Author of review.
 * @param {Date} date date
 * @param {string} comment comment
 * @param {{}} rating Associate Array with keys 'service', 'price', 'value', 'quality'
 */
export function Review(ID, author, date, comment, rating) {
    this.ID = ID;
    this.author = author;
    this.date = date;
    this.comment = comment;
    this.rating = rating;

    this.getId = () => this.ID;
    this.getAuthor = () => this.author;
    this.getDate = () => this.date;
    this.getComment = () => this.comment;
    this.getRating = () => this.rating;


    this.setId = (ID) => { this.ID = ID };
    this.setAuthor = (author) => { this.author = author };
    this.setDate = (date) => { this.date = date };
    this.setComment = (comment) => { this.comment = comment };
    this.setRating = (rating) => { this.rating = rating };
}

/**
 * Creates a product.
 * @param {string} ID Product key (unique value)
 * @param {string} name Product's name
 * @param {string} description Short description
 * @param {number} price Price of one item
 * @param {string} brand Brand
 * @param {string[]} sizes Array of sizes
 * @param {string} activeSize Active size
 * @param {number} quantity Quantity of products available
 * @param {Date} date Date
 * @param {Review[]} reviews Array of rewiews
 * @param {string[]} images images.
 */
export function Product(ID, name, description, price, brand, sizes, activeSize, quantity, date, reviews, images) {
    this.ID = ID;
    this.name = name;
    this.description = description;
    this.price = price;
    this.brand = brand;
    this.sizes = sizes;
    this.activeSize = activeSize;
    this.quantity = quantity;
    this.date = date;
    this.reviews = reviews;
    this.images = images;

    this.getId = () => this.ID;
    this.getName = () => this.name;
    this.getDescription = () => this.description;
    this.getPrice = () => this.price;
    this.getBrand = () => this.brand;
    this.getSizes = () => this.sizes;
    this.getActiveSize = () => this.activeSize;
    this.getQuantity = () => this.quantity;
    this.getDate = () => this.date;
    this.getRewiews = () => this.reviews;
    this.getImages = () => this.images;

    this.setId = (ID) => { this.ID = ID };
    this.setName = (name) => { this.name = name };
    this.setDescription = (description) => { this.description = description };
    this.setPrice = (price) => { this.price = price };
    this.setBrand = (brand) => { this.brand = brand };
    this.setSizes = (sizes) => { this.sizes = sizes };
    this.setActiveSize = (activeSize) => { this.activeSize = activeSize };
    this.setQuantity = (quantity) => { this.quantity = quantity };
    this.setDate = (date) => { this.date = date };
    this.setReviews = (reviews) => { this.reviews = reviews };
    this.setImages = (images) => { this.images = images };

    /**
     * Finds review by ID and return it.
     * @param {string} ID unique key of review.
     * @returns finded review.
     */
    this.getReviewByID = (ID) => {
        return reviews.filter((e) => e.getId() == ID);
    }

    /**
     * Finds image by name and returns it.
     * @param {string} name image name.
     * @returns finded image.
     */
    this.getImage = (name) => {
        if (name !== undefined) {
            return images[name]
        }
        return images[0];
    };

    /**
     * Adds size to sizes array.
     * @param {number} size size of product.
     */
    this.addSize = (size) => { this.sizes.push(size) };

    /**
     * Removes size from sizes array.
     * @param {number} size size which need to be removed.
     */
    this.deleteSize = (size) => {
        this.sizes = this.sizes.filter((e) => e != size);
    };

    /**
     * Adds new review to reviews array.
     * @param {Review} review review which need ti be added. 
     */
    this.addReview = (review) => { this.reviews.push(review) };

    /**
    * Removes review from reviews array.
    * @param {Review} review review which need to be removed.
    */
    this.deleteReview = (review) => {
        this.reviews = this.reviews.filter((e) => e != review);
    };

    /**
     * Calculate and returns average rating for product.
     * @returns product's average rating.
     */
    this.getAverageRating = () => {
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
        return sumOfAllReviews / reviews.length;
    }
}

/**
 * Finds products by key-word.
 * @param {Product[]} products array of products.
 * @param {string} search key-word.
 */
export function searchProducts(products, search) {
    return products.filter((e) => e.getName().includes(search) || e.getDescription().includes(search));
}

/**
 * Sorts products by sort rule and return sorted array.
 * @param {Review[]} products array of products.
 * @param {Function} sortRule How to sort arr.
 * @returns sorted arr.
 */
export function sortProducts(products, sortRule) {
    return products.sort((a, b) => a[sortRule] - b[sortRule]);
}







