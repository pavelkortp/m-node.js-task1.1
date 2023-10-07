export class AbstractProduct {
    constructor(ID, name, description, price, brand, sizes, activeSize, quantity, date, reviews, images) {
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
    }
}

AbstractProduct.prototype.getId = function () {
    return this.ID;   
}
AbstractProduct.prototype.setId = function (ID) {
    return this.ID = ID;   
}

AbstractProduct.prototype.getName = function () {
    return this.name;   
}
AbstractProduct.prototype.setName = function (name) {
    return this.name = name;   
}

AbstractProduct.prototype.getDescription = function () {
    return this.description;   
}
AbstractProduct.prototype.setDescription = function (description) {
    return this.description = description;   
}

AbstractProduct.prototype.getPrice = function () {
    return this.ID;   
}
AbstractProduct.prototype.setId = function (ID) {
    return this.ID = ID;   
}

AbstractProduct.prototype.getId = function () {
    return this.ID;   
}
AbstractProduct.prototype.setId = function (ID) {
    return this.ID = ID;   
}

AbstractProduct.prototype.getId = function () {
    return this.ID;   
}
AbstractProduct.prototype.setId = function (ID) {
    return this.ID = ID;   
}
