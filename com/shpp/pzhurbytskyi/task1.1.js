/**
 * Review of product.
 * @param {string} ID Review key (unique value).
 * @param {string} author Author of review.
 * @param {Date} date date
 * @param {string} comment comment
 * @param {{}} rating Associate Array with keys 'service', 'price', 'value', 'quality'
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
 * @param {string[]} sizes Array of sizes
 * @param {string} activeSize Active size
 * @param {number} quantity Quantity of products available
 * @param {Date} date Date
 * @param {Review[]} reviews Array of rewiews
 * @param {string[]} images images.
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
        for (let i = 0; i < this.reviews.lenght; i++) {
            for (let j = 0; i < this.reviews[i].getRating.lenght; j++) {
                sumOfOne += reviews.getRating[j];
            }
            sumOfAllReviews += sumOfOne / this.reviews[i].getRating.lenght;
            sumOfOne = 0;
        }
        return sumOfAllReviews / reviews.lenght;
    }
}

/**
 * Finds products by key-word.
 * @param {Product[]} products array of products.
 * @param {string} search key-word.
 */
function searchProducts(products, search) {
    return products.filter((e) => e.getName().includes(search) || e.getDescription().includes(search));
}

/**
 * 
 * @param {Review[]} products 
 * @param {()}
    
 }} sortRule 
 */
function sortProducts(products, sortRule) {
    return products.sort(sortRule);
}


//Generating data for tests.
const reviewsNumber = 20;
const reviews = [];
for (let i = 0; i < reviewsNumber; i++) {
    let j = i % 5 == 0 ? 1 : i;
    const rating = {
        service: j,
        price: j,
        value: j,
        quality: j,
    };
    reviews.push(new Review(i, `user ${i}`, new Date(), `some comment`, rating));
}

const productsNumber = 20;
const products = [];
for (let i = 0; i < productsNumber; i++) {
    const sizes = [i, i + 2, i * 3, i + i];
    const name = `${i}-T-shirt`;
    products.push(new Product(i, name, `cool ${name}`, i * 10, `${i}-Nike`, sizes, i + i, i * 2 + 1, new Date(), reviews));
}

function toConsoleBtLines(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
    console.log('\n');
}

//tests
toConsoleBtLines(searchProducts(products, `2`));// mas of 2 products
toConsoleBtLines(searchProducts(products, `cool 2`));// mas of 1 product

toConsoleBtLines(sortProducts(products, (a, b) => b.getPrice() - a.getPrice()));


