let socket = io();
socket.on('connect',()=>{
  console.log('Connected to server');

  socket.emit('createMsg',{
    from:'client',
    text:'hiii',
  });

});

socket.on('disconnect',()=>{
  console.log('disconnected from server');
});

socket.on('newEmail',(obj)=>{
  console.log(obj);
});

socket.on('newMsg',(obj)=>{
  console.log(obj);
})
