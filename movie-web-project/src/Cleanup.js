// CleanUp function
import { useState, useEffect } from "react";

function Hello() {
  //-----------------------------------
  useEffect(() => {
    console.log("hi :)");
    return () => console.log("bye :(");
  }, []);
  //-----------------------------------
  // useEffect(function () {
  //   console.log("hi :)");
  //   return function () {
  //     console.log("bye :( ");
  //   };
  // }, []);
  //-----------------------------------
}
function CleanUp() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  // jS 쓸 때 중괄호 잊지말기
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default CleanUp;
