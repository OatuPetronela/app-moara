import Message from "./message";
import {useState, useEffect} from "react";

const ChatBox= ({ socket }) => {
    const [messages,setMessages] = useState([]);
    
    const addMessage = (message) => {
        setMessages((messages) => {
            return [...messages, message];
        });
    }
    
    useEffect(() => {
    socket.on("received-message", (message) => {
            addMessage(message);
        });
    }, []);

    return (
        <div className="chatBox">
        {messages.map((message, index) => (
         <Message  key={`message{index}`} message={message}/>
        ))}
    </div>
    )
}
export default ChatBox;