import React from "react";

const Person = (props) => {
  return (
    <div>
      <h1>name:{props.name}</h1>
      <h1>age:{props.age}</h1>
      <h1>city:{props.city}</h1>
    </div>
  );
};

export default Person;
