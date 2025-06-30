import { useState } from 'react'
import MenuHeader from './MenuHeader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faHandshake,
  faFileAlt,
  faCamera,
  faBullhorn,
  faUsers,
  faFileContract,
  faClipboardCheck,
  faMoneyBillWave,
  faTools,
  faShieldAlt,
} from '@fortawesome/free-solid-svg-icons'
import './styles/Consigne.css'

function Consigne() {
  const [activeTab, setActiveTab] = useState('venta')

  return (
    <>
      <MenuHeader />
      <div className="consigne-container">
        <div className="consigne-content">
          <h1>
            <strong>CONSIGNE SU INMUEBLE</strong>
          </h1>

          <div className="tabs-container">
            <div className="tabs-header">
              <button
                className={`tab-button ${
                  activeTab === 'venta' ? 'active' : ''
                }`}
                onClick={() => setActiveTab('venta')}
              >
                <FontAwesomeIcon icon={faHome} /> Consigne para Venta
              </button>
              <button
                className={`tab-button ${
                  activeTab === 'arriendo' ? 'active' : ''
                }`}
                onClick={() => setActiveTab('arriendo')}
              >
                <FontAwesomeIcon icon={faHandshake} /> Consigne para Arriendo
              </button>
            </div>

            <div className="tabs-content">
              {activeTab === 'venta' ? (
                <div className="tab-pane">
                  <div className="two-columns-layout">
                    <div className="requirements-column">
                      <h2>
                        <FontAwesomeIcon icon={faFileAlt} /> Requisitos para
                        Venta
                      </h2>
                      <ul className="requirements-list">
                        <li>
                          Certificado libertad y tradición no superior a 30
                          días.
                        </li>
                        <li>Fotocopia cédula propietario.</li>
                        <li>Copia escritura.</li>
                        <li>Copia de las facturas de servicios públicos.</li>
                        <li>Paz y salvo de catastro.</li>
                        <li>Firmar contrato de consignación.</li>
                        <li>RUT.</li>
                      </ul>
                    </div>

                    <div className="services-column">
                      <h2>
                        <FontAwesomeIcon icon={faClipboardCheck} /> NUESTRO
                        SERVICIO CONSISTE EN:
                      </h2>
                      <ul className="services-list">
                        <li>
                          <FontAwesomeIcon
                            icon={faCamera}
                            className="service-icon"
                          />
                          Visitar la propiedad para tomar fotografías y así
                          evaluar el valor del predio para venderlo.
                        </li>
                        <li>
                          <FontAwesomeIcon
                            icon={faBullhorn}
                            className="service-icon"
                          />
                          Promocionar su inmueble en nuestra web y en otros
                          portales inmobiliarios especializados y en las redes
                          sociales.
                        </li>
                        <li>
                          <FontAwesomeIcon
                            icon={faUsers}
                            className="service-icon"
                          />
                          Concretar las visitas de los potenciales compradores.
                        </li>
                        <li>
                          <FontAwesomeIcon
                            icon={faFileContract}
                            className="service-icon"
                          />
                          Hacer todos los trámites necesarios para vender la
                          propiedad (promesa de compraventa, gestiones de
                          impuestos, etc.).{' '}
                          <strong>USTED NO SE DEBE PREOCUPAR DE NADA</strong>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="benefits-box">
                    <h3>Beneficios de consignar con nosotros:</h3>
                    <ul>
                      <li>Le garantizamos una negociación transparente.</li>
                      <li>Mayor difusión.</li>
                      <li>Filtramos los posibles compradores.</li>
                      <li>No tiene que preocuparse por hacer citas.</li>
                      <li>
                        Asesoría tanto para usted como propietario como para el
                        comprador.
                      </li>
                      <li>
                        La seguridad que la documentación se hará de manera
                        ágil, efectiva y a tiempo.
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="tab-pane">
                  <div className="important-notice">
                    <h3>
                      <FontAwesomeIcon icon={faShieldAlt} /> Información
                      Importante para Propietarios
                    </h3>
                    <p>
                      Señor Propietario, ponemos a su disposición nuestros
                      servicios inmobiliarios de administración con una asesoría
                      personalizada y eficiente.
                    </p>
                    <p className="highlight">
                      Actualmente contamos con el respaldo de un
                      <strong> SEGURO DE ARRENDAMIENTO</strong> lo cual nos
                      permite pagarle mes a mes y de manera cumplida el pago de
                      su renta.
                    </p>
                  </div>
                  <div className="two-columns-layout">
                    <div className="requirements-column">
                      <h2>
                        <FontAwesomeIcon icon={faFileAlt} /> Requisitos para
                        Arriendo
                      </h2>
                      <ul className="requirements-list">
                        <li>
                          Certificado libertad y tradición no superior a 30
                          días.
                        </li>
                        <li>Fotocopia cédula propietario.</li>
                        <li>Copia escritura.</li>
                        <li>
                          Últimos recibos de servicios públicos cancelados.
                        </li>
                        <li>Firmar contrato de administración.</li>
                        <li>RUT.</li>
                      </ul>
                    </div>

                    <div className="services-column">
                      <h2>
                        <FontAwesomeIcon icon={faClipboardCheck} /> NUESTRO
                        SERVICIO CONSTA DE:
                      </h2>
                      <ul className="services-list">
                        <li>
                          <FontAwesomeIcon
                            icon={faCamera}
                            className="service-icon"
                          />
                          Visita al inmueble. Colocación de publicidad en el
                          mismo.
                        </li>
                        <li>
                          <FontAwesomeIcon
                            icon={faMoneyBillWave}
                            className="service-icon"
                          />
                          Fijar el canon de arrendamiento por mutuo acuerdo.
                        </li>
                        <li>
                          <FontAwesomeIcon
                            icon={faFileContract}
                            className="service-icon"
                          />
                          Contrato de arrendamiento con el arrendatario.
                        </li>
                        <li>
                          <FontAwesomeIcon
                            icon={faMoneyBillWave}
                            className="service-icon"
                          />
                          Recibir el valor de los arrendamientos y entregarlos
                          al propietario.
                        </li>
                        <li>
                          <FontAwesomeIcon
                            icon={faClipboardCheck}
                            className="service-icon"
                          />
                          Afiliación al seguro de arrendamiento y administración
                          (si aplica).
                        </li>
                        <li>
                          <FontAwesomeIcon
                            icon={faTools}
                            className="service-icon"
                          />
                          Velar por la conservación del inmueble y asistencia
                          técnica para arreglos.
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="benefits-box">
                    <h3>Ventajas de nuestro servicio:</h3>
                    <ul>
                      <li>
                        Cancelamos su arrendamiento mensualmente pague o no
                        pague el arrendatario.
                      </li>
                      <li>
                        Promocionamos su inmueble en nuestra web y en otros
                        portales inmobiliarios.
                      </li>
                      <li>
                        Nos esmeramos por prestarle un servicio de calidad.
                      </li>
                      <li>
                        Estamos preparados para que su inmueble sea devuelto en
                        las mismas condiciones.
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Consigne
