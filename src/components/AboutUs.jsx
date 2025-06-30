import './styles/About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHandshake,
  faShieldAlt,
  faBullseye,
  faUsers,
} from '@fortawesome/free-solid-svg-icons'

function AboutUs() {
  return (
    <div className="about-us">
      <h2>¿POR QUÉ ELEGIRNOS?</h2>
      <div className="our-info-grid">
        <div className="our-info-section">
          <h3>
            <FontAwesomeIcon icon={faHandshake} className="icono-section" />
            QUIÉNES SOMOS
          </h3>
          <strong>
            Una empresa especializada que se enfoca en satisfacer las
            necesidades del mercado inmobiliario en Riohacha, brindando un
            servicio diferenciado con respecto a nuestros competidores.
          </strong>
          <strong>
            Agencia Inmobiliaria Mar Caribe, nació bajo el nombre inicial de
            Inmobiliaria Guajira Ltda, en el año 1991, por lo cual posee una
            trayectoria de 33 años en el mercado.
          </strong>
          <strong>
            La compañía presenta un modelo de negocio integrado en el sector
            inmobiliario que presta a través de sus diferentes servicios.
          </strong>
          <strong>
            Su estrategia de desarrollo está enfocada en el conocimiento
            profundo de las necesidades de sus clientes.
          </strong>
        </div>

        <div className="our-info-section">
          <h3>
            <FontAwesomeIcon icon={faShieldAlt} className="icono-section" />
            GARANTÍA DE SATISFACCIÓN 100%
          </h3>
          <ul>
            <li>ARRENDAMIENTOS</li>
            <li>VENTAS</li>
            <li>AVALÚOS</li>
            <li>COMERCIALIZACIÓN</li>
            <li>ASESORÍAS</li>
            <li>SEGUROS DE ARRENDAMIENTOS</li>
            <li>ADMINISTRACIÓN</li>
          </ul>
        </div>

        <div className="our-info-section">
          <h3>
            <FontAwesomeIcon icon={faBullseye} className="icono-section" />
            MISIÓN
          </h3>
          <strong>
            Trabajar día a día en el mejoramiento y perfeccionamiento de los
            servicios que prestamos y satisfacer las necesidades de nuestros
            clientes.
          </strong>
          <strong>
            Cumplir e incrementar las metas establecidas por medio de un capital
            humano eficiente y así lograr un crecimiento sostenido de la
            empresa.
          </strong>
          <strong>
            Desarrollar un ambiente de trabajo óptimo en el cual se fomenten los
            valores humanos en armonía con las políticas establecidas por la
            empresa.
          </strong>
        </div>

        <div className="our-info-section">
          <h3>
            <FontAwesomeIcon icon={faUsers} className="icono-section" />
            NUESTROS CLIENTES
          </h3>
          <ul>
            <li>ICETEX</li>
            <li>DANE</li>
            <li>COLPENSIONES</li>
            <li>RAMA JUDICIAL</li>
            <li>FLORISTERÍA BEGONIA</li>
            <li>PROSEGUR S.A.</li>
            <li>FONDOS DE EMPLEADOS DEL CERREJÓN</li>
            <li>FUNDACIÓN DE LA MUJER COLOMBIA SAS</li>
            <li>LILIPINK</li>
            <li>LA BOTICA</li>
            <li>DROGUERÍA INGLESA</li>
            <li>COOPERATIVA DE VIGILANCIA PRIVADA</li>
            <li>RESTAURANTE LA TERRAZA</li>
            <li>IPS ANENU JIA</li>
            <li>IPS MAKUSHAMA</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
