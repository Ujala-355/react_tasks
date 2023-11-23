import React from "react";
import Home from "./home"
import About from "./about"
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
const Page=()=>{
    return(
        <>
            <Router>
                <Routes>
                    <Route path="/"  element={<Home/>} />
                    <Route path="/about" element={<About/>} />
                </Routes>
            </Router>
        </>
    )
}
export default Page;
