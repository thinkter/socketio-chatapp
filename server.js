const express = require("express")
const app = express() //makes express app  
const socketio = require("socket.io")
app.use(express.static('public')) //express is used to serve up out client files
const expressServer = app.listen(4000)

//io is our socket io server 
const io = socketio(expressServer,{

})

//on is javascript/node event listenr
//io is the server, on means we are listening for an event
//emmit sends events out, right now we are sending it to sockets that just connected

//put your listeners in side the connect function because you have access to that perticular clients socket id

io.on('connect', socket =>{
    console.log(socket.id, "has joined our server")
    //first arg of emit is the event name
    //second arg is sending the data, in this case an arry of [1,2,3]
    socket.emit('welcome', [1,2,3])
    socket.on("ThankYou",data=>{
        console.log("message from " , socket.id , data)
    })
})


