import { AbstractProduct } from "./AbstractProduct.js";
import { Review } from "../Data types & operators. Objects and functions/DataTypes.js";


/**
* Electronic constructor.
* @param {string} ID unique id;
* @param {string} name name of Electronic.
* @param {string} description short description.
* @param {Number} price price one of Electronic.
* @param {Number} quantity count of Electronics.
* @param {Review[]} reviews array whis reviews. 
* @param {string[]} images images.
* @param {Date} date date.
* @param {string} brand brand of Electronic.
* @param {Number} warranty term of warranty (count of month).
* @param {Number} power Electronic power.
*/
export function Electronic(ID, name, description, price, quantity, reviews, images, date, brand, warranty, power) {
    AbstractProduct.call(this, ID, name, description, price, quantity, reviews, images, date, brand);
    this.warranty = warranty;
    this.power = power;
};

Object.assign(Electronic.prototype, AbstractProduct.prototype);
Object.assign(Electronic.prototype, {
    getWarranty: function () {
        return this.warranty;
    },

    setWarranty: function (warranty) {
        this.warranty = warranty;
    },

    getPower: function () {
        return this.power;
    },

    setPower: function (power) {
        this.power = power;
    }
});

let o = new Electronic(1, "Ps5", "console", 1, 22, [], ['ss'], new Date(), 's', 22, 22);
console.log();

