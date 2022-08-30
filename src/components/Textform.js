import React,{ useState} from 'react'


export default function Textform(props) {
   
    const handleUpclick =() =>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper case","success");
    }
    const handleLoclick =() =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower case","success");
    }
    const handleOnChange =(event) =>{
        console.log("On Change");
        setText(event.target.value);
    }
    const handleclear =() =>{
        setText("");
        props.showAlert("text has been cleared","success");
    }
    
    const handlecopy =() =>{
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("text has been copied","success");
    }
    
    const handleExtraSpaces =() => {
        let newText= text.split(/[ ] +/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces removed","success");
    }

    // const [text, setText] = useState('Enter Text Here');
    const [text, setText] = useState('');
    
    return (
<>
<div className='container' style={{color :props.mode==='dark'?'white':'#042743' }}>
      <h1 className='mb-4'>{props.heading}</h1>
<div className="mb-3">
  {/* <label for="myBox" className="form-label">Enter Your Text Below </label> */}
  <textarea className="form-control" id="myBox" value = {text} style={{backgroundColor :props.mode==='dark'?'#13466e':'white' ,color : props.mode==='dark'?'white':'#042743'}} onChange={handleOnChange} rows="8"></textarea>
</div>

<button className="btn btn-primary mx-2 my-1" disabled={text.length===0} onClick={handleUpclick}>Convert To UpperCase</button>
<button className="btn btn-primary mx-2 my-1" disabled={text.length===0} onClick={handleLoclick}>Convert To LowerCase</button>
<button className="btn btn-primary mx-2 my-1" disabled={text.length===0} onClick={handleclear}>Clear Text</button>
<button className="btn btn-primary mx-2 my-1" disabled={text.length===0} onClick={handlecopy}>Copy Text</button>
<button className="btn btn-primary mx-2 my-1" disabled={text.length===0} onClick={handleExtraSpaces}>Clear Extra Spaces</button>
    </div>
<div className="container my-3" style={{color :props.mode==='dark'?'white':'#042743' }}>
<h2>Your Text Summary</h2>
<p>Total Number of Words: {text.split(" ").filter((element)=>{return element.length!==0}).length} and Total number of characters: {text.length}</p>
<p>Avg Time To read: {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length } minutes</p>
<h2>Preview</h2>
<p>{text.length>0?text:'Nothing to Preview'}</p>


</div>


    </>

  )
}
