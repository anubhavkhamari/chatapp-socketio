const express = require('express');
const http = require('http');
const { SocketAddress } = require('net');
const { Server } = require('socket.io');

// Create an Express app and an HTTP server
const app = express();
const server = http.createServer(app);

// Initialize a Socket.io server
const io = new Server(server, {
    cors: {
        origin: "*", // Allow all origins for now
        methods: ["GET", "POST"]
    }
});

// Set up event listener for new client connections
io.on('connection', (socket) => {
    console.log('Client connected');

    // Join Room
    socket.on('joinRoom', (room) => {
        socket.join(room);
        socket.to(room).emit('message',`A new user ${socket.id} has joined the room.`);
    });

    //Message Handler
    socket.on('chatMessage', (msg, room) => {
        io.to(room).emit('message', msg);
    });


    // Handle client disconnections
    socket.on('disconnect', () => {
        console.log('Client disconnected');
        });
    })

// Start the server
server.listen(3000, () => {
    console.log('Server listening on port 3000');
});
