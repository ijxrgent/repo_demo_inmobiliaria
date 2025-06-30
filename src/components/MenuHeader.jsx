import './styles/MenuHeader.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faTimes,
  faChevronDown,
  faChevronUp,
} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function MenuHeader() {
  const [menuAbierto, setMenuAbierto] = useState(false)
  const [submenuAbierto, setSubmenuAbierto] = useState(null)

  const toggleMenu = () => setMenuAbierto(!menuAbierto)

  const toggleSubmenu = (menu) => {
    if (submenuAbierto === menu) {
      setSubmenuAbierto(null)
    } else {
      setSubmenuAbierto(menu)
    }
  }

  return (
    <>
      <header className="menu-header">
        <div className="container-logo">
          <img
            src="/mar_caribe_removebg.png"
            className="img-logo"
            alt="Logo Mar Caribe"
          />
          <a href="/">INMOBILIARIA MAR CARIBE S.A.S</a>
        </div>

        <nav className={`menu-options ${menuAbierto ? 'open' : ''}`}>
          <ul className="menu">
            {/* Opción ARRIENDOS - Versión desktop */}
            <li className="has-submenu">
              <a href="#">ARRIENDOS</a>
              {/* Versión mobile */}
              <div
                onClick={() => toggleSubmenu('arriendos')}
                className="submenu-trigger"
              >
                ARRIENDOS
                <FontAwesomeIcon
                  icon={
                    submenuAbierto === 'arriendos' ? faChevronUp : faChevronDown
                  }
                  className="mobile-chevron"
                />
              </div>
              <ul
                className={`submenu ${
                  submenuAbierto === 'arriendos' ? 'active' : ''
                }`}
              >
                <li>
                  <a href="#">CASAS PARA VIVIENDA</a>
                </li>
                <li>
                  <a href="#">APARTAMENTOS</a>
                </li>
                <li>
                  <a href="#">BODEGAS</a>
                </li>
                <li>
                  <a href="#">CASA USO COMERCIAL</a>
                </li>
                <li>
                  <a href="#">LOCALES</a>
                </li>
                <li>
                  <a href="#">LOTES</a>
                </li>
                <li>
                  <a href="#">OFICINAS</a>
                </li>
                <li>
                  <a href="#">PARQUEADEROS</a>
                </li>
              </ul>
            </li>

            {/* Opción VENTAS - Versión desktop */}
            <li className="has-submenu">
              <a href="#">VENTAS</a>
              {/* Versión mobile */}
              <div
                onClick={() => toggleSubmenu('ventas')}
                className="submenu-trigger"
              >
                VENTAS
                <FontAwesomeIcon
                  icon={
                    submenuAbierto === 'ventas' ? faChevronUp : faChevronDown
                  }
                  className="mobile-chevron"
                />
              </div>
              <ul
                className={`submenu ${
                  submenuAbierto === 'ventas' ? 'active' : ''
                }`}
              >
                <li>
                  <a href="#">APARTAMENTOS EN VENTA</a>
                </li>
                <li>
                  <a href="#">BODEGAS EN VENTA</a>
                </li>
                <li>
                  <a href="#">CASAS PARA VENTA</a>
                </li>
                <li>
                  <a href="#">EDIFICIOS</a>
                </li>
                <li>
                  <a href="#">LOCALES</a>
                </li>
                <li>
                  <a href="#">NEGOCIOS</a>
                </li>
                <li>
                  <a href="#">LOTES</a>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/requisitos" onClick={() => setMenuAbierto(false)}>
                REQUISITOS
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setMenuAbierto(false)}>
                CONTACTO
              </Link>
            </li>
            <li>
              <Link to="/consigne" onClick={() => setMenuAbierto(false)}>
                CONSIGNE SU PROPIEDAD
              </Link>
            </li>
          </ul>
        </nav>

        <button className="menu-toggle" onClick={toggleMenu}>
          <FontAwesomeIcon icon={menuAbierto ? faTimes : faBars} size="lg" />
        </button>
      </header>
    </>
  )
}

export default MenuHeader
