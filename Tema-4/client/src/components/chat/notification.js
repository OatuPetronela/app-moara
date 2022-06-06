import { useEffect, useState } from "react";

const Notification =({socket}) =>{

    const [messageNotification,setMessageNotification] = useState('');

    useEffect (() => {
    socket.on('notification', (notification)=>{
        setMessageNotification(notification);
        setTimeout(() => {
            setMessageNotification();
        }, 5000);
    });
    }, []);
    
    if(!messageNotification) return null;

return(
    <div className="notification">
    <p>{messageNotification}</p>
    </div>
)
}
export default Notification;