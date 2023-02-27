import { useEffect, useState } from "react";

function ToDo() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault(); // 새로고침 하지않고 -->
    // toDo(input value)가 없으면 return(동작하지 않게)
    if (toDo === "") {
      return;
    } // else
    // 우선 비어있는 currentArray 받아온 후
    // 새로운 toDos가
    // input을 통해 작성한 toDo와
    // 비어있는 array의 element가 더해진다
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo(""); // --> input value를 비운다
  };
  useEffect(() => {
    console.log(toDos);
  }, [toDos]);

  return (
    <div>
      <h1>My ToDo List ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          value={toDo}
          type="text"
          placeholder="Write your to do..."
          onChange={onChange}
        />
        <button>Add To Do</button>
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

export default ToDo;

// form은 submit이라는 이벤트를 갖고 있어서 제출하면 form형식이 처리되고 새로고침된다
