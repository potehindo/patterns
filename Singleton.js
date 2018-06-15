// Pattern "Singleton"
var ShoppingCart = (function() {
    // private methods and variables
    var instance;
    var sum = 0;
    var goods = [];

    function Singleton() {
        if (!instance) {
            instance = this;
        } else {
            return instance;
        }
    }

    Singleton.prototype.addProduct = function(product) {
        sum += parseInt(product.price);
        goods.push(product);
    }

    Singleton.prototype.getSum = function() {
        return sum;
    }

    Singleton.prototype.getGoods = function() {
        return goods;
    }

    return Singleton;
}());

const salt = {
    name: 'Salt',
    price: '20'
};

var s1 = new ShoppingCart();
var s2 = new ShoppingCart();

s1.addProduct(salt);
s2.addProduct(salt);
s1.getGoods();
s2.getSum();
