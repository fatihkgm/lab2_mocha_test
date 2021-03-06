var express = require('express');

var app = express();

const PORT = 8088



//Start express Server

const server = app.listen(PORT, () => {

    console.log(`News app running on port: ${PORT}`);

});

var io = require('socket.io')(server);

io.on(`connection`,(socket)=>{

    console.log(`New Connection Received: ${socket.id}`);

    //send values to client 
    socket.emit("welcome" , "Welcome to the news page");
    const news = [

        { title: 'The cure of the Sadness is to play Videogames',date:'04.10.2016'},
    
        { title: 'Batman saves Racoon City, the Joker is infected once again',date:'05.10.2016'},
    
        { title: "Deadpool doesn't want to do a third part of the franchise",date:'05.10.2016'},
    
        { title: 'Quicksilver demand Warner Bros. due to plagiarism with Speedy Gonzales',date:'04.10.2016'},
    
    ];
    socket.emit("send-news",news);

})



app.get('/', (req,res)=>{

    console.log(`---- Home Page ----`)

    res.sendFile(__dirname +`/index.html`)

})

