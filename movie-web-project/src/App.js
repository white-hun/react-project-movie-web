import React, { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  // [] = dependency
  useEffect(() => {
    console.log("I run only once.");
  }, []);
  useEffect(() => {
    console.log("I run when 'keyword' changes.");
  }, [keyword]);
  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);
  useEffect(() => {
    console.log("I run when Keyword & counter changes");
  }, [counter, keyword]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;

//--------------------------------------------------------------

// import React, { useState, useEffect } from "react";

// function App() {
//   const [counter, setValue] = useState(0);
//   const [keyword, setKeyword] = useState("");
//   const [test, setTest] = useState(false);
//   const onClick = () => setValue((prev) => prev + 1);
//   const onChange = (event) => setKeyword(event.target.value);
//   const onBlur = () => setTest((current) => !current);

//   useEffect(() => {
//     console.log("I run only once.");
//   }, []);
//   useEffect(() => {
//     if (test === test) {
//       console.log("SEARCH FOR", keyword);
//     }
//   }, [test]);
//   useEffect(() => {
//     console.log("I run when 'counter' changes.");
//   }, [counter]);
//   return (
//     <div>
//       <input
//         value={keyword}
//         onChange={onChange}
//         onBlur={onBlur}
//         type="text"
//         placeholder="Search here..."
//       />
//       <h1>{counter}</h1>
//       <button onClick={onClick}>Click me</button>
//     </div>
//   );
// }

// export default App;

//--------------------------------------------------------------

// import React, { useState, useEffect } from "react";

// function App() {
//   const [keyword, setKeyword] = useState("");
//   const [test, setTest] = useState(false);
//   const onClick = () => setKeyword("");
//   const onChange = (event) => setKeyword(event.target.value);
//   const status = () => setTest((current) => !current);

//   useEffect(() => {
//     console.log("I run only once.");
//   }, []);
//   useEffect(() => {
//     if (test === test && keyword !== "") {
//       console.log("SEARCH FOR", keyword);
//     }
//   }, [test]);
//   useEffect(() => {
//     if (keyword === "") {
//       console.log("Please write you want info");
//     }
//   }, []);
//   return (
//     <div>
//       <input
//         value={keyword}
//         onBlur={status}
//         onChange={onChange}
//         type="text"
//         placeholder="Search here..."
//       />
//       <button onClick={onClick}>Search</button>
//     </div>
//   );
// }

// export default App;
