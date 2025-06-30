import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUser,
  faEnvelope,
  faComment,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons'
import MenuHeader from './MenuHeader'
import './styles/Contact.css'

function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    mensaje: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Formulario de demostración - Los datos no se envían realmente')
    setFormData({ nombre: '', correo: '', mensaje: '' })
  }

  return (
    <div>
      <MenuHeader />
      <div className="contact-form-container">
        <h2 className="form-title">
          <FontAwesomeIcon icon={faComment} className="title-icon" />
          Envíanos un mensaje
        </h2>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <div className="input-container">
              <FontAwesomeIcon icon={faUser} className="input-icon" />
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Nombre completo"
                className="form-input"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <div className="input-container">
              <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
              <input
                type="email"
                id="correo"
                name="correo"
                value={formData.correo}
                onChange={handleChange}
                placeholder="Correo electrónico"
                className="form-input"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <div className="textarea-container">
              <FontAwesomeIcon icon={faComment} className="textarea-icon" />
              <textarea
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                placeholder="Escribe tu mensaje aquí..."
                className="form-textarea"
                rows="5"
                required
              />
            </div>
          </div>

          <button type="submit" className="submit-button">
            <FontAwesomeIcon icon={faPaperPlane} className="button-icon" />
            Enviar mensaje
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
