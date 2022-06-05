import './Header.css'
import { useState } from 'react';
import logo from'../images/logo.svg';
import hamburguer from '../images/menu-icon-mobile-20.jpg'
function Header(){
    const [statusMenu,setStatusMenu]=useState(false)
    return(
    <>
    <header>
      <nav>
        <img src={logo} alt="Logo-svg"/>
        <ul>
          <li><a href="#">Features</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Resources</a></li>
        </ul>
        <img src={hamburguer} alt='hamburguer' id="hamburguer" onClick={()=>{
            setStatusMenu(!statusMenu)
        }}/>
      </nav>
      <aside className="loginSign">
        <ul>
          <li><a href="#" id="login">Login</a></li>
          <li><a href="#" id="signUp">Sign Up</a></li>
        </ul>
      </aside>
    </header>
    {statusMenu && 
    <div className="navMobile">
        <a href="#">Features</a>
        <a href="#">Pricing</a>
        <a href="#">Resources</a>
        <hr></hr>
        <a href="#">Login</a>
        <a href="#" id="signUpMobile">Sign Up</a>
    </div>
    }
    </>
    )
}

export default Header;