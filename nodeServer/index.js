// node server which will handle socket/io connection

const socket = require('socket.io');

const io = require('socket.io')(8000, { 
    cors: {
            origin: "http://127.0.0.1:5500",
            methods: ["GET", "POST"],
            allowHeaders: "my-custom-header",
            credentials: true
        }
});

const users = {};

io.on('connection', socket => {
    socket.on('new-user-joined', userName => {
        console.log("New User", userName);
        users[socket.id] = userName;
        socket.broadcast.emit('user-joined', userName);
    })

    socket.on('send', message =>{
        socket.broadcast.emit('receive', {message: message, userName: user[socket.id]});
    })
})