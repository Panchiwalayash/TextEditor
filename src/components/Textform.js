import React, { useState } from 'react'

export default function Textform(props) {

    function handleUpClick() {
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleOnClick = (event) => {
        setText(event.target.value)

    }
    const handleClick = () => {
        setText(text.toLowerCase())
    }
    function handleClearClick() {
        setText('')
    }
    function CopyClick() {

        navigator.clipboard.writeText(text);
    }
    function lengthOfWord(text) {
        if (text === '') {
            return 0;
        }
        else {
            return text.length
        }
    }
    function splitWord(text) {

        if (text === '') {
            return 0;
        }
        else {
            return text.split(" ").length;
        }

    }
    const [text, setText] = useState('')
    return (
        <div>
            <h1 style={{ color: props.mode === 'light' ? 'black' : 'white' }}>{props.heading}</h1>
            <div className="container my-3" >

                <textarea className='form-control' style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'light' ? 'dark' : 'light' }} id="onBox" value={text} onChange={handleOnClick} rows="8"></textarea>
            </div>

            <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>Convert uppercase</button>
            <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handleClick}>Convert lowercase</button>
            <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handleClearClick}>clear</button>
            <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={CopyClick}>copy</button>
            <p className={`container my-2 text-${props.mode === 'light' ? 'black' : 'light'}`}>{splitWord(text)} word and {lengthOfWord(text)} letter</p>
            <div className={`container text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <h2>Preview</h2>
                <p >{text.length > 0 ? text : 'Nothing to preview'}</p>
            </div>

        </div>

    )
}