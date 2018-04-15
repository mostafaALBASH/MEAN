var events = require('events');
var util = require('util');

function Person(name) {
this.name = name;
}

var mostafa = new Person('mostafa');
var waleed = new Person('waleed');
var reem = new Person('reem');

util.inherits(Person, events.EventEmitter)

var People = [mostafa, waleed, reem];

People.forEach(function(Person) {
Person.on('speak', function(msg){
console.log(Person.name + ' said ' + msg);
});
});

reem.emit('speak', '555555 a7a');
mostafa.emit('speak', 'hhaaa22222aaaaooooo')
