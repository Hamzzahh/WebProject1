import React from "react";
import { useState } from "react";

export default function TextForm(props) {
    
    const handleUpClick = () => {
        console.log("button has been clicked");
        let newText = text.toUpperCase();
        setText(newText);
    };

    const handleDownClick = () => {
        console.log("button has been clicked");
        let newText = text.toLowerCase();
        setText(newText);
    };

    const handleOnChange = (event) => {
        console.log("on change");
        setText(event.target.value);
    };

    const handleClearClick = () => {
        setText("");
    };

    const [text, setText] = useState("");
    //to change the state of variable text, we'll use settext function

    return (
        <>
        <div>
                <div className="container mb-3">
                    <label htmlFor="myBox" className="form-label">
                        {props.text}
                    </label>
                    <textarea
                        className="form-control"
                        id="myBox"
                        value={text}
                        onChange={handleOnChange}
                        rows="8"
                    ></textarea>
                    <button
                        type="button"
                        className="btn btn-danger mx-2 my-4"
                        onClick={handleUpClick}
                    >
                        Upper case
                    </button>
                    <button
                        type="button"
                        className="btn btn-warning mx-2"
                        onClick={handleDownClick}
                    >
                        Lower case
                    </button>
                    <button
                        type="button"
                        className="btn btn-warning"
                        onClick={handleClearClick}
                    >
                        CLear Text
                    </button>
                </div>
                <div className="container mb-3">
                    <h2>Your Text summary</h2>
                    <p> {text.split(" ").length} words and {text.length} charachters</p>
                    <p>{0.008 * text.split(" ").length} time to read</p>
                    <h2>Preview</h2>
                    <p>{text}</p>
                </div>
        </div>
        </>
    );
}
