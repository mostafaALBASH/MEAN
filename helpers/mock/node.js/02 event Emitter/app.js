var events = require('events');
var myeventEmitter = new events.EventEmitter();
myeventEmitter.on('click', function(mssg, andmssg) {
console.log(mssg + andmssg);
});
myeventEmitter.emit('click', 'A7a Ana msh fahem 7aga', ' 555555555 a7ooo xXXXxx');