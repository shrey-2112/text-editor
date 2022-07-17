import React from 'react'

function Summaries(props) {
  return (
    <div className='summ-main'>
        <div><p className='summ-head'>Summaries:</p></div>
        <div className='summ-p'>
          <div><p>Words - {props.words}</p></div>
          <div><p>Characters - {props.characters}</p></div>
          <div><p>Minutes to read - {props.min}</p></div>
        </div>
    </div>
  )
}

export default Summaries