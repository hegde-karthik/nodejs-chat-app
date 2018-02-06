const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const {generateMessage} = require('../server/utils/message');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
const app = express();
let server = http.createServer(app);
app.use(express.static(publicPath));



let io = socketIO(server);
io.on('connection', (socket) => {
  console.log('new user connected');

  socket.emit('newMsg',generateMessage('Admin','Welcome to the chat app'));

  socket.broadcast.emit('newMsg',{
    from:'Admin',
    text:'New User joined',
  });

  socket.on('createMsg',(obj,callback)=>{
    io.emit('newMsg',generateMessage(obj.from,obj.text));
    callback('message recieved on server');
  })

  socket.on('disconnect', () => {
    console.log('user disconnected');
  })
});

server.listen(port, () => {
  console.log(`Started on port ${port}`);
})
