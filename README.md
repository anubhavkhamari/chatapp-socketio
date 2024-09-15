

<h1>🎉 Socket.IO Chat Application</h1>

<blockquote>
  A real-time chat application built with <strong>React.js</strong>, <strong>Node.js</strong>, <strong>Socket.IO</strong>, and <strong>@mui/material</strong>, providing a sleek, colorful, and responsive user interface. The app supports multiple chat rooms, real-time messaging, automatic scrolling, and mobile responsiveness using <strong>Tailwind CSS</strong>.
</blockquote>

<img src="./preview.png" alt="Socket.IO Chat Preview" />

<h2>✨ Features</h2>

<ul>
  <li><strong>🔗 Multiple Rooms</strong>: Create or join chat rooms using unique IDs generated by <code>uuidv4</code>.</li>
  <li><strong>💬 Real-time Chat</strong>: Instant messaging with other users in the same room.</li>
  <li><strong>📜 Message History</strong>: Displays messages in chronological order.</li>
  <li><strong>🎨 Vibrant UI</strong>: Styled using <strong>Material-UI</strong> with a colorful and modern design.</li>
  <li><strong>📱 Mobile Responsive</strong>: Optimized for mobile devices using <strong>Tailwind CSS</strong>.</li>
  <li><strong>⚡ Auto-scroll</strong>: Automatically scrolls to the latest message in the chat.</li>
</ul>

<hr />

<h2>🚀 Getting Started</h2>

<h3>Prerequisites</h3>
<p>Ensure you have the following installed on your machine:</p>

<ul>
  <li><strong>Node.js</strong> (v14 or higher)</li>
  <li><strong>npm</strong> or <strong>yarn</strong></li>
</ul>

<h3>Installation</h3>

<ol>
  <li><strong>Clone the repository:</strong>
    <pre>
<code>git clone https://github.com/anubhavkhamari/chatapp-socketio.git
cd chatapp-socketio</code>
    </pre>
  </li>
  <li><strong>Install dependencies:</strong>
    <pre>
<code>npm install</code>
    </pre>
    Or, if using yarn:
    <pre>
<code>yarn install</code>
    </pre>
  </li>
  <li><strong>Start the backend server:</strong>
    <pre>
<code>cd server
node server.js</code>
    </pre>
  </li>
  <li><strong>Start the frontend development server:</strong>
    <pre>
<code>cd client
npm start</code>
    </pre>
    The app will now be available at <a href="http://localhost:3000" target="_blank">http://localhost:3000</a>.
  </li>
</ol>

<hr />

<h2>🎮 Usage</h2>

<ol>
  <li><strong>Create or Join a Room:</strong>
    <ul>
      <li>Open the app and enter your username.</li>
      <li>You can either join an existing room by entering the room ID or create a new room with a randomly generated ID.</li>
    </ul>
  </li>
  <li><strong>Chat in Real-Time:</strong>
    <ul>
      <li>Once in a room, send messages to other users in the same room. The chat messages will appear in real-time.</li>
    </ul>
  </li>
  <li><strong>Message Display:</strong>
    <ul>
      <li>Your messages will appear on the right side, while messages from other users will appear on the left.</li>
    </ul>
  </li>
  <li><strong>Responsive Design:</strong>
    <ul>
      <li>The app is designed to be mobile-friendly with Tailwind CSS ensuring responsiveness on all devices.</li>
    </ul>
  </li>
</ol>

<hr />

<h2>📸 Screenshots</h2>

<table>
  <thead>
    <tr>
      <th>Feature</th>
      <th>Screenshot</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Join/Create Room</td>
      <td><img src="./screenshots/join-room.png" alt="Join Room Screenshot" /></td>
    </tr>
    <tr>
      <td>Chat Interface</td>
      <td><img src="./screenshots/chat-interface.png" alt="Chat Interface Screenshot" /></td>
    </tr>
    <tr>
      <td>Mobile View</td>
      <td><img src="./screenshots/mobile-view.png" alt="Mobile View Screenshot" /></td>
    </tr>
  </tbody>
</table>

<hr />

<h2>📂 Project Structure</h2>

<pre>
<code>.
├── client                   # React Frontend
│   ├── src
│   │   ├── components       # Reusable React Components
│   │   ├── App.js           # Main React Component
│   │   ├── index.js         # Entry point for React
│   └── public
├── server                   # Node.js Backend
│   ├── server.js            # Main backend file (Socket.IO setup)
├── README.md                # Project documentation
└── package.json             # Project dependencies and scripts
</code>
</pre>

<hr />

<h2>🛠️ Built With</h2>

<ul>
  <li><strong>React.js</strong> – Frontend UI library for building user interfaces.</li>
  <li><strong>Node.js</strong> – JavaScript runtime environment for the backend.</li>
  <li><strong>Socket.IO</strong> – Real-time bidirectional event-based communication.</li>
  <li><strong>@mui/material</strong> – Material-UI for styling the components.</li>
  <li><strong>Tailwind CSS</strong> – Utility-first CSS framework for responsive design.</li>
  <li><strong>uuidv4</strong> – Generates unique room IDs.</li>
</ul>

<hr />

<h2>🌐 Deployment</h2>

<p>To deploy the app:</p>

<ol>
  <li><strong>Build the frontend:</strong>
    <pre>
<code>cd client
npm run build</code>
    </pre>
  </li>
  <li><strong>Set up your production server</strong> (e.g., Heroku, AWS, or DigitalOcean) to serve both the frontend and backend.</li>
  <li><strong>Run the backend with the built frontend:</strong>
    <pre>
<code>cd server
node server.js</code>
    </pre>
  </li>
</ol>

<hr />

<h2>🐛 Troubleshooting</h2>

<ul>
  <li><strong>Frontend not starting</strong>: Make sure the backend is running on <code>localhost:5000</code>, and the frontend is on <code>localhost:3000</code>.</li>
  <li><strong>Socket connection issues</strong>: Check the <code>socket.io</code> version compatibility between the client and server.</li>
</ul>

<hr />

<h2>🤝 Contributing</h2>

<p>Contributions are welcome! If you have any ideas or improvements, feel free to submit a pull request.</p>

<hr />

<h2>📄 License</h2>

<p>This project is licensed under the MIT License. See the <a href="./LICENSE">LICENSE</a> file for details.</p>

<hr />

<h2>📞 Contact</h2>

<p>For any queries or support, feel free to reach out:</p>

<ul>
  <li><strong>Email</strong>: <a href="mailto:anubhavkhamari002@gmail.com">anubhavkhamari002@gmail.com</a></li>
  <li><strong>LinkedIn</strong>: <a href="https://www.linkedin.com/in/anubhavkhamari">Anubhav Khamari</a></li>
</ul>

<hr />

<p>Happy coding! 🎉</p>
