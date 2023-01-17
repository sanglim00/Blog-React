import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main/Main";
import Contents from "./pages/Contents/Contents";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/content/:id" element={<Contents />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
