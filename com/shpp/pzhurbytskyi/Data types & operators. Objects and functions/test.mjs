import {Product} from "./DataTypes.mjs";
import {Review} from "./DataTypes.mjs";
import {searchProducts} from "./DataTypes.mjs";
import {sortProducts} from "./DataTypes.mjs";

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
    const r = new Review();
    r.setId(i);
    r.setAuthor(`user ${i}`);
    r.setDate(new Date());
    r.setComment(`some comment`);
    r.setRating(rating);
    reviews.push(r);
}

const productsNumber = 20;
const products = [];
for (let i = 0; i < productsNumber; i++) {
    const sizes = [i, i + 2, i * 3, i + i];
    const name = `${i}-T-shirt`;
    products.push(new Product(i, name, `cool ${name}`, i * 10, `${i}-Nike`, sizes, i + i, i * 2 + 1, new Date(), reviews));
}

/**
 * Logging array items to console (one item = oune line)
 * @param {[]} array default array.
 */
function toConsoleByLines(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
    console.log('\n');
}

//tests
toConsoleByLines(searchProducts(products, `2`));// mas of 2 products
toConsoleByLines(searchProducts(products, `cool 2`));// mas of 1 product

let p = products[0];
console.log(p.getAverageRating());// average rating should be 8.2

toConsoleByLines(sortProducts(products, `price`));