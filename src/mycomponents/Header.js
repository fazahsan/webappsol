import { useState } from "react"
import "./Navbar.css"

export default function Header() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  const [isNavExpande, setIsNavExpande] = useState("try2")

  return (
    <nav className="navigation">
      <h3 className="brand-name">
        Webappsolution
      </h3>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded)
          setIsNavExpande("try2")
         
        }}
        
      >
      <svg viewBox="0 0 100 80" width="20" height="20">
  <rect width="100" height="20"></rect>
  <rect y="30" width="100" height="20"></rect>
  <rect y="60" width="100" height="20"></rect>
  
  
</svg>
        {/* hamburger svg code... */}
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul style={{fontSize:22}}>
          <li>
            <a href="/">Principal</a>
          </li >
          <li>
            <a href="/service">Servicios</a>
          </li>
          <li>
            <a href="/contact">Contactar</a>
          </li>
          {/*
            <li>
            <a href="/presupuesto">Presupuesto</a>
      </li>*/}
          
        </ul>
      </div>
      
    </nav>
  );
}