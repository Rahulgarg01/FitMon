import React from "react";
import TakeInput from "./Input.js"
function LoginLeft(){
    return(
        <div class="left-row">
            <div class="head-container">
                <h2><u class="login-head">Lo</u>gin</h2>
            </div>

            <div class="form-conainer">

                <form action="/login" method="POST">
                <TakeInput type="email" placeholder="Enter Email" name="username" />
                <TakeInput type="password" name="password" placeholder="Enter Password" />
                    <div class="reset-container">
                      <a class="create-account" href="#">Create Account</a>
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
export default LoginLeft;