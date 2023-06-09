
//import logo from './../logo.svg';
import './../styles/App.css';
import Header from './Header';
import LinkList from './LinkList';
import CreateLink from './createLink';
import { Route, Routes } from 'react-router-dom';
import {Imagen, Alumno}  from "./Inicio";
import Login from './Login';
import Textdavinci003 from './text-davinci-003';
import ServiceDavinci003 from './../services/text-davinci-003/service.davinci-003';
import ImgIA from './img.front';
import { useTranslation } from "react-i18next";
import ImgIE from './img.edit';
import EmojiComponent from './emojis';
import TraductorComponent from './traductor';
import ListFrontend from './list';

const App = () => {
  const { t } = useTranslation();

  return (
    <div className="center w85">

      <Header />
      <Imagen />
 
      {t("hello_welcome_to_react")}

      <div className="ph3 pv1 background-gray">
   
        <Routes>
        <Route  path="/Inicio" element={<Alumno/>} />
          <Route path="/" element={<LinkList />} />
          <Route
            path="/create"
            element={<CreateLink />}
          />
          <Route path="/login" element={<Login/>} />
          <Route path="/text-davinci-003" element={<Textdavinci003/>} />
          <Route path="/service.davinci-003" element={<ServiceDavinci003/>} />
          <Route path="/imagenia" element={<ImgIA/>} />
          <Route path="/imageniaedit" element={<ImgIE/>} />
          <Route path="/imageniaedit" element={<ImgIE/>} />
          <Route path="/emojis" element={<EmojiComponent/>} />
          <Route path="/traductor" element={<TraductorComponent/>} />
          <Route path="/list" element={<ListFrontend/>} />

        </Routes>
      </div>
    </div>
  );
}

export default App;

