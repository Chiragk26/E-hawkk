const connectToMongo = require('./db')
connectToMongo();
const cors = require("cors");
const http=require("http");

// const cors = require("cors");
const socketIO = require("socket.io");

const express = require('express')
const app = express()
const port = 5000 || process.env.PORT


app.use(express.json())

//available routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/auth', require('./routes/authhawker'))
// app.use('/api/notes', require('./routes/notes'))

// app.use('/api/notes',require('./routes/notes'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})








// CHAT INDEX.JS




const port2=8000

const users=[{}];

app.use(cors());
app.get("/",(req,res)=>{
    res.send("HELL ITS WORKING");
})

const server=http.createServer(app);

const io=socketIO(server);

io.on("connection",(socket)=>{
    console.log("New Connection");

    socket.on('joined',({user})=>{
          users[socket.id]=user;
          console.log(`${user} has joined `);
          socket.broadcast.emit('userJoined',{user:"Admin",message:` ${users[socket.id]} has joined`});
          socket.emit('welcome',{user:"Admin",message:`Welcome to the chat,${users[socket.id]} `})
    })

    socket.on('message',({message,id})=>{
        io.emit('sendMessage',{user:users[id],message,id});
    })

    socket.on('disconnect',()=>{
          socket.broadcast.emit('leave',{user:"Admin",message:`${users[socket.id]}  has left`});
        console.log(`user left`);
    })
});

console.log("Let's go!!")

server.listen(port2,()=>{
    console.log(`Working`);
})
