import React, { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import './Stylesheet.css'
function Buttons(props) {
    const [copied, setCopied] = useState(false)
  return (
    <div className='btn-main'>
        <div><p className='btn-head'>Convert to:</p></div>
        <div>
            <button className='btn' onClick={props.uppercase}>Upper case</button>
        </div>
        <div>
            <button className='btn' onClick={props.lowercase}>Lower case</button>
        </div>
        <div>
            <CopyToClipboard text={props.value} onCopy={()=> setCopied(true)}>
                <button className='btn'>Copy text</button>
            </CopyToClipboard>
            {copied ? <spam></spam>: null}
        </div>
        <div>
            <button className='btn' onClick={props.clear}>Clear all</button>
        </div>
    </div>

  )
}

export default Buttons