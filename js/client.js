// const io = require("socket.io-client")
const socket = io('http://localhost:8000', {
    withCredentials: true,
    extraHeaders: {
        "my-custom-header": "abcd"
    }
});

const form = document.getElementById('send-container');
const messageInput = document.getElementById('messageInp');
const messageContainer = document.querySelector(".container");


const userName = prompt("Enter Your Name To Join");
socket.emit('new-user-joined', userName);