import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  const [birthDate, setBirthDate] = useState(0);
  const [number, setNumber] = useState(0);
  const [status, setStatus] = useState("");

  function sumAllDigits(birthDate) {
    var birthDigits = String(birthDate).replaceAll("-", "");
    var sumOfDigits = 0;

    for (let value of birthDigits) {
      sumOfDigits = sumOfDigits + parseInt(value);
    }
    return sumOfDigits;
  }
  const clickHandler = (birthDate, number) => {
    if (sumAllDigits(birthDate) % Number(number) === 0) {
      setStatus("Your Birthday is Lucky");
    } else {
      setStatus("Your Birthday is not Lucky , So Sad");
    }
  };
  return (
    <div className='container'>
      <header>
        <h1> 🎂 IS YOUR BIRTHDAY IS LUCKY 🤔 🎁</h1>
      </header>
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}>
        <h2 style={{ textAlign: "center", margin: "1rem" }}>Date of Birth</h2>
        <input
          id='date-of-birth'
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          type='date'
        />
        <h2 style={{ textAlign: "center", margin: "1rem" }}>
          Enter Your Lucky Number
        </h2>
        <input
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          type='number'
        />

        {
          <button
            className='btn'
            disabled={number <= 0}
            onClick={() => clickHandler(birthDate, number)}>
            Check Number
          </button>
        }

        <h2>{status}</h2>
      </main>
      <h3 style={{ textAlign: "center", margin: "1rem" }}>
        {" "}
        Privacy Notice : We do not store your data. So, no need to worry about
        your data misuse! 🙂{" "}
      </h3>
      <Footer />
    </div>
  );
}

export default App;
