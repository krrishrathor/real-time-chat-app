# REAL TIME CHAT APPLICATION

*COMPANY*: CODTECH IT SOLUTIONS

*NAME*: KRRISH RATHOR

*INTERN ID*: CT04DN1325

*DOMAIN*: FRONT END WEB DEVELOPMENT

*DURATION*: 4 WEEKS 

*MENTOR*: NEELA SANTOSH

*DESCRIPTION*:
*About*

This is a real-time chat application built as part of an internship project using React.js for the frontend and Node.js with WebSockets (ws library) for the backend. The project demonstrates live two-way communication between clients without needing page refreshes — similar to modern messaging platforms like WhatsApp or Messenger.

*Features*

    Real-time bi-directional chat using WebSockets

    Supports multiple users connected simultaneously

    Users can enter their names to identify themselves

    Messages are aligned left/right depending on the sender

    Clean, responsive, and user-friendly chat UI

    Built with minimal yet modern and aesthetic design

    Message history persists during the session (until page refresh)


*Tools & Technologies Used*
> Frontend

    React.js – Used to build the UI components and manage the application state

    JavaScript (ES6+) – For scripting and logic

    CSS – For styling and responsive layout

    WebSocket API – For real-time communication in the browser

> Backend

    Node.js – Runtime environment to run server-side JavaScript

    Express.js – Lightweight web server framework for setting up the HTTP server

    ws (WebSocket library) – Enables real-time, full-duplex communication between clients and server

    CORS – To allow cross-origin communication between client and server

> Development Tools

    Visual Studio Code (VS Code) – The primary code editor used throughout development

    Node.js/NPM – For running the server and managing project dependencies

    React Scripts – For running and building the React app

    Terminal (zsh/bash) – For project setup and running development servers


*How It Works*

    1) When the user opens the React app, they are prompted to enter their name.

    2) Once connected, a WebSocket is opened to ws://localhost:5001.

    3) Any message sent by a user is sent as a JSON object containing their name and message text.

    4) The backend server receives the message and broadcasts it to all connected clients.

    5) Each client receives the message in real-time and updates the chat window.

    6) The frontend styles and aligns the message to the left or right based on the sender (current user or others).


*Use Cases & Applications*

This real-time chat application serves as a foundational structure for building more advanced communication systems. Real-world applications include:

    1) Customer support chat systems

    2) Internal team messaging tools

    3) Live classroom Q&A

    4) Gaming chat integrations

    5) Collaborative real-time platforms

The project is also an excellent demonstration of WebSocket usage and frontend-backend synchronization in real-time — a valuable skill in modern full-stack development.


*OUTPUT*:

