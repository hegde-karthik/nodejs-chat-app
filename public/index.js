let socket = io();
socket.on('connect',()=>{
  console.log('Connected to server');
});

socket.on('disconnect',()=>{
  console.log('disconnected from server');
});

socket.on('newEmail',(obj)=>{
  console.log(obj);
});

socket.on('newMsg',(obj)=>{
  console.log(obj);
  let li = $('<li></li>');
  li.text(`${obj.from}: ${obj.text}`);
  $('#messages').append(li);
})

/*  *********************************************** */
$('#chat-form').on('submit',(e)=>{
  e.preventDefault();

  socket.emit('createMsg',{
    from:'User',
    text:$('[name=message]').val()
  },function(){

  });
});
