import "./App.css";
import Message from "./Message";
import User from "./User";

const App = () => {
  const age = 15;
  const isGreen = true;
  const colorMessage = () => {
    if (isGreen === false) {
      return "red";
    } else {
      return "green";
    }
  };
  const users = [
    { name: "ragesh", age: 28 },
    { name: "ramesh", age: 28 },
  ];

  return (
    <div className="App">
      <Message />
      <div>{age >= 18 ? <h1>over age</h1> : <h1>under age</h1>}</div>
      <h1 style={{ color: isGreen ? "green" : "red" }}>
        color is {colorMessage()}
      </h1>
      {users.map((user) => {
        return <User name={user.name} age={user.age} />;
      })}
    </div>
  );
};

export default App;
