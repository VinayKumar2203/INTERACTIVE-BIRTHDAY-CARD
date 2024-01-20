import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function BirthdayCard() {
  let [recipientName,setrecipientName] = useState('')
  let [customMessage,setcustomMessage] = useState('')
  return (
    <>
    <h2>Birthday Card</h2>
    <form>
      <label>Recipient Name</label>
      <input 
      type='text'
      id='recipientName'
      value={recipientName}
      onChange={(e)=>setrecipientName(e.target.value)}
      ></input>
<br></br>
<br></br>
      <label>Custom Message</label>
      <textarea
      type='text'
      value={customMessage}
      onChange={(e)=>setcustomMessage(e.target.value)}
      >

      </textarea>
      </form>

      <div>
        <h2>Greeting:</h2>
        <p>Happy Birthday,{recipientName || 'Friend '}! {customMessage}</p>
      </div>
    </>
  )
}


function App() {

  return (
    <>
       <BirthdayCard />
    </>
  )
}

export default App
