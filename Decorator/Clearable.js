// -----------------------------------------------------
// Decorator. Realize functionality to clean input
function ClearableInput(element) {
    DecoratorInput.call(this, element);
}

ClearableInput.prototype = Object.create(DecoratorInput.prototype);
ClearableInput.prototype.constructor = ClearableInput;

ClearableInput.prototype.onClick = function () {
    this.super.setValue('');
}

ClearableInput.prototype.render = function() {
    var wrapper = document.createElement('div');
    wrapper.classList.add('clearable-input__wrapper');

    var input = this.super.render();
    wrapper.appendChild(input);

    var cross = document.createElement('span');
    cross.classList.add('clearable-input__cross');
    cross.textContent = 'X';
    cross.addEventListener('click', () => this.onClick());

    wrapper.appendChild(cross);
    return wrapper;
}
