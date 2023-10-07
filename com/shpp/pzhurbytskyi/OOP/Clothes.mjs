import { AbstractProduct } from "./AbstractProduct.mjs";
import { Review } from "../Data types & operators. Objects and functions/DataTypes.mjs";

export class Clothes extends AbstractProduct {
    /**
     * Clothes constructor.
     * @param {string} ID unique id;
     * @param {string} name name of clothes.
     * @param {string} description short description.
     * @param {Number} price price one of clothes.
     * @param {Number} quantity count of clothes.
     * @param {Review[]} reviews array whis reviews. 
     * @param {string[]} images images.
     * @param {Date} date date.
     * @param {string} brand brand of clothes.
     * @param {string} material clothes material name.
     * @param {string} color clothes color.
     */
    constructor(ID, name, description, price, quantity, reviews, images, date, brand, material, color) {
        super(ID, name, description, price, quantity, reviews, images, date, brand);
        this.material = material;
        this.color = color;
    }
}

Clothes.prototype.getMaterial = function () {
    return this.material;
}
Clothes.prototype.setMaterial = function (material) {
    return this.material = material;
}
Clothes.prototype.getColor = function () {
    return this.color;
}
Clothes.prototype.setColor = function (color) {
    return this.color = color;
}