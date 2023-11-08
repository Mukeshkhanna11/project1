import "./App.css";
import Person from "./Person";
import { useState } from "react";
const App = () => {
  //const name = "john";
  //const isNameShowing = false;
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      {/* <h1>hello {isNameShowing ? name : "someone"}</h1>
      {name ? (
        <>
          <h1>{name}</h1>
        </>
      ) : (
        <>
          <h1>there is no name</h1>
          <h1>thank you</h1>
          <h1>thank you all</h1>
        </>
      )} */}

      {/* <Person name={"john"} age={25} city="chennai" />
      <Person name={"rachel"} age={30} city="madurai" /> */}

      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>
        -
      </button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>
        +
      </button>
    </div>
  );
};

export default App;
