import {useEffect, useState} from 'react';
import {wsURL} from "../services/api";

const useChat = () => {
    const [messages, setMessages] = useState([]);
    const [socket, setSocket] = useState(null);
    const appendMessage = (message) => {
        setMessages((messages) => [...messages, message]);
    }

    useEffect(() => {
        const ws = new WebSocket(wsURL);

        ws.onopen = () => {
            console.log('WebSocket connected');
        };

        ws.onmessage = (event) => {
            const receivedMessage = JSON.parse(event.data);
            appendMessage(receivedMessage);
        };

        ws.onclose = () => {
            console.log('WebSocket disconnected');
        };

        setSocket(ws);

        return () => {
            ws.close();
        };
    }, []);

    const sendMessage = (message) => {
        const jsonData = {sender: "human", text: message}; // Your JSON data
        const jsonString = JSON.stringify(jsonData); // Convert JSON to string
        socket.send(jsonString);
        appendMessage(jsonData)
    }

    return [messages, sendMessage];
};

export default useChat;
