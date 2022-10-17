import React from 'react'
import Input from '../../Input'
import Logo from '../../Logo'
import Title from '../../Title'
import Signature from '../../Signature'
import CDate from '../../CDate'

const services = 
[
    {
        service: 'Endosos:', 
        fee: 'Desde $200.00'
    }, 
    {
        service: 'MVR:', 
        fee: '$10.00 por MVR'
    }, 
    {
        service: 'Registro Vehícular:', 
        fee: '$10.00 por copia'
    }, 
    {
        service: 'Renovacion de Placas', 
        fee: '$25.00'
    }, 
    {
        service: 'EZBuy:', 
        fee: '$10.00'
    }, 
    {
        service: 'Servicios Promocionales', 
        fee: '$25.00'
    }, 
    {
        service: 'Pagos', 
        fee: '$10.00'
    }, 
    {
        service: 'Pagos Tardíos', 
        fee: 'Hasta $50.00'
    }, 
    {
        service: 'Renovaciones', 
        fee: 'Hasta 100% de los honorarios'
    }, 
    {
        service: 'Fondos Insuficientes en ', 
        fee: ''
    }, 
    {
        service: 'DOT, ICC, MCP:', 
        fee: '$100.00'
    }, 
    {
        service: 'Tarjeta de Crédito/Cheque', 
        fee: '$35.00'
    }, 
]

export default function SBFDTrucking({firstSignature, secondSignature, name, initials, address, phone}) {

    React.useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div className='sheet font-11'>
            
            <Logo />

            <div className="d-flex justify-content-between">
                <label>Nombre del Cliente: <strong><Input /></strong></label>
                <label>Fecha: <strong><CDate /></strong></label>
            </div>

            <Title text="APENDICE A" />

            <p>
                <strong>I.</strong> No firme ningún documento a menos de que este llenado completamente en todas las líneas y espacios y usted haya leído el documento por completo y
                cuidadosamente.
                <br />
                <strong>II.</strong> Su bróker de seguro lo representa a usted, el consumidor, y tiene el derecho de cobrarle una cuota de bróker si él/ella decide hacerlo. Esta cuota no es establecida por
                la ley, y puede ser negociada entre usted y el corredor de seguro (Bróker).
                <br />
                <strong>III.</strong> Es ilegal que un bróker de seguro le cobre una cuota por colocarle cobertura únicamente a través de California Automobile Assigned Risk plan o el California Fair
                plan. Pueden aplicar cuotas por otras coberturas.
                <br />
                <strong>IV.</strong> Las cuotas de Bróker con frecuencia son no reembolsables aun cuando usted cancele su cobertura. Refiérase a su acuerdo de Bróker para ver si su cuota de Bróker
                es no reembolsable. Sin embargo, usted puede tener derecho a un reembolso completo si su bróker actuó de manera incompetente o deshonesta. Disputas no resueltas
                referentes a cuotas de bróker no reembolsadas pueden ser dirigidas al Departamento de Seguros para ser revisadas.
                <br />
                <strong>V.</strong> Usted tiene derecho a obtener y quedarse una copia de esta divulgación y cualquier acuerdo de cuota de bróker que usted firme.
                <br />
                <strong>VI.</strong> Su bróker puede recibir una comisión por parte de la compañía(s) de seguros por aplicar su cobertura. Esta comisión puede ser pagada a su bróker por la compañía
                de seguros además de cualquier cuota de bróker que usted pague.
                <br />
                <strong>VII.</strong> Si usted va a pagar su prima en pagos a una compañía financiera, por ley usted debe recibir una copia de la divulgación y acuerdo. Asegúrese de obtener y leer esos
                documentos antes de firmar un acuerdo de prima a financiada. Además pregunte a su bróker si el asegurador ofrece su propio plan de pagos. Planes de pago de
                asegurador son comúnmente más económicos que la prima de financiera a través de una prima de finanza por separado.
                <br />
                <strong>VIII.</strong> Si su bróker está aplicando cobertura a un automóvil, su bróker deberá proveerle con una copia de el folleto mas reciente de Seguro de Auto del Departamento de
                Seguros titulado “Automobile Insurance”. Si su bróker está aplicando cobertura residencial, su bróker deberá proveerle con una copia de un folleto del Departamento de
                Seguro de Seguros de Residencia titulado “Residencial Insurance”. Al firmar esta divulgación, usted reconoce haber recibido el folleto adecuado.
            </p>

            <p className='mb-1'>Iniciales del Cliente: <strong><Input /></strong></p>
            
            <Title text="DESIGNACION DE BROKER DE SEGURO Y ACUERDO PARA PAGAR CUOTA DE BROKER" />
            
            <p>
                Al dia de hoy, firmante mencionado abajo nombra a Adriana's Insurance Services Inc. Numero de licencia 0D36821 de el departamento de seguros de California.
                Corredor de seguro (“Bróker”) como su bróker de seguro designado. Este acuerdo continuara en pleno vigor hasta que sea terminado por cualquiera de las dos partes.
                El corredor está de acuerdo en representar al cliente de manera honesta y competente en obtener y dar servicio la cobertura de seguro deseado, según este disponible, y
                el cliente está de acuerdo en actuar de buena fe con el corredor y proveer al corredor con la divulgación de toda la información y documentación necesaria para así
                permitir al corredor procurar una póliza de seguro. El cliente esta de acurdo en pagar una cuota de corredor por los servicios de corredor. La cuota de corredores
                adicional a cualquier comisión, comisión contingente, o bonos, los cual puedan ser pagados al corredor por la compañía de seguros. Los servicios adicionales estan
                detallados a continuación. El cliente autoriza al corredor cancelar su seguro si la prima o cuotas permanecen si ser pagados al corredor (Broker).
            </p>

            <p>
                El honorario del <strong>Broker es <Input /></strong> (Iniciales del Cliente: <strong><Input /></strong>). El cliente está de acuerdo en pagar esta cuota y entiende que
                los honorarios SON/NO SON reembolsables (circule uno) independientemente de que la póliza sea cancelada o rechazada por el cliente o la aseguradora. El cliente
                autoriza al corredor mantener los pagos de las primas en cuentas de fideicomiso y recibir cualquier ingreso por intereses del de las mismas, hasta que sea pagado a la
                compañía de seguros. Servicios adicionales: el corredor puede cobrar las siguientes tarifas por los siguientes servicios por encima de la cuota.
            </p>

            <div className='services'>
                {services.map((elem, i) => {
                    return (
                        <div key={i} className='d-flex service'>
                            <label>{elem.service}</label>
                            <label>{elem.fee}</label>
                        </div>
                    ) 
                })}
            </div>

            <p>
                <strong>PAGOS DE PRIMAS: </strong> 
                El corredor puede, en su única opción, aceptar pagos de la cuota de prima y transmitir el pago a la aseguradora por una cuota adicional de
                $10.00 por cada pago recibido. Los pagos deben ser recibidos por el corredor a no menos de dos (2) días hábiles previos a la fecha de vencimiento. El corredor no será
                responsable por pagos tardíos, cuotas de reinstalación, o la cancelación resultante de su póliza. La responsabilidad del corredor por aceptar el pago de primas será
                limitada a la cantidad del pago de la prima.
            </p>

            <Title text="CANCELACION Y OTRAS DISPOSICIONES VARIAS" />

            <p className="mb-1">
                El corredor únicamente honrara solicitudes de cancelación hechas por escrito y firmadas por el cliente. El corredor puede proveer al cliente con tarjetas de identificación
                de seguro al término del proceso de aplicación. El cliente reconoce y acepta que la cobertura no es prevista hasta que la aplicación sea suscrita y ceptada por la compañía
                de seguro. En consecuencia, la tarjeta de identificación no puede ser utilizada como prueba de seguro por el cliente hasta que la compañía de seguro haya comprometido y
                emitido cobertura como lo demuestra la hoja de declaración y/o póliza. El cliente entiende que un numero de “binder” no es prueba de seguro antes de que la hoja de
                declaración sea emitida. El corredor y el cliente están de acuerdo con el arbitraje obligatorio con ADR de cualquier disputa en el cual la cantidad reclamada exceda la
                jurisdicción de la corte de reclamos pequeños bajo las reglas establecidas por ADR, de conformidad con el código civil de procedimientos de California, in derecho a apelación.
            </p>
            
            <Signature firstSignature={firstSignature} secondSignature= {secondSignature}/>

            <label className='mt-1 text-center'>
                <strong>
                Si usted tiene cualquier pregunta o queja por favor comuníquese al nuestro teléfono gratuito de servicio al cliente al 1-888-290-4040. En cualquier caso de preguntas/problemas referente a la
                cuota de corredor o seguro, contacte al Departamento de Seguros al 1-800-927-HELP.
                </strong>
            </label>

        </div>
    )
}