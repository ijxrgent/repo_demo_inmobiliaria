import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import './styles/Footer.css'

function Footer() {
  return (
    <div className="footer-container">
      <div className="location">
        <button type="button" className="location-btn">
          <FontAwesomeIcon icon={faLocationDot} size="2x" />
        </button>
        <div className="location-text">
          <p>RIOHACHA, LA GUAJIRA</p>
          <p>CALLE 1 # 10 - 53; BARRIO CENTRO</p>
        </div>
      </div>

      <div className="map-location">
        <iframe
          src="https://www.google.com/maps?q=Calle+1+%23+10-53,+Riohacha,+La+Guajira&output=embed"
          width="40%"
          height="250"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación Agencia Inmobiliaria Mar Caribe"
        />
      </div>

      <div className="footer">
        <p>
          © Agencia Inmobiliaria Mar Caribe SAS en Riohacha, La Guajira —
          Inmobiliaria en Riohacha
        </p>
      </div>
    </div>
  )
}

export default Footer
