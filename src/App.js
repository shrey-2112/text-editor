import React, {useState} from 'react' 
import './App.css';
import Buttons from './components/Buttons';
import Summaries from './components/Summaries';


function App() {

  const handleUpClick =()=>{
    console.log("Upper case was clicked" + text)
    let newText= text.toUpperCase()
    setText(newText)
  }
  const handleLoClick =()=>{
    console.log("Upper case was clicked" + text)
    let newText= text.toLowerCase()
    setText(newText)
  }
  const handleDelete =()=>{
    console.log("Upper case was clicked" + text)
    
    setText("")
  }

  const handleOnChange =(event)=>{
    console.log("On change")
    setText(event.target.value)
  }
   const [text, setText] = useState("")
   
  return (
    <>
      <div className='grid'>
        <div className='logo'>
          <p>SS - 2022</p>
        </div>
        <div className='app-name'>
          <p>Welcome to text editor{";)"}</p>
        </div>
        <div className='buttons'>
          <Buttons uppercase={handleUpClick} 
            lowercase={handleLoClick} 
            clear={handleDelete}
            value={text}
          />
        </div>
        <div className='main'>
          <textarea  className='textarea' value={text} onChange={handleOnChange} placeholder="Enter your text here!"></textarea>
        </div>
        <div className='summaries'>
          <Summaries characters={text.length} words={text.split(" ").length} min={0.008* text.split(" ").length}/>
        </div>
        <div className='footer'>
          <p>All rights reserved by @shrey_shah</p>
        </div>
        <div className='social-media'>
          <p> </p>
        </div>
      </div>
    </>
  );
}

export default App;



