import "./App.css";
import Person from "./Person";
const App = () => {
  //const name = "john";
  //const isNameShowing = false;
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
        </>
      )} */}

      <Person name={"john"} age={25} city="chennai" />
      <Person name={"rachel"} age={30} city="madurai" />
    </div>
  );
};

export default App;
