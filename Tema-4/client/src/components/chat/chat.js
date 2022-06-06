import ChatBox from "./chat_box";
import MessageForm from "./message_form";
import Notification from "./notification";

const Chat= ({socket}) => {
return (
    <>
    <h1>Tema 4</h1>
    <Notification socket={socket}/>
    <ChatBox socket={socket}/>
    <MessageForm socket={socket}/>
    </>
)
} 
export default Chat;