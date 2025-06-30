import './styles/Main.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookF,
  faInstagram,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons'

function Main() {
  return (
    <div className="main-container">
      <div className="iconos-sociales">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faXTwitter} />
        </a>
      </div>
      <h1 className="titulo-inmobiliaria">AGENCIA INMOBILIARIA</h1>
      <h2 className="nombre-empresa">MAR CARIBE S.A.S</h2>
      <p className="mensaje-servicio">33 AÑOS AL SERVICIO DE NUESTRA CIUDAD</p>
    </div>
  )
}

export default Main
