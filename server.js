const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const cors = require('cors');

const app = express();
app.use(cors());

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
    console.log('New client connected');

    ws.on('message', (message) => {
        try {
            const msgObj = JSON.parse(message); // Parse received message
            console.log('Received:', msgObj);

            // Broadcast to all connected clients
            wss.clients.forEach((client) => {
                if (client.readyState === WebSocket.OPEN) {
                    client.send(JSON.stringify(msgObj));
                }
            });
        } catch (error) {
            console.error('Invalid message format', error);
        }
    });

    ws.on('close', () => {
        console.log('Client disconnected');
    });
});

const PORT = 5005;
server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
