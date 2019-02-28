const event = require('events');
class MyEmitter extends event{}
// var eventEmitter = new MyEmitter();
// eventEmitter.on('event', ()=>{
//     console.log('an event occured!');
// });

const myEmitter = new MyEmitter();
myEmitter.on('event', (a, b) => {
  setImmediate(() => {
    console.log('this happens asynchronously');
  });
});
myEmitter.emit('event', 'a', 'b');

/*
    The following example shows a simple EventEmitter instance with a single listener. 
    The eventEmitter.on() method is used to register listeners, while the 
    eventEmitter.emit() method is used to trigger the event.
*/
myEmitter.on('event', () =>{
    console.log('an event occured!');
});
myEmitter.emit('event');