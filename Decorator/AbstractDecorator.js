// -----------------------------------------------------
// Abstract decorator layer ( class )
function DecoratorInput(object) {
    this.super = object;
}

DecoratorInput.prototype = Object.create(Input.prototype);
DecoratorInput.prototype.constructor = DecoratorInput;

// need to realize all methods on primary class
DecoratorInput.prototype.addClassName = function(className) {
    this.super.addClassName(className);
}

DecoratorInput.prototype.removeClassName = function(className) {
    this.super.removeClassName(className);
}

DecoratorInput.prototype.setOnChangeCallback = function(callback) {
    this.super.setOnChangeCallback(callback);
}

DecoratorInput.prototype.setValue = function (value) {
    this.super.setValue(value);
}