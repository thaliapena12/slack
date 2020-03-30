// Create Server
// connect express with socket.io, wrapping app with http server, then wrap http server with socket.io
// const server = require('http').createServer(app);
const io = require('socket.io')();
// routes & websockets events listener 
io.on('connection', (client) => {
  // here you can start emitting events to the client 
  client.on('subscribeToTimer', (interval) => {
    console.log('client is subscribing to timer with interval ', interval);
    setInterval(() => {
      client.emit('timer', new Date());
    }, interval);
  });
});
const port = 5000;
io.listen(port);
console.log('listening on port ', port);
// io.on('connection', () => { /* … */ });
// server.listen(3000);