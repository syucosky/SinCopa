import { Link } from "react-router-dom"


function NavbarLinks() {
   return (
    <nav className='navbar text-light'>
      <div className="d-flex justify-content-around  container-fluid">
        <Link className="px-3 text-success" to="/">Inicio</Link>
        <Link className="px-3 text-success" to="/Contacto">¿Quién soy?</Link>
        <Link className="px-3 text-success" to="/Galeria">Galeria</Link>
      </div>
    </nav>
   )
 }
 
 export default NavbarLinks