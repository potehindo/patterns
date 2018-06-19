// Base class (component).
function Input (props) {
    this.props = props;
}

Input.prototype.addClassName = function(className) {
    this.input.classList.add(className);
}

Input.prototype.removeClassName = function(className) {
    this.input.classList.remove(className);
}

Input.prototype.setValue = function (value) {
    this.input.value = value;
    this.onChangeCallback && this.onChangeCallback(null);
}

Input.prototype.setOnChangeCallback = function (callback) {
    this.onChangeCallback = callback;
}

Input.prototype.onChange = function (e) {
    this.onChangeCallback && this.onChangeCallback(e);
}

Input.prototype.addEventListeners = function() {
    this.input.addEventListener('keyup', (e) => this.onChange(e));
}

Input.prototype.render = function () {
    var wrapper = document.createElement('div');
    this.input = document.createElement('input');
    this.addEventListeners();
    var label = document.createElement('label');
    label.textContent = this.props.label;
    wrapper.appendChild(this.input);
    wrapper.appendChild(label);
    return wrapper;
}