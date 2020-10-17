import React,{useEffect} from 'react';
import { Link } from "gatsby"
import './navbar.css';
import Logo from '../../../static/logo.svg';

const Navbar=() => {
  const [scrolled,setScrolled]=React.useState(false);

  const handleScroll=() => {
    const offset = window.scrollY;
    if(offset > 20 ){
      setScrolled(true);
    }
    else{
      setScrolled(false);
    }
  }
  useEffect(() => {
    window.addEventListener('scroll',handleScroll)
  })

  let x = ['navbar'];
  if(scrolled){
    x.push('scrolled');
  }
  return (
    <header className={x.join(" ")}>
        <div className="logo">
          <img src={Logo} alt="Logo" title="Logo" />
        </div>

        <nav className="navigation">
            <ul>
              <li><Link to="/">Temple</Link></li>
              <li><Link to="/courses">Cursos</Link></li>
              <li><Link to="/docentes">Docentes</Link></li>
            </ul>
        </nav>

    </header>
  )
};

export default Navbar;