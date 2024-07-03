import React, { useState } from 'react';
import './EightBall.css'

const EightBall = () => {
    const setDefault = () => {
        // console.log('green: ' + counter.green)
        // console.log('goldrenrod: ' + counter.goldenrod)
        // console.log('red: ' + counter.red)
        setAnswer('Think of a Question');
        setColor('black');
    }

    const answers = [
        { msg: "It is certain.", color: "green" },
        { msg: "It is decidedly so.", color: "green" },
        { msg: "Without a doubt.", color: "green" },
        { msg: "Yes - definitely.", color: "green" },
        { msg: "You may rely on it.", color: "green" },
        { msg: "As I see it, yes.", color: "green" },
        { msg: "Most likely.", color: "green" },
        { msg: "Outlook good.", color: "green" },
        { msg: "Yes.", color: "green" },
        { msg: "Signs point to yes.", color: "goldenrod" },
        { msg: "Reply hazy, try again.", color: "goldenrod" },
        { msg: "Ask again later.", color: "goldenrod" },
        { msg: "Better not tell you now.", color: "goldenrod" },
        { msg: "Cannot predict now.", color: "goldenrod" },
        { msg: "Concentrate and ask again.", color: "goldenrod" },
        { msg: "Don't count on it.", color: "red" },
        { msg: "My reply is no.", color: "red" },
        { msg: "My sources say no.", color: "red" },
        { msg: "Outlook not so good.", color: "red" },
        { msg: "Very doubtful.", color: "red" }
    ]


    const genRandom = () => Math.floor(Math.random() * 19) + 1;

    const getAnswer = () => {
        if(color === 'black') {
            const num = genRandom();
            setAnswer(answers[num].msg);
            setColor(answers[num].color);
            if(answers[num].color === 'red') {
                setRedCounter(redCounter + 1)
            } else if(answers[num].color === 'goldenrod') {
                setGoldenrodCounter(goldenrodCounter + 1)
            } else if(answers[num].color === 'green') {
                setGreenCounter(greenCounter + 1)
            }
            // console.log('green: ' + counter.green)
            // console.log('goldrenrod: ' + counter.goldenrod)
            // console.log('red: ' + counter.red)
        }
    }
    
    const [answer, setAnswer] = useState('Think of a Question')
    const [color, setColor] = useState('black')
    const [redCounter, setRedCounter] = useState(0)
    const [goldenrodCounter, setGoldenrodCounter] = useState(0)
    const [greenCounter, setGreenCounter] = useState(0)

    const isBlack = color === 'black'
    return (
        <>
            <div className='EightBall' style={{backgroundColor: color}} onClick={getAnswer}>
                <h1 className='EightBall-text'>{answer}</h1>
            </div>
            {!isBlack && <button className='EightBall-button' onClick={setDefault}>Reset</button>}
            <div className='EightBall-counter'>
                <span className='EightBall-counter-green'>Green: {greenCounter}</span>
                <span className='EightBall-counter-yellow'>Yellow: {goldenrodCounter}</span>
                <span className='EightBall-counter-red'>Red: {redCounter}</span>
            </div>
        </>
    )
}

export default EightBall;
