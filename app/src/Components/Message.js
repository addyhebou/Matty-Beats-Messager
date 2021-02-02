import React, { useState } from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard';

const compliments = [
        'you definitely have some mad crazy bars',
        'you really went in',
        'Im actually kinda jealous',
        'you really made my day',
        'you were amazing',
        'you are too talented man',
        'I was blown away'
];

const greetings = [
    'ayooooo',
    'whats goody',
    'hey',
    'ayyyyyyy',
    'whats up'
]


export default function Message(props) {

    const name = props.name;
    const compliment = compliments[Math.floor(Math.random() * (compliments.length))];
    const greeting = greetings[Math.floor(Math.random() * (greetings.length))];
    const [copied, setCopied] = useState(false);
    

    let dm1 = `${greeting} ${name}! my name is Cameron and I am Matty Beats manager and day 1`;
    let dm2 = `We saw your duet using one of his beats on tik tok, that was fire – ${compliment}!
    Matty and I both really dig your sound  🙌🏼💯🔥`;

    

    

    return (
        <div>
            <CopyToClipboard text={dm1} onCopy={() => setCopied(true)}>
                <p>{dm1}</p>
            </CopyToClipboard>
            <br/>
            <CopyToClipboard text={dm2} onCopy={() => setCopied(true)}>
                <p>{dm2}</p>
            </CopyToClipboard>

            {copied ? <span style={{color: 'red'}}>Copied.</span> : null}
        </div>
    )
}