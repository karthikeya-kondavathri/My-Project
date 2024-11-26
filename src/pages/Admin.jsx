import React from 'react';
import DubaiImg from '../images/images/dubaiLogo.png';
import CompImg from '../images/images/compLogo.png';
//import Login from '../components/Login';

const AdminLogin = () => {
  return (
    <>
    <div class="grid mainLoginWrapper">
    <div class="loginLS gridCmpltCenter">
        <img class="logo" src= { DubaiImg } alt="Logo"/>
        <img class="compLogo" src= { CompImg } alt=" Company Logo"/>
    </div>
    <div class="gridCmpltCenter loginRS"> 
        <form class="loginForm gridCmpltCenterCol" name="loginForm" action="">
            <h1 class="loginTitle">Director Log In</h1>
            <div class="gridCmpltCenterCol">
                <input class="ip" name="" id="" placeholder="User Name" />
                <input class="ip" name="" id="" placeholder="User Code" />
                <select class="ip">
                    <option>Director</option>
                    <option>Sales Manager</option>
                    <option>Agent</option>
                </select>
                <input class="ip" type ="password" name="" id="" placeholder="Password" />
                <div class="gridEnd fgtPas">
                    <a href="forgetpassword.html">Forgot Password?</a>
                </div>
                <div class="loginBtnWrapper">
                    <input class="primaryBtns loginBtn" type="submit" name="" value="Login" name="" id="" />
                </div>
            </div>
        </form>
        </div>
    </div>;
    </>
  )
};

export default AdminLogin;
