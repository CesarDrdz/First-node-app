// const mission = process.argv[2];

// if (mission === 'learn') {
//     console.log('Time to writre some Node Code!!');
// } else {
//     console.log(`Is ${mission} really more fun?`);
// }

// // used the process.argv to run a small app 

// EventEmitter 
const EventEmitter = require('events'); const driver = new EventEmitter();

// subscribe to the driver for Observer 1 
driver.on('race', (result) => {
    if (result === 'win') {
        console.log('Congradulations! You won!');
    }
});

// subscribe to the driver for Observer 2 
driver.on('race', (result) => {
    if (result === 'win') {
        console.log('Boo I could of done better!');
    }
});

// 

process.on('exit', (code) => {
    console.log('Process exit event with code: ', code);
});

driver.emit('race', 'win');
driver.emit('race', 'lost');


