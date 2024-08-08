import About from "@/pages/About/About";
import Home from "@/pages/Home/Home";
import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<About />} />
    </Routes>
  );
};
export default App;
