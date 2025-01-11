import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

function App() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [fullName, setFullName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    setFullName(`${fname} ${lname}`);
    setIsSubmitted(true);

    if(!fname || !lname || !fname && !lname){
      setIsSubmitted(false);
    }
  };
  return (
    <div className="App container">
      <h1>Full Name Display</h1>

      <form>
        <div>
          <label for="fname">First Name: </label>
          <input
            type="text"
            id="fname"
            onChange={(event) => setFname(event.target.value)}
            required
          />
        </div>
        <br />
        <div>
          <label for="lname">Last Name: </label>
          <input
            type="text"
            id="lname"
            onChange={(event) => setLname(event.target.value)}
            required
          />
        </div>
        <br />
        <div>
          <button type="submit" onClick={handleClick}>
            Submit
          </button>
        </div>
      </form>
      <div>{isSubmitted ? `Full Name: ${fullName}` : null}</div>
    </div>
  );
}

export default App;
