import io from "socket.io-client";
import {useEffect, useState} from 'react';
import Matrix from "./components/Matrix";
import Feedback from "./components/Feedback";

function App() {
    const [connectedSocket,setConnectedSocket] = useState();
    const [matrix, setMatrix] = useState([["","",""],["","",""],["","",""]]);
    const [colorPalette, setColorPalette] = useState([["#A52A2A", '#FF0000','#43C6DB'], ["#228B22", "#FF00FF", "#CCFFFF"], ["#800080", "#E2F516", "#191970"]]);
    const [selected, setSelected] = useState(null);
    const [feedback, setFeedback] = useState('');

    useEffect(() => {
        const socket = io();
        setConnectedSocket(socket);
        socket.on("data", data => { 
            setMatrix(data.serverMatrix);
            setColorPalette(data.serverColorPalette);
        });
    }, []);

    if (!connectedSocket) {
        return <p>Waiting for conecting...</p>
    }
    const feedbackHandler = value => {
        if(!value){
            setFeedback("Please enter feedback");
        }else if(!selected){
            setFeedback("Please select a note");
        }else{
            setFeedback("Tcnk, your feedback has been sent");
            connectedSocket.emit("feedback", {value, selected});
        }
    }

    return (
        <div className="container">
            <h1 className='text-center my-4'>Tema 6</h1>
            {!feedback
             ?<Feedback selected={selected} feedbackHandler={feedbackHandler}/>
             :<h1 className="text-center" onClick={()=> setFeedback("")}>{feedback}</h1>
            }
        <Matrix matrix={matrix} colorPalette={colorPalette} setSelected={id=>setSelected(id)}/>
        </div>
    );
}

export default App;