import { AbstractProduct } from "./AbstractProduct.mjs";
import { Review } from "../Data types & operators. Objects and functions/DataTypes.mjs";

export class Electronic extends AbstractProduct {
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
    constructor(ID, name, description, price, quantity, reviews, images, date, brand, warranty, power) {
        super(ID, name, description, price, quantity, reviews, images, date, brand);
        this.warranty = warranty;
        this.power = power;
    }
}

Electronic.prototype.getWarranty = function () {
    return this.warranty;
}
Electronic.prototype.setWarranty = function (warranty) {
    this.warranty = warranty;
}
Electronic.prototype.getPower = function () {
    return this.power;
}
Electronic.prototype.setPower = function (power) {
    this.power = power;
}