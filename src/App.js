import "./App.css";
import Home from "./PortfolioContainer/Home/Home";
import AboutMe from "./PortfolioContainer/AboutMe/AboutMe";
import Project from "./PortfolioContainer/AboutMe/project/Project"
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
     
     <Home/>
     <AboutMe/>
     
     <Routes>
      <Route path="/" element ={<Project />} />
     </Routes>
    </div>
  );
}

export default App;
