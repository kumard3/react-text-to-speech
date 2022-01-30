import { Route, Routes } from "react-router-dom";
import NavComponent from "./components/NavComponent";
import Speech from "./pages/Speech";
import WebApi from "./pages/WebApi";


function App() {
  return (
    <div className="">
      <NavComponent />
      <>
        <Routes>
          <Route path="/" element={<WebApi />} />
          <Route path="/withpackage" element={<Speech />} />
          <Route path="/withoutpackage" element={<WebApi />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
