// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./routes/Home";
// import Detail from "./routes/Detail";

// export default function RecommendMovie(props) {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="movie" element={<Detail />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }
//--------------------------------------------------------------------------------------------

import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

const main = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/movie/:id",
    element: <Detail />,
  },
]);

export default main;
