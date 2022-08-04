import React from 'react'
import './NavBar.css'
import { Link, NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav 
        id="navbar-example2" 
        className="navbar navbar-expand-lg navbar-light bg-light px-3"
    >

        <Link 
          to="/private/profile" 
          className="navbar-brand" 
          tabIndex={0} 
          aria-label="Ir al Inicio"
        >
          HelpMeIUD
       </Link>


    
     <button className="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="true" aria-label="Toggle navigation" 
     >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className='navbar-collapse'id="navbarsExample09">


    <ul className="navbar-nav">
        
        
          <NavLink
            tabIndex={1}
            data-target="#"
            className="nav-item nav-link" 
            to="/login"
          >
            Login
           </NavLink>
          
        

        
        <NavLink
        tabIndex={2}
            className="nav-item nav-link" 
            to="/register"
         >
            Registro
        </NavLink>
        <NavLink
            tabIndex={3}
            className="nav-item nav-link" 
            to="/public/map"
         >
            Mapa
        </NavLink>
        
                    <NavLink
                    className="nav-item nav-link" 
                    to="/private/report"
                 >
                    Reportar
                </NavLink>
    
       
        <NavLink
            className="nav-item nav-link" 
            to="/private/delitos"
        >
            Delitos
        </NavLink>
   
        <NavLink
            tabIndex={4}
            className="nav-item nav-link" 
            to="/public/about"
         >
            Acerca
        </NavLink>
       
            <li className="nav-item dropdown logout">
                    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">
                        Julio
                    </a>
                <ul className="dropdown-menu">
                <NavLink
                    className="dropdown-item" 
                    to="/private/profile"
                 >
                     Mi Perfil
                 </NavLink>
                 <li><hr className="dropdown-divider"/></li>
                 <li >
                   <a className="dropdown-item"  href="#">  Salir</a>
                 </li>
                </ul>
                </li>
        
    </ul>
    </div>
    </nav>
  )
}
