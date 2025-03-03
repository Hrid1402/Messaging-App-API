import { io } from 'socket.io-client';
export const socket = io(import.meta.env.VITE_SERVER_URL, {
    autoConnect: false,
    reconnection: true,
    reconnectionAttempts: Infinity, 
    reconnectionDelay: 1000
});

export const connectSocket = (token) => {
    socket.auth = { token };
    socket.connect();
};