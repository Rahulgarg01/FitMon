import React from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import {Route,Routes} from "react-router-dom";
function App(){
    return(<div>
    <Routes><Route path="/login" element={<Login/>} />
    <Route path="/signup" element={<SignUp />} /></Routes>
        </div>
        )
}
export default App;