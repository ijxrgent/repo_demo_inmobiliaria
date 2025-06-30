import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBed,
  faBath,
  faChevronDown,
  faChevronUp,
} from '@fortawesome/free-solid-svg-icons'
import './styles/PropiedadCard.css'

function PropiedadCard({ propiedad }) {
  const [mostrarDetalle, setMostrarDetalle] = useState(false)

  const toggleDetalle = () => setMostrarDetalle(!mostrarDetalle)

  return (
    <div className="propiedad-card">
      <h3 className="titulo">{propiedad.titulo}</h3>
      <img src={propiedad.img} alt={propiedad.titulo} className="imagen" />
      <div className="info">
        <div className="icono">
          <FontAwesomeIcon icon={faBed} />{' '}
          {propiedad.descripcion.match(/(\d+)\s*habitaciones?/i)?.[1] || 0}
        </div>
        <div className="icono">
          <FontAwesomeIcon icon={faBath} />{' '}
          {propiedad.descripcion.match(/(\d+)\s*bañ[oa]s?/i)?.[1] || 0}
        </div>
      </div>
      <button className="boton-detalle" onClick={toggleDetalle}>
        {mostrarDetalle ? 'Ocultar detalles' : 'Ver más detalles'}
        <FontAwesomeIcon icon={mostrarDetalle ? faChevronUp : faChevronDown} />
      </button>
      {mostrarDetalle && (
        <div className="detalle">
          <p>{propiedad.mas_detalle}</p>
          <p>
            <strong>Dirección:</strong> {propiedad.direccion}
          </p>
          <p>
            <strong>Ciudad:</strong> {propiedad.ciudad}
          </p>
        </div>
      )}
    </div>
  )
}

export default PropiedadCard
