import { useState, useRef } from 'react'
import { propiedades } from '../data/data'
import './styles/Search.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBed,
  faBath,
  faChevronDown,
  faChevronUp,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'

function SearchFilter() {
  const [searchText, setSearchText] = useState('')
  const [detalleAbierto, setDetalleAbierto] = useState(null)
  const carruselRef = useRef(null)

  const propiedadesFiltradas = propiedades.filter((prop) =>
    `${prop.titulo} ${prop.descripcion} ${prop.tipo} ${prop.ciudad}`
      .toLowerCase()
      .includes(searchText.toLowerCase())
  )

  const toggleDetalle = (id) => {
    setDetalleAbierto(detalleAbierto === id ? null : id)
  }

  const scrollCarrusel = (dir) => {
    const contenedor = carruselRef.current
    const scrollAmount = 320 // ancho aproximado de una card + margen
    contenedor.scrollBy({
      left: dir === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    })
  }

  return (
    <div className="search-container">
      <h2 className="search-title">Encuentra tu propiedad ideal</h2>
      <input
        type="text"
        placeholder="Buscar por palabra clave..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="search-input"
      />

      <div className="carrusel-container">
        <button
          className="btn-carrusel left"
          onClick={() => scrollCarrusel('left')}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>

        <div className="carrusel" ref={carruselRef}>
          {propiedadesFiltradas.map((prop) => (
            <div className="card-propiedad" key={prop.id}>
              <h3>{prop.titulo}</h3>
              {prop.img && (
                <img
                  src={prop.img}
                  alt={prop.titulo}
                  className="img-propiedad"
                />
              )}
              <div className="iconos">
                <span>
                  <FontAwesomeIcon icon={faBed} /> {prop.habitaciones} hab
                </span>
                <span>
                  <FontAwesomeIcon icon={faBath} /> {prop.banos} baños
                </span>
              </div>
              <div className="tags">
                <p className="tipo">{prop.tipo}</p>
                <p className="estado">{prop.estado || 'Disponible'}</p>
              </div>
              <div className="info-ciudad-canon">
                <p className="ciudad">{prop.ciudad}</p>
                <span className="canon">{prop.canon}</span>
              </div>
              <p className="direccion">{prop.direccion}</p>
              <button
                onClick={() => toggleDetalle(prop.id)}
                className="btn-detalle"
              >
                {detalleAbierto === prop.id ? (
                  <>
                    Ocultar detalles <FontAwesomeIcon icon={faChevronUp} />
                  </>
                ) : (
                  <>
                    Ver más <FontAwesomeIcon icon={faChevronDown} />
                  </>
                )}
              </button>

              {detalleAbierto === prop.id && (
                <div className="detalle">
                  <p>{prop.mas_detalle}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <button
          className="btn-carrusel right"
          onClick={() => scrollCarrusel('right')}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>

      {propiedadesFiltradas.length === 0 && (
        <p className="no-resultados">No se encontraron propiedades.</p>
      )}
    </div>
  )
}

export default SearchFilter
