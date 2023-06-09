import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Header.css';
import { AUTH_TOKEN } from '../constants';
import { useTranslation } from "react-i18next";
import LanguageSelect from "./languageSelect";


const Header = () => {

  const { t } = useTranslation();

  const navigate = useNavigate();
  const authToken = localStorage.getItem(AUTH_TOKEN);

  return (
    <div className="Encabezado">

      <div className="RecuadroLogo">
        <h1><b className="Logo_Text">{t("Equipo-De-Futbol")}</b></h1>
        <img className='Logo_Img' src='./Imagenes/bicho.png' alt='Textp'></img>
      </div>

      <div className="menu">
        <nav>
          <ul>
            <li>
              <Link to="/Inicio" className="no-underline black">
                {t('Perfil')}
              </Link>
            </li>

            <li>
              <Link to="/" className="no-underline black">
                {t('Mostrar-Equipo')}
              </Link>
            </li>

            <li>
              <Link to="/create" className="no-underline black" >
                {t("Agregar-Equipo")}
              </Link>

            </li>
            <li>
              <Link to="/text-davinci-003" className="no-underline black" >
                {t("Text-davinci-003")}
              </Link>

            </li>
            <li>
              <Link to="/imagenia" className="no-underline black" >
                {t("imagenia")}
              </Link>
            </li>

            <li>
              <Link to="/imageniaedit" className="no-underline black" >
                chat
              </Link>
            </li>
            <li>
              <Link to="/emojis" className="no-underline black" >
                emojis
              </Link>
            </li>
            <li>
              <Link to="/traductor" className="no-underline black" >
                traductor
              </Link>
            </li>
            <li>
              <Link to="/list" className="no-underline black" >
                lista
              </Link>
            </li>
          
            <li>
              <Link
                to="/search"
                className="ml1 no-underline black"
              >
                {t("search")}
              </Link>
            </li>
            <li>
              {authToken && (
                <Link
                  to="/login"
                  className="ml1 no-underline black"
                >
                  submit
                </Link>
              )}

              <div className="flex flex-fixed">
                <div className="ml1 pointer black">
                  {t('select_language')}
                </div>
                <div className="ml1 pointer black"> : </div>

                <div>
                  <LanguageSelect
                    className="ml1 pointer black"
                      />
                </div>
              </div>

              <div className="flex flex-fixed">
                {authToken ? (
                  <div
                    className="ml1 pointer black"
                    onClick={() => {
                      localStorage.removeItem(AUTH_TOKEN);
                      navigate(`/`);
                    }}
                  >
                    logout
                  </div>
                ) : (
                  <Link
                    to="/login"
                    className="ml1 no-underline black"
                  >
                    {t("login")}
                  </Link>

                )}
              </div>
            </li>
          </ul>
        </nav>


      </div>

    </div>
  );
};

export default Header;