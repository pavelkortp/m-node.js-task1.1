import { AbstractProduct } from "./AbstractProduct.js";
import { Review } from "../Data types & operators. Objects and functions/DataTypes.js";

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
export function Clothes(ID, name, description, price, quantity, reviews, images, date, brand, material, color) {
    AbstractProduct.call(this, ID, name, description, price, quantity, reviews, images, date, brand);
    this.material = material;
    this.color = color;
}

Object.assign(Clothes.prototype, AbstractProduct.prototype);
Object.assign(Clothes.prototype, {
    getMaterial: function () {
        return this.material;
    },

    setMaterial: function (material) {
        return this.material = material;
    },

    getColor: function () {
        return this.color;
    },

    setColor: function (color) {
        return this.color = color;
    }
})

