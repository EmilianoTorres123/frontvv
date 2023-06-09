import React from 'react';
import "../styles/Inicio.css"
import "../styles/Alumno.css"

export const Imagen = () => {
    return (
      <div class="imagen">
      </div>
  
    );
  };
  
  export const Alumno = () => {
    return (
      <div>
        <div class="my-2 mx-auto p-relative bg-white shadow-1 blue-hover .Carta">
          <div className='TarjetaFoto'>
            <img src="./Imagenes/foto.jpg" alt="Foto mía"
              class="d-block w-full"></img>
            <h2>
              Nombre del Alumno: <br></br>
              Matricula: <br></br>
              Carrera Universitaria: <br></br> 
            </h2>
  
            <h3>
              Aaron Emiliano Torres Nuñez <br></br>
              zS20006726 <br></br>
              Ingeniería de Software
            </h3>
          </div>
  
          <div class="px-2 py-2">
            <p class="mb-0 small font-weight-medium text-uppercase mb-1 text-muted lts-2px">
              Trabajo
            </p>
  
            <h1 class="ff-serif font-weight-normal text-black card-heading mt-0 mb-1 Carta1">
              backend para agregar datos de equipos y el backend fue creado en python
            </h1>
  
            <p class="mb-1">
              front de nuestra presentacion para mostrar y agregar datos del equipo
            </p>
  
          </div>
  
          <a href="mailto:Irving.CondeM@Gmail.com" class="text-uppercase d-inline-block font-weight-medium lts-2px ml-2 mb-2 text-center styled-link">
            Contactar Alumno
          </a>
        </div>
  
  
  
        <div class="w-full bg-white py-1 px-2 clearfix Carta2">
          <span class="float-left">
            Red Social Personal:  
            <a href="https://twitter.com/AaronEmiliano7" class="styled-link"> Twitter</a>
          </span>
          <span class="float-right">
           <p class="styled-link"> +52 273 112 72 41</p>
          </span>
        </div>
      </div>
  
    )
  }