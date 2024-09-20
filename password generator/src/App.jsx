import { useEffect, useState } from "react"
import "./App.css"

function App() {
  const [password, setPasword] = useState("abcd")
  const [length, setLength] = useState(6)
  const [num, setNum] = useState(false)
  const [sym, setSym] = useState(false)

  function generatePassword() {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYabcdefghijklmnopqrstuvwxyz"

    let pass = ""

    if (num) {
      str += "0123456789"
    }

    if (sym) {
      str += "~!@#$%^&*()_+"
    }

    for (var i = 0; i < length; i++) {
      let getPass = Math.floor(Math.random() * str.length)

      let getChar = str.charAt(getPass)
      pass += getChar
    }

    setPasword(pass)
  }

  useEffect(() => {
    generatePassword()
  }, [length, sym, num])

  return (
    <>
      <div>
         <h2>{password}    <button
onClick={() => navigator.clipboard.writeText(password)} >
            Copy Password
          </button> </h2>    

        <label htmlFor="">{length}</label>
        <input
          min={6}
          max={20}
          value={length}
          onChange={(e) => setLength(e.target.value)}
          type="range"
          name=""
          id=""
        />
      </div>
      <div>
        <label htmlFor="">Numbers</label>
        <input
          onChange={(e) => setNum(e.target.checked)}
          type="checkbox"
          name=""
          id=""
        />
      </div>

      <div>
        <label htmlFor="">Symbols</label>
        <input type="checkbox" onChange={(e) => setSym(e.target.checked)} />
     
      </div>
    </>
  );
}
export default App
