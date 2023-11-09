import About from "./components/About";
import Contact from "./components/Contact";
import MainPage from "./components/MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";

function App() {
  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path="/" element= {<MainPage/>} />
      <Route path="/about" element= {<About/>} />
      <Route path="/contact" element= {<Contact/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
