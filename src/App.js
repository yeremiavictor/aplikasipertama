// import Home from "./Component/fungsional/Home";
// import Parent from "./Component/class/Parent-child/Parent";
// import BootstrapComp from "./Component/class/BootstrapComp";
import NavbarComp from "./Component/fungsional/NavbarComp";
import Homepage from "./Component/fungsional/Homepage";
import { Routes, Route } from "react-router-dom";
import AboutPage from "./Component/fungsional/AboutPage";
import DetailComp from "./Component/fungsional/DetailComp";

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      {/* <Parent /> */}
      {/* <BootstrapComp /> */}

      <NavbarComp />
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/detail/:id" element={<DetailComp/>}/>
        </Routes>


    </div>
  );
}

export default App;

