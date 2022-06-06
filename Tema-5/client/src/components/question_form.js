import {useState} from "react";

const QuestioForm = ({socket}) => {
const [answer,setAnswer] = useState('');
const [sentAnswer, setSentAnswer] = useState(false);

    const handleSubmit = ()=> {
        if(answer.length > 1) {
        socket.emit("SentAnswer", answer);
        setAnswer('');
        setSentAnswer(true);
        }else{
            alert('You must write something')
        }
    }

    const handleChange = (e) => {
        setAnswer(e.target.value);
    }

    if(sentAnswer === true){
        return <h3 className='text-center mt-5'>Thank you for your answer! 🤗</h3>
    }else{
    return (
        <div className='form'>
            <input
                type="text"
                value={answer}
                onChange={handleChange}
                className="input"
                placeholder="Enter your answer"
                required/>
            <button className="btn-success" onClick={handleSubmit}>Send answer</button>
        </div>
    )
    }
}
export default QuestioForm;