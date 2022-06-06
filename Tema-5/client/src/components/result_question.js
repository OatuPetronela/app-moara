import {useEffect, useState} from "react";
import Colors from "./colors";
const ResultQuestion = ({socket, responseQuestion}) => {

    const [answers,
        setAnswers] = useState({});

    useEffect(() => {
        setAnswers(responseQuestion);
        socket.on("ReceiveAnswer", (answers) => {
            setAnswers(answers);
        })
    }, []);

    let totalAnswers = 0;
    for (let key in answers) {
        totalAnswers += answers[key];
    }

    let answersArray = [];
    if (answers) {
        answersArray = Object.keys(answers);
    }

    const percentage = (num) => {
        return `${((num / totalAnswers) * 100).toFixed(2)}%`;
    };
  
    
    if (Object.keys(answers).length === 0) {
        return <div>heii</div>;
    }

    return (
        <div>
            <h4 className='text-center'>Total answers: {totalAnswers}</h4>
            <div className='row mx-2'>
                {answersArray.map((answer,index) => {
                    return (
                        <div
                            className="results-graphic-box"
                            key={answer}
                            style={{
                            background: `${Colors[index]}`,
                            width: `${percentage(answers[answer])}`
                        }}>
                            <p>{percentage(answers[answer])}{answer}
                            </p>
                        </div>
                    );
                })}
            </div>
            <ul className="list-item">
                {answersArray.map((answer, index) => {
                    return (
                        <li>
                            <span
                            className="item"
                                style={{
                                background: `${Colors[index]}`
                            }}/>
                            <p
                                className='ms-2 mt-3'
                                style={{
                                color: `${Colors[index]}`
                            }}>
                              {answer}
                            </p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
export default ResultQuestion;
