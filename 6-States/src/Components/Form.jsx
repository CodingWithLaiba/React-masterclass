import { useState } from "react";

export default function Form() {
  //   const [name, setName] = useState("");
  const [name, setName] = useState({ firstName: "", lastName: "" });
  const [email, setEmail] = useState("abc@gmail.com");
  function handleSubmit(e) {
    e.preventDefault();
    console.log(name, email);
  }
  return (
    <div>
      <h1>Form</h1>
      <p>
        {name.firstName} {name.lastName}
      </p>
      <p>{email}</p>
      <input
        type="text"
        onChange={(e) => {
          setName({ ...name, firstName: e.target.value });
        }}
        value={name.firstName}
        placeholder="Enter your first name"
      />
      <input
        type="text"
        onChange={(e) => {
          setName({ ...name, lastName: e.target.value });
        }}
        value={name.lastName}
        placeholder="Enter your last name"
      />
      <br />
      <input
        type="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        value={email}
        placeholder="Enter your email"
      />
      <br />
      <button onClick={(e) => handleSubmit(e)}>Submit</button>
    </div>
  );
}
