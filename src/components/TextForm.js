import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const [text, setText] = useState('')
    // const [rang,setRang] = useState({color:"black"})
    // const [BtnText, setBtnText] = useState('Cute mode')
    const UppercaseClick = () => {
        console.log("uppercase was clicked" + text)
        let newText = text.toUpperCase();
        setText(newText)
    }
    const HandleChange = (event) => {
        console.log("i am on change")
        setText(event.target.value)
    }
    const LowercaseClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }
    const ClearClick = () => {
        let newtext = '';
        setText(newtext)
    }
    const UppercaseWordClick = () => {
        let newtext = text;
        const arr = newtext.split(" ");
        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
        newtext = arr.join(" ");
        setText(newtext)
    }
    // const [mystyle, setmystyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })
    // const togglemode = () => {
    //     if (mystyle.color === 'black') {
    //         // mystyle.color='red';
    //         setmystyle({
    //             color: 'red',
    //             backgroundColor: 'pink'
    //         })
    //         setBtnText('Hard mode')
    //     }
    //     else {
    //         setmystyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setBtnText('Cute mode')

    //     }
    // }
    const copyText=()=>{
        
            // Get the text field
            let copyText = document.getElementById("myInput");
          
            // Select the text field
            copyText.select();
            copyText.setSelectionRange(0, 99999); // For mobile devices
          
             // Copy the text inside the text field
            navigator.clipboard.writeText(copyText.value);
          
            // Alert the copied text
            alert("Copied the text: " + copyText.value);
          
    }

return (
    <>
        <div>
            <div className='mb-1'style={{color:props.mode==="dark"?"white":"black"}}>
                <h1>{props.heading}</h1>
            </div>
            <div className="mb-3">
                <label htmlFor="mybox" className="form-label"style={{backgroundColor:props.mode==="dark"?"#4a4848":"white",color:props.mode==="dark"?"white":"black"}}></label>
                <textarea className="form-control" id="myInput" rows="8" value={text} onChange={HandleChange} style={{backgroundColor:props.mode==="dark"?"#4a4848":"white",color:props.mode==="dark"?"white":"black",borderColor:props.mode==="dark"?"grey":"black"}}></textarea>
            </div>
            <button className='btn btn-primary mx-2' onClick={UppercaseClick}>Convert to Uppercase</button>
            <button className='btn btn-primary mx-2' onClick={UppercaseWordClick}>Convert to Uppercase Word</button>
            <button className='btn btn-primary mx-2' onClick={LowercaseClick}>Convert to Lowercase</button>
            <button className="btn btn-primary" onClick={copyText}>Copt Text</button>
            <button className='btn btn-primary mx-2' onClick={ClearClick}>Reset</button>
        </div>
        <div className="container" style={{color:props.mode==="dark"?"white":"black"}}>
            <h1>Text Summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
        </div>
        {/* <button className='btn btn-primary' onClick={togglemode}>{BtnText}</button> */}
    </>
)
}
TextForm.propTypes = {
    heading: PropTypes.string.isRequired
}
TextForm.defaultProps = {
    heading: "Text ke liye area"
}