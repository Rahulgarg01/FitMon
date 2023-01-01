import React from "react";
import TakeInput from "./Input.js";
import {Link} from "react-router-dom";
function SignUpRight(){
    return(
        <div class="left-row">
            <div class="head-container">
                <h2><u class="login-head">Create Ac</u>count</h2>
            </div>

            <div class="form-conainer">

                <form action="/login" method="POST">
                <TakeInput type="text" placeholder="Name" name="name" />
                <TakeInput type="email" placeholder="Email" name="username" />
                <TakeInput type="password" placeholder="Password" name="password" />
                <TakeInput type="password" placeholder="Confirm Password" name="password" />
                    <div class="reset-container">
                      <Link class="create-account" to="/login">Login</Link>
                      <a class="forgot-password" href="#">Forgot Password?</a>
                    </div>
                
                <div class="btn-container">
                    <button type="submit">Login</button>
                </div>

                
                </form>
                </div>
                
        </div>
    )
}
export default SignUpRight;