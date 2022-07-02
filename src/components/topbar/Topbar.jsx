import React from 'react'
import "./topbar.scss"
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';

const Topbar = ({menuOpen, setMenuOpen}) => {
  return (
    <div className={"topbar "+(menuOpen && 'active')}>
      <div className="wrapper">
        <div className="left">
            <a href="#intro" className="logo">Md. Rafiqul Islam</a>
            <div className="itemContainer"> 
              <PersonIcon className="icon" />
              <span>+880 1991166550</span>
            </div>
            <div className="itemContainer"> 
              <EmailIcon className="icon" />
              <span>rafiqul.pust.cse@gmail.com</span>
            </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=> setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar