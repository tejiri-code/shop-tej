import React from "react";
import Main from "./components/homepage/main"
import { Routes, Route } from "react-router-dom";



function App() {
  return (
 <Routes>
    <Route path="/" element={<Main/>}/>
  
  </Routes>
  );
}

export default App;
