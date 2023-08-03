import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
    // document.title = "Textutils - uppercase";
  }

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
    // document.title = "Textutils - lowercase";
  }

  const handleClearText = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared!", "success");
    // document.title = "Textutils - cleared";
  }

  const handleCopy = () => {
    // var text = document.getElementById("myBox");
    // text.select();
    // navigator.clipboard.writeText(text.value);
    // document.getSelection().removeAllRanges();
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard!", "success");
    // document.title = "Textutils - copied";
  }

  const handleExtraSpaces= () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra spaces removed!", "success");
    // document.title = "Textutils - removed";
  }

  const handleOnChange = (event) => {      //type krne ke liye isko use krna padta hai ONCHANGE ko
    // console.log("On Change");
    setText(event.target.value); 
  }

  const [text, setText] = useState('');
  // text = "new text";  //wrong way to change the state
  // setText("new text");  //correct way to change the state
  return (
    <>
      <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1 className="mb-4">{props.heading}</h1>

        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#110202ba':'white', color:props.mode==='dark'?'white':'#110202ba'}} id="myBox" rows="8"></textarea>
        </div>

        {/*jab kuch type nhi hoga to buttons disabled honge*/}
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearText}>Clear</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      </div>

      <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your Text Summary</h2>
        {/*filter wala method isliye lagaya hai taki jab kuch type kre tabhi wo word me count ho space ko count na kre*/}
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview!"}</p>
      </div>
    </>  
  )
}
