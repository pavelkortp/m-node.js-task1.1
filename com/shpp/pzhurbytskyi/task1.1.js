/**
 * Review of product.
 * @param {string} ID Review key (unique value).
 * @param {string} author Author of review.
 * @param {Date} date date
 * @param {string} comment comment
 * @param {[]} rating Associate Array with keys 'service', 'price', 'value', 'quality'
 */
function Review(ID, author, date, comment, rating) {
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
 * @param {Array[string]} sizes Array of sizes
 * @param {string} activeSize Active size
 * @param {number} quantity Quantity of products available
 * @param {Date} date Date
 * @param {Array[Review]} reviews Array of rewiews
 * @param {Array[string]} images images.
 */
function Product(ID, name, description, price, brand, sizes, activeSize, quantity, date, reviews, images) {
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
    this.getImages = (name) => images[name];

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

    this.getAverageRating = () => {
        let sum1 = 0;
        let sum2 = 0;
        for(let i = 0; i<this.reviews.lenght; i++){
            for(let j = 0; i<this.reviews[i].getRating.lenght; j++){
                sum1+=reviews.getRating[j];
            }
            sum2+=sum1/this.reviews[i].getRating.lenght;
            sum1 = 0;
        }
        return sum2/reviews.lenght;
    }


}


let p = new Product(1, "T-short", "description", 20, "Abibas", ["1", "2", "3", "4", "5", "1"]);
console.log(p.getSizes());
p.deleteSize(5);
console.log(p.getSizes());

