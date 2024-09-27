//console.log(io)
//io() connects to the socket io server at the url
//we have io because we imported the io javascript file in the html
const socket = io('http://localhost:4000')

//just like our server our socket has an emit and on method
//as socket.io uses bilateral communication
//so the client or the server can send data at anytime

//the server has an emit function with the event name being welcome
//here we are saying if we are listening for this event and if we do 
//we will do x, here we are accessing the [1,2,3] array that was sent by the server
socket.on('welcome', data=>{
    console.log(data)
    socket.emit("ThankYou", [4,5,6])
})