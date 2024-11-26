import React from 'react';
import { useNavigate } from 'react-router-dom';
import DubaiImg from '../images/images/dubaiLogo.png';
import CompImg from '../images/images/compLogo.png';
//import RdashBoard from '../pages/RdashBoard';

const Login = ({ userType }) => {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    navigate( '../pages/RdashBoard');

  };

  return (
    <>
    <div class="grid mainLoginWrapper">
        <div class="loginLS gridCmpltCenter">
            <img class="logo" src= { DubaiImg } alt="Logo"/>
            <img class="compLogo" src= { CompImg } alt=" Company Logo"/>
        </div>
        <div class="gridCmpltCenter loginRS"> 
            <form class="loginForm gridCmpltCenterCol" name="loginForm" action="">
                <h1 class="loginTitle">{userType} Log In</h1>
                <div class="gridCmpltCenterCol">
                    <input class="ip" name="" id="" placeholder="User Name" />
                    <input class="ip" name="" id="" placeholder="Use Code" />
                    <input class="ip" type = "password"  name="" id="" placeholder="Password" />
                    <div class="gridEnd fgtPas">
                        <a href="forgetpassword.html">Forgot Password?</a>
                    </div>
                    <div class="loginBtnWrapper">
                        <input class="primaryBtns loginBtn" type="submit" name="" value="Login" id="" onChange={handleLogin} />
                    </div>
                </div>
            </form>
        </div>
    </div>
    </>
  );
};

export default Login;
