import { Link } from "react-router-dom";
import NavbarLinks from "./NavbarLinks/NavbarLinks";
import logo from "./../../assets/logosincopa.svg";
import instagramLogo from "./../../assets/instagramLogo.png";
import whatsappLogo from "./../../assets/whatsappLogo.png";
function Navbar() {
  return (
    <div className="container">
      <div className="d-flex m-4 align-items-center justify-content-between">
        <Link className=" mx-5" to="/">
          <img
            src={logo}
            alt="Logo del Sitio"
            style={{ width: "300px", height: "160px" }}
            className="mx-auto img-fluid bg-light"
          />
        </Link>

        <a href="https://www.instagram.com/sincopa_tallervocal" target="_blank" className="text-info">
          <img
            src={instagramLogo}
            alt="Logo del Sitio"
            style={{ width: "25px", height: "auto" }}
            className="mx-1 img-fluid bg-light"
          />
          sincopa_tallervocal
        </a>
        <a href="https://wa.me/3593670" target="_blank" className="text-info">
          <img
            src={whatsappLogo}
            alt="Logo del Sitio"
            style={{ width: "25px", height: "auto" }}
            className="mx-1 img-fluid bg-light"
          />
          221 356-3670
        </a>
        <NavbarLinks/>
      </div>
    </div>
  );
}

export default Navbar;
