var Catalog = (function() {
    var strategy;
    var data = [];

    function Catalog() {}
    Catalog.prototype.getList = function() {
        return data;
    }

    Catalog.prototype.addProduct = function(product) {
        data.push(product);
    }

    Catalog.prototype.setStrategy = function(newStrategy) {
        strategy = newStrategy;
    }

    Catalog.prototype.sort = function() {
        strategy.sort(data);
    }

    return Catalog;
}());

const salt = {
    id: 1,
    price: 123,
    name: 'Salt',
    rating: 10
};

const apple = {
    id: 2,
    price: 222,
    name: 'Apple',
    rating: 5
};

const orange = {
    id: 3,
    price: 50,
    name: 'Orange',
    rating: 15
};

const sugar = {
    id: 4,
    price: 90,
    name: 'Sugar',
    rating: 7
};

// Strategy. Sort by price
function StrategyPrice() {}
StrategyPrice.prototype.sort = function(data) {
    data.sort(function(a, b) {
        return a.price > b.price;
    });
}

// Strategy. Sort by name
function StrategyName() {}
StrategyName.prototype.sort = function(data) {
    data.sort(function(a, b) {
        return a.name > b.name;
    });
}

// Strategy. Sort by rating
function StrategyRating() {}
StrategyRating.prototype.sort = function(data) {
    data.sort(function(a, b) {
        return a.rating > b.rating;
    });
}

var catalog = new Catalog();
catalog.addProduct(salt);
catalog.addProduct(apple);
catalog.addProduct(orange);
catalog.addProduct(sugar);
catalog.getList();

var sortBy = function(strategy) {
    if (strategy === 'name') catalog.setStrategy( new StrategyName() )
    else if (strategy === 'price') catalog.setStrategy( new StrategyPrice() )
    else if (strategy === 'rating') catalog.setStrategy( new StrategyRating() )

    catalog.sort();
}

sortBy('price');
catalog.getList();
