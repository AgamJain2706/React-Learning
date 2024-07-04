import React, { useCallback, useEffect, useRef, useState  } from 'react'

function App() {
  const [Length, setLength] = useState(8)
  const [NumberAllowed, setNumberAllowed] = useState(false)
  const [CharacterAllowed, setCharacterAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //ref hook 
  const passwordRef = useRef(null)

  const PasswordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (NumberAllowed) {
      str += "0123456789"
    }
    if (CharacterAllowed) {
      str += "!@#$%^&*()~"
    }
    setPassword(pass);
    for (let i = 1; i <= Length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [Length, NumberAllowed, CharacterAllowed, setPassword])

const copyPasswordToClipboard = useCallback(() => {
  passwordRef.current?.select()
  passwordRef.current?.setSelectionRange(0,40);
  window.navigator.clipboard.writeText(password)
},[password])

  useEffect(() => {
    PasswordGenerator()
  }, [Length, NumberAllowed, CharacterAllowed, PasswordGenerator])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-center text-white my-3 '>Password Generator </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-2 ">
          <input type="text"
            value={password}
            className="outline-none w-full py-1 px-1"
            placeholder='password'
            readOnly
            ref={passwordRef}
          />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copyPasswordToClipboard}>Copy </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className='flex items-center gap-x-1 '>
            <input type="range"
              min={8}
              max={40}
              value={Length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label> label:{Length}</label>
          </div>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className='flex items-center gap-x-1 '>
            <input type="checkbox"
              defaultChecked={NumberAllowed}
              id="NumberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev)
              }}
            />
            <label htmlFor='NumberAllowedberInput'> NumberAllowedbers</label>
          </div>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className='flex items-center gap-x-1 '>
            <input type="checkbox"
              defaultChecked={CharacterAllowed}
              id="CharacterAllowedInput"
              onChange={() => {
                setCharacterAllowed((prev) => !prev)
              }}
            />
            <label htmlFor='CharacterAllowedInput'> CharacterAllowed </label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
