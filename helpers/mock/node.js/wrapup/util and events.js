var util = require('util');
var events = require('events');

var Person = function(name) {
this.name = name;
}

var mostafa = new Person('Mostafa');
var hadeer = new Person('Hadeer');
var jaylaan = new Person('Jaylaan');

var people = [mostafa, hadeer, jaylaan];

util.inherits(Person, events.EventEmitter);

people.forEach(function(person) {
person.on('speak', function(msg) {
console.log(person.name + " said that :- " + msg)
});
});

jaylaan.emit('speak', 'I love you Mustafa');