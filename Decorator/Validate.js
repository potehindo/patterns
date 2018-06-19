// Functionality for validate input element data.
function ValidatedInput(object) {
    DecoratorInput.call(this, object);
    this.super.setOnChangeCallback((e) => {
        this.validate(e && e.target.value || '') ? this.addClassName(this.errorClassName) : this.removeClassName(this.errorClassName);
    });
}

ValidatedInput.prototype = Object.create(DecoratorInput.prototype);
ValidatedInput.prototype.constructor = ValidatedInput;

ValidatedInput.prototype.addClassName = function (className) {
    this.super.addClassName(className)
}

ValidatedInput.prototype.removeClassName = function (className) {
    this.super.removeClassName(className);
}

ValidatedInput.prototype.validate = function (value) {
    return this.mask.test(value);
}

ValidatedInput.prototype.setMask = function (mask) {
    this.mask = mask;
}

ValidatedInput.prototype.setErrorClassName = function(className) {
    this.errorClassName = className;
}

ValidatedInput.prototype.render = function () {
    return this.super.render();
}