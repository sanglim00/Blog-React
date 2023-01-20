import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main/Main";
import Contents from "./pages/Contents/Contents";
import ImageUpload from "./pages/ImageUpload/ImageUpload";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/image-upload" element={<ImageUpload />} />
          <Route path="/content/:id" element={<Contents />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
