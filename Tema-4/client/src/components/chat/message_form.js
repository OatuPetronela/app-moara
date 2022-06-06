import {useState} from "react";

const MessageForm = ({socket}) => {

    const [message, setMessage] = useState('');
    const [name, setName] = useState('');

    const sendMassage = () => {
        socket.emit("newMessage", {name, message});
        setMessage("")
    }

    const handleMessage = (e) => {
        setMessage(e.target.value);
    }

    const handleName = (e) => {
        setName(e.target.value);
    }

    return(
    <> 
     <input value={name} onChange={handleName} placeholder='Enter your name' type="text"/>
     <input value={message} onChange={handleMessage} placeholder='Write a message' type="text"/>
     < button onClick = {sendMassage} > Send message </button>
    </>
    );
}
export default MessageForm;
