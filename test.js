var express = require('express');

var app = express();

const PORT = 8088



//Start express Server

const server = app.listen(PORT, () => {

    console.log(`News app running on port: ${PORT}`);

});

var io = require('socket.io')(server);

io.on(`connection`,(socket)=>{

    console.log(`New Connection Received: ${socket.id}`)

})



app.get('/', (req,res)=>{

    console.log(`---- Home Page ----`)

    res.sendFile(__dirname +`/index.html`)

})
