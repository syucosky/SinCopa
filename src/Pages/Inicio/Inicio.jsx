import React from "react";
import "../Inicio/bgroundColor.css"
function Inicio() {
  return (
    <div className=" mx-4" >
      <div className="text-center ">
        <p>
          "Cantar es liberar el alma a través de la melodía; encuentra tu voz y
          deja que el mundo escuche tu historia musical. 🎤✨"
        </p>
      </div>
      <div className=" container-fluid text-center ">
        <h1>¿Quién soy?</h1>
        <p>Hola soy Florencia, cantante y profesora de canto.</p>
      </div>
      <div className="flex d-flex">
        <div className="text-center   mx-4" class="bgColorind">
          <h3>Clases Individuales</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae harum
            ipsam unde aliquid necessitatibus totam odit aperiam, adipisci
            officiis dolorum ducimus delectus praesentium dolor, fuga distinctio
            quisquam, ea nemo tempore.
          </p>
        </div>
        <div className="text-center  mx-4 " class="bgColorGroup">
          <h3>Clases Grupales</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae harum
            ipsam unde aliquid necessitatibus totam odit aperiam, adipisci
            officiis dolorum ducimus delectus praesentium dolor, fuga distinctio
            quisquam, ea nemo tempore.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Inicio;
