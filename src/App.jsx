import { useState } from 'react'


function App() {
return (
    <>
       
    <div class="grid mainLoginWrapper">
        <div class="loginLS gridCmpltCenter">
            <img class="logo" src="images/dubaiLogo.png" alt="Logo"/>
            <img class="compLogo" src="images/compLogo.png" alt=" Company Logo"/>
        </div>
        <div class="gridCmpltCenter loginRS"> 
            <form class="loginForm gridCmpltCenterCol" name="loginForm" action="">
                <h1 class="loginTitle">Agent Log In</h1>
                <div class="gridCmpltCenterCol">
                    <input class="ip" name="" id="" placeholder="Agency Name" />
                    <input class="ip" name="" id="" placeholder="Use Code" />
                    <input class="ip" name="" id="" placeholder="Password" />
                    <div class="gridEnd fgtPas">
                        <a href="forgetpassword.html">Forgot Password?</a>
                    </div>
                    <div class="loginBtnWrapper">
                        <input class="primaryBtns loginBtn" type="submit" name="" value="Login" name="" id="" />
                    </div>
                </div>
            </form>
        </div>
    </div>
    </>
  )
}

export default App
