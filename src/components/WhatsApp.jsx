import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import './styles/WhatsApp.css'
function WhatsApp() {
  return (
    <div>
      <a
        href="https://wa.me/573006795865"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
        aria-label="¿Necesitas ayuda?"
      >
        <FontAwesomeIcon icon={faWhatsapp} size="1x" />
      </a>
    </div>
  )
}
export default WhatsApp
