import io from "socket.io-client";
import {useEffect, useState} from 'react';
import ResultQuestion from "./components/pet/result_question";
import QuestioForm from "./components/pet/question_form";

function App() {
    const [connectedSocket,
        setConnectedSocket] = useState();
const [responseQuestion, setResponsesQuestion] = useState({});
    useEffect(() => {
        const socket = io();
        socket.on("connected", () => {
            setConnectedSocket(socket);
        });
        socket.on("sendRespons", (answers) => {
            setResponsesQuestion(answers);
        });

    }, []);

    if (!connectedSocket) {
        return <p>Waiting for conecting...</p>
    }
    return (
        <div className="container">
            <h1 className='text-center my-4'>Tema 5</h1>
            <div className='body-result'>
                <h2 className='text-center mt-2'>
                    What programming language do you like?</h2>
                <QuestioForm socket={connectedSocket}/>
                <ResultQuestion socket={connectedSocket} responseQuestion={responseQuestion}/>
            </div>
           
        </div>
    );
}

export default App;