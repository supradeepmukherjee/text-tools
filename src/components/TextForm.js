import React, { useState } from 'react'

const TextForm = (props) => {
    const handleUp = () => {
        setText(text.toUpperCase())
    }
    const handleLow = () => {
        setText(text.toLowerCase())
    }
    const handleOnChange = (e) => {
        setText(e.target.value)
    }
    const [text, setText] = useState('')
    return (
        <>
            <div>
                <h1>
                    {props.heading}
                </h1>
                <textarea value={text} placeholder='Enter Text here' onChange={handleOnChange} className="mb-3 form-control" id="exampleFormControlTextarea1" rows="6"></textarea>
                <button disabled={text.length===0} onClick={handleUp} className="btn btn-primary">
                    Convert to UpperCase
                </button>
                <button disabled={text.length===0} onClick={handleLow} className="btn btn-primary">
                    Convert to LowerCase
                </button>
            </div>
            <div className="my-2">
                <h1>
                    Your Text Summary:
                </h1>
                <p>
                    {text.split(/\s+/).filter((elem)=>{return elem.length!==0}).length} words, {text.length} characters
                </p>
                <p>
                    {.008 * text.split(/\s+/).length} minutes(s) read
                </p>
                <h2>
                    Preview
                </h2>
                <p>
                    {text}
                </p>
            </div>
        </>
    )
}

export default TextForm