// import Home from "./Component/fungsional/Home";
// import Parent from "./Component/class/Parent-child/Parent";
// import BootstrapComp from "./Component/class/BootstrapComp";
import NavbarComp from "./Component/fungsional/NavbarComp";
import Homepage from "./Component/fungsional/Homepage";
import { Routes, Route, useParams } from "react-router-dom";
import AboutPage from "./Component/fungsional/AboutPage";
import DetailComp from "./Component/fungsional/DetailComp";
import ListComp from "./Component/class/ListComp";
import ListTambah from "./Component/class/ListTambah";
import EditComp from "./Component/class/EditComp";
import DetailMhsComp from "./Component/class/DetailMhsComp";

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
          <Route path="/mahasiswa" element={<ListComp/>}/>
          <Route path="/mahasiswa/tambah" element={<ListTambah/>}/>
          <Route path="/mahasiswa/edit/:id" element={<EditComp/>}/>
          <Route path="/mahasiswa/detail/:id" element={<DetailMhsComp/>}/>
        </Routes>


    </div>
  );
}



export default App;

