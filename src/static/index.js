const socket = io('/');

socket.on('hello', () => console.log('Somebody said hello'));

socket.emit('helloGuys');

setTimeout(() => socket.emit('helloGuys'), 4000);