import React, { useState } from 'react';
import "./LoginPage.css";
import { login } from './utilities/api';

import { useHistory } from "react-router-dom";

function LoginPage({ onLogin }) {
    
    const [error, setError] = useState(null);
    const history = useHistory();

    return(
        <div class="limiter">
            <div class="container-login100">
                <div class="wrap-login100 p-b-160 p-t-50">
                    <form class="login100-form validate-form">
                        <span class="login100-form-title p-b-43">Pharmacy Management Login</span>

                        <div class="wrap-input100 rs1 validate-input" data-validate="Username is required">
                            <input class="input100" type="text" id="username" name="username" />
                            <span class="label-input100">Username</span>
                        </div>

                        <div class="wrap-input100 rs2 validate-input" data-validate="Password is required">
                            <input class="input100" type="password" id="password" name="pass" />
                            <span class="label-input100">Password</span>
                        </div>

                        {error && <span class="label-input100">Unable to find a  user matiching the username and password!!</span>}

                        <div class="container-login100-form-btn">
                            <button type="button" class="login100-form-btn" 
                                onClick={() => {
                                    login(document.getElementById("username").value, document.getElementById("password").value)
                                        .then((response) => {
                                            console.log("Fetched Json data url", response);
                                            localStorage.setItem('loginData', JSON.stringify(response));
                                            console.log("loginData", response.role.roleName);
                                            response.role.roleName==="Stock Manager"?history.push('/stockmain')
                                            :response.role.roleName==="Admin"?history.push('/adminmain')
                                            :history.push('/pharmacistmain')
                                        }).catch(error => setError(error));
                                }}>
                                Sign in    
                            </button>            
                        </div>
*
                        <div class="text-center w-full p-t-23">
                            <a href="#" class="txt1">Forgot password? Contact admin</a>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
}

export default LoginPage;