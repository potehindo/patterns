// pattern "Decorator"
function Input(props) { 
    this.props = props;
}

Input.prototype.render = function() {
    var wrapper = document.createElement('div');
    var input = document.createElement('input');
    var label = document.createElement('label');
    label.textContent = this.props.label;
    wrapper.appendChild(input);
    wrapper.appendChild(label);
    return wrapper;
}

// cross symbol for delete information
function DeleteSymbol() {}

function Validation() {}



var App = (function(element) {
    var data = {
        label: 'Username'
    };
    var input = new Input(data).render();
    var inputWithDelete = new Input(data).render();
    var inputWithValidation = new Input(data).render();
    var inputWithDeleteAndValidation = new Input(data).render();

    element.appendChild(input);
    element.appendChild(inputWithDelete);
    element.appendChild(inputWithValidation);
    element.appendChild(inputWithDeleteAndValidation);
 
}(document.getElementById('root')));