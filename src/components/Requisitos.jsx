import MenuHeader from './MenuHeader'
import './styles/Requisitos.css'
function Requisitos() {
  return (
    <div className="requisitos-container">
      <MenuHeader />
      <div className="requisitos">
        <h1>
          <strong>FORMULARIOS INTERACTIVOS</strong>
        </h1>
        <hr />
        <div className="from-container">
          {/* Aquí irán los formularios persona natural, y juridica en PDF */}
        </div>
        <h2>
          <strong>REQUISITOS</strong>
        </h2>
        <hr />
        <ul className="custom-list">
          <li className="li">
            El arrendatario y los deudores solidarios deben demostrar ingresos
            superiores al doble del canon de arrendamiento. (El triple para
            personas jurídicas).
          </li>
          <li className="li">
            Diligenciar un formulario tanto el arrendatario como los deudores,
            dependiendo su calidad (persona natural o jurídica).
          </li>
        </ul>
        <div className="about-documents">
          <div className="employee-doc">
            <p>DOCUMENTOS EMPLEADOS</p>
            <ul className="custom-list">
              <li>
                Fotocopia de cédula de ciudadanía ampliada al 150% firmada y con
                la impresión dactilar. Para extranjeros fotocopia del Pasaporte
                vigente y cédula de extranjería.
              </li>
              <li>
                Certificado laboral con fecha de expedición no superior a tres
                (3) meses.
              </li>
              <li>
                Desprendibles de pago de nómina de los tres (3) últimos meses.
              </li>
              <li>
                Copia de los extractos bancarios de los tres (3) últimos meses
              </li>
              <li>RUT actualizado.</li>
              <li>Última declaración de renta presentada (Si aplica).</li>
            </ul>
          </div>
          <div className="independient-doc">
            <p>DOCUMENTOS INDEPENDIENTES</p>
            <ul className="custom-list">
              <li>
                Fotocopia de cédula de ciudadanía ampliada al 150% firmada y con
                la impresión dactilar.
              </li>
              <li>
                Copia de los extractos bancarios de los tres (3) últimos meses.
              </li>
              <li>Certificado de Cámara de Comercio y RUT actualizado.</li>
              <li>Última declaración de renta presentada (Si aplica).</li>
            </ul>
          </div>
          <div className="documents_of_legal_entities">
            <p>DOCUMENTOS PERSONAS JURIDÍCAS</p>
            <ul className="custom-list">
              <li>
                Certificado de Cámara de Comercio no mayor a tres (3) meses de
                expedición.
              </li>
              <li>RUT actualizado.</li>
              <li>
                Estados financieros certificados por contador publico con las
                respectivas notas contables del último periodo contable.
              </li>
              <li>Última declaración de renta presentada.</li>
              <li>
                Cédula del representante legal ampliada, firmada y con huella.
              </li>
              <li>Copia de los 3 últimos extractos bancarios.</li>
              <li>Relación de socios o accionistas de la empresa.</li>
            </ul>
          </div>
        </div>
        <div className="notes">
          <p>NOTA:</p>
          <ul className="custom-list">
            <li>
              Si el canon de arrendamiento es inferior o igual a 3 (SMMLV) se
              debe presentar arrendatario y un (1) deudor que cumplan
              satisfactoriamente con requisito de ingresos. Se recomienda que
              uno de los solicitantes tenga vinculación laboral.
            </li>
            <li>
              Si el canon de arrendamiento es superior a 3 (SMMLV), se deben
              presentar arrendatario y dos (2) deudores solidarios que cumplan
              satisfactoriamente con requisito de ingresos y acreditar finca
              raíz de propiedad de cualquiera de los solicitantes (arrendatario
              y/o deudores solidarios). Se recomienda que uno de los
              solicitantes tenga vinculación laboral.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Requisitos
