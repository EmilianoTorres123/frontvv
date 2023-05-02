import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
    return (
        <div className="Encabezado">
  
        <div className="RecuadroLogo">
          <h1><b className="Logo_Text">Equipo-De-Futbol</b></h1>
          <img className='Logo_Img' src='./Imagenes/bicho.png' alt='Textp'></img>
        </div>
  
        <div className="menu">
          <nav>
            <ul>
              <li>
                <Link to="/Inicio" className="no-underline black">
                  Perfil
                </Link>
              </li>
  
              <li>
                <Link to="/" className="no-underline black">
                  Mostrar-Equipo
                </Link>
              </li>
                    
              <li>
                <Link to="/create" className="no-underline black" >
                  Agregar-Equipo
                </Link>
              </li>
            </ul>
          </nav>
        </div>
  
      </div>
    );
};

export default Header;