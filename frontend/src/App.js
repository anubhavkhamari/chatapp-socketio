import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import { Container, Typography, TextField, Button, Paper, Box, List, ListItem, ListItemText } from '@mui/material';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { v4 as uuidv4 } from 'uuid';

const socket = io('http://localhost:3000');

// Create a theme instance
const theme = createTheme({
  palette: {
    primary: {
      main: '#2196f3', // Bright blue color
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#f50057', // Bright pink color
      contrastText: '#ffffff',
    },
    background: {
      paper: '#ffffff', // White background for Paper
      default: '#e3f2fd', // Light blue background for the app
    },
  },
});

const MessageList = styled(List)(({ theme }) => ({
  maxHeight: '300px',
  overflowY: 'auto',
  padding: '10px',
  backgroundColor: theme.palette.background.paper,
  borderRadius: '15px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
}));

const MessageItem = styled(ListItem)(({ theme, isUserMessage }) => ({
  backgroundColor: isUserMessage ? theme.palette.primary.main : theme.palette.secondary.main,
  color: theme.palette.getContrastText(isUserMessage ? theme.palette.primary.main : theme.palette.secondary.main),
  borderRadius: '20px',
  margin: '5px 0',
  padding: '10px 20px',
  maxWidth: '60%',
  alignSelf: isUserMessage ? 'flex-end' : 'flex-start',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: '20px',
  background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  color: theme.palette.primary.contrastText,
  '&:hover': {
    background: `linear-gradient(45deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`,
  },
}));

function App() {
  const [username, setUsername] = useState('');
  const [room, setRoom] = useState('');
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [inputRoom, setInputRoom] = useState('');
  const [isJoined, setIsJoined] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const handleMessage = (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    };

    socket.on('message', handleMessage);

    return () => {
      socket.off('message', handleMessage);
    };
  }, []);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const joinRoom = () => {
    if (username && inputRoom) {
      setRoom(inputRoom);
      socket.emit('joinRoom', inputRoom);
      setIsJoined(true);
      setInputRoom('');
    }
  };

  const createRoom = () => {
    if (username) {
      const newRoomID = uuidv4();
      setRoom(newRoomID);
      socket.emit('joinRoom', newRoomID);
      setIsJoined(true);
    }
  };

  const sendMessage = (e) => {
    e.preventDefault();
    if (inputMessage && room) {
      socket.emit('chatMessage', `${username}: ${inputMessage}`, room);
      setInputMessage('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      sendMessage(e);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" className="flex items-center justify-center min-h-screen bg-background-default p-4">
        <Paper elevation={3} className="p-6 bg-white rounded-lg shadow-lg w-full md:w-96">
          {!isJoined ? (
            <Box display="flex" flexDirection="column" alignItems="center">
              <Typography variant="h4" gutterBottom color="primary">Join or Create Room</Typography>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                label="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                color="primary"
              />
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                label="Room Number"
                value={inputRoom}
                onChange={(e) => setInputRoom(e.target.value)}
                color="primary"
              />
              <Box display="flex" flexDirection="column" alignItems="stretch" width="100%">
                <StyledButton
                  variant="contained"
                  fullWidth
                  onClick={joinRoom}
                >
                  Join Room
                </StyledButton>
                <StyledButton
                  variant="contained"
                  fullWidth
                  onClick={createRoom}
                  className="mt-2"
                >
                  Create Room
                </StyledButton>
              </Box>
            </Box>
          ) : (
            <Box display="flex" flexDirection="column" alignItems="stretch" height="80vh">
              <Typography variant="h5" gutterBottom color="primary">Room: {room}</Typography>
              <MessageList>
                {messages.map((msg, index) => (
                  <MessageItem key={index} isUserMessage={msg.startsWith(username)}>
                    <ListItemText primary={msg} />
                  </MessageItem>
                ))}
                <div ref={messagesEndRef} />
              </MessageList>
              <Box component="form" display="flex" flexDirection="column" alignItems="stretch" mt={2} onSubmit={sendMessage}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  label="Message"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyDown={handleKeyDown}
                  color="primary"
                />
                <StyledButton
                  variant="contained"
                  fullWidth
                  onClick={sendMessage}
                  className="mt-2"
                >
                  Send
                </StyledButton>
              </Box>
            </Box>
          )}
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default App;
