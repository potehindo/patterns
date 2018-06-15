// pattern "Observer"
function Observable() {
    var observers = [];
    this.sendMessage = function(message) {
        observers.map(observer => observer.notify(message))
    };
    this.addObserver = function(observer) {
        observers.push(observer);
    };
}

function Observer(callback) {
    this.notify = function(msg) {
        callback(msg);
    }
} 
var obs = new Observer(function(message) {
    console.log('obs:' + message);
});

var observable = new Observable();
observable.addObserver( obs );

// action
var sendMessage = function (message) {
    observable.sendMessage(message);
};
