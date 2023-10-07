import { Clothes } from "./Clothes.mjs";
import { Electronic } from "./Electronic.mjs";
import { Review, searchProducts, sortProducts} from "../Data types & operators. Objects and functions/DataTypes.mjs";
import {toConsoleByLines as log} from "../Data types & operators. Objects and functions/test.mjs";

const reviews1 = [];
for (let i = 0; i < 10; i++) {
    const r = new Review();
    r.setId(i);
    r.setAuthor(`user-${i}`);
    r.setDate(new Date());
    r.setComment(`good`);
    const randomGrade = Math.floor(Math.random() * 9) + 5;
    r.setRating({
        service: randomGrade + 1,
        price: randomGrade - 2,
        value: randomGrade - 1,
        quality: randomGrade,
    });
    reviews1.push(r);
}
for (let i = 0; i < 10; i++) {
    const r = new Review();
    r.setId(i);
    r.setAuthor(`user-${i + 10}`);
    r.setDate(new Date());
    r.setComment(`Bad`);
    const randomGrade = Math.floor(Math.random() * 5) + 1;
    r.setRating({
        service: randomGrade + 1,
        price: randomGrade + 2,
        value: randomGrade - 1,
        quality: randomGrade,
    });
    reviews1.push(r);
}
let images = ['front', 'left', 'top', 'back'];


const c = new Clothes(12300, 'Puma sneakers', 'cool', 79, 100, reviews1, images, new Date(), 'Puma', 'rubber', 'white');
const e = new Electronic(1252, 'PlayStation 5', 'gaming console', 499, 211, reviews1, images, new Date(), 'Sony', 12, 75);

console.log(c.getFullInformation());
console.log(`Price of 22 pair of sneakers ${c.getPriceForQuantity(22)}`);
console.log(c.getColor());
console.log(c.getMaterial());
console.log(e.getFullInformation());
console.log(`Price of 24 consoles ${e.getPriceForQuantity(24)}`);
console.log(e.getWarranty());
console.log(e.getPower());

const products = [];
products.push(new Clothes(123, 'Puma sneakers', 'sports', 79, 100, reviews1, images, new Date(), 'Puma', 'rubber', 'white'));
products.push(new Clothes(124, 'Puma sport sneakers', 'sport', 15, 123, reviews1, images, new Date(), 'Puma', 'rubber', 'black'));
products.push(new Clothes(121, 'Puma sneakers', 'style', 100, 115, reviews1, images, new Date(), 'Puma', 'rubber', 'yellow'));
products.push(new Clothes(111, 'Puma run sneakers', 'running', 44, 144, reviews1, images, new Date(), 'Puma', 'rubber', 'green'));
products.push(new Clothes(121, 'Puma football sneakers', 'football', 65, 11, reviews1, images, new Date(), 'Puma', 'rubber', 'red'));

log(searchProducts(products, `sport`));//mas of 2 sneackers.
log(sortProducts(products, `ID`)); // sorted by ID.
log(sortProducts(products, `price`)); // sorted by price.
log(sortProducts(products, `name`)); // sorted by ID.
log(sortProducts(products, `quantity`)); // sorted by ID.