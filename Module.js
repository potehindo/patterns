/**
 * Pattern "Module"
 */
var ShoppingCart = (function(){
    // private variables and methods
    var sum = 0;
    var goods = [];

    // public methods
    return {
        addProduct: function(product) {
            sum += parseInt(product.price);
            goods.push(product);
        },
        getListOfProducts: function() {
            return goods;
        },
        getSum: function() {
            return sum;
        }
    };
}());

// product 1
var apple = {
    name: 'Яблоко',
    price: '20'
};

// product 2
var salt = {
    name: 'Соль',
    price: '10'
};


// Example
ShoppingCart.addProduct(apple);
ShoppingCart.addProduct(salt);
ShoppingCart.getListOfProducts(); // [{...},{...}]
ShoppingCart.getSum(); // 30