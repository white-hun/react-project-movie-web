import { useEffect, useState } from "react";

function PracticeToDo() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };
  useEffect(() => {
    console.log(toDos);
  }, [toDos]);

  return (
    <div>
      <h1>Practice To Do List</h1>
      <form onSubmit={onSubmit}>
        <input
          value={toDo}
          type="text"
          placholder="Write a TODO"
          onChange={onChange}
        />
        <button>Submit</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default PracticeToDo;
