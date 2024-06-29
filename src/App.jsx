import Header from "./components/header/Header";
import Register from "./components/user/register/Register";
import Images from "./components/main/Images";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/user/login/Login";

function App() {
  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Login/>}/> 
        <Route path ="/images" element={<Images/>}/>
        <Route path="/register" element={<Register/>}/> 
      </Routes>
    </Router>
    </>
  );
}

export default App;
