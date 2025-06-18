
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [length,setLength] = useState(7);
  const [numberValid,setNumberValid] = useState(false);
  const [characterValid,setCharacterValid] = useState(false);
  const [Password,setPassword] = useState("");

      const passwordGenerator = () =>{

        let passwordCode = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        if(numberValid){
          str += '0123456789'
        }
        if(characterValid){
          str += "`~!@#$%^&*_+-=/?\|;:"
        }
        
        for (let i = 0; i < length; i++) {
          let char = Math.floor(Math.random()*str.length +1);

            passwordCode += str.charAt(char)
          
        }
        setPassword(passwordCode)
      }
    
      useEffect(() =>{
        passwordGenerator();
      }, [length,numberValid,characterValid,setPassword])

        const copyPassword = () =>{
          window.navigator.clipboard.writeText(Password);
        }

  return (
    <>
      <div className='main-container'>
        <div className='main-section'> 
          <h3>Password Generator</h3>
          <div>
        <input
             type="text"
             placeholder='Password '
             value = {Password}
             readOnly
             id='input'
              />
              <button
               id='btn'
               onClick={copyPassword} 
              >Copy</button>
        </div>
          <div className='footer'>
            <div className='items'>
            <input
             type="range"
             min={8}
             max={100}
             value={length}
            id='length'
             className='length'
             onChange={(e) =>{setLength(e.target.value)}}
             />
             <label htmlFor="length">length: {length}</label>
            </div>
            <div className='items'>
            <input
                 type="checkbox"
                 defaultChecked={numberValid}
                 id="numberInput"
                 onChange={() => {
                     setNumberValid((prev) => !prev);
                 }}
             />
             <label htmlFor="numberInput">number</label>
            </div>
            <div className='items'>
            <input
                 type="checkbox"
                 defaultChecked={numberValid}
                 id="charInput"
                 onChange={() => {
                  setCharacterValid((prev) => !prev);
                 }}
             />
             <label htmlFor="charInput">character</label>
            </div>
          </div>
        </div>
        
      </div>
    
    </>
  )
}

export default App
