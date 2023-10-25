
const pdfFonts = {
    // download default Roboto font from cdnjs.com
    Roboto: {
        normal:
            'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.7/fonts/Roboto/Roboto-Regular.ttf',
        bold: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.7/fonts/Roboto/Roboto-Medium.ttf',
        italics:
            'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.7/fonts/Roboto/Roboto-Italic.ttf',
        bolditalics:
            'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.7/fonts/Roboto/Roboto-MediumItalic.ttf'
    }
};


const terminos = "CONDICIONES GENERALES: Incluye todos los servicios según como a sido contratado por el/los pasajeros detallados en el programa.La Empresa Del Valle Turismo declina toda responsabilidad por cualquier daño o inconveniente que las pertenencias del / los pasajeros pudieran sufrir por huelgas, accidentes y declina toda consecuencia responsabilidad sa como por ha sido cualquier contratado daño o por el / los inconveniente pasajeros que las detalladas pertenencias en el programa del / los pasajeros y sus consecuencias, enfermedades, robos, pérdidas o daño de equipajes u objetos personales sean cuales fueren, sus causas durante los días de la excursión contratada.El Operador Del Valle Turismo declina toda responsabilidad en caso de ser rechazados por las autoridades migratorias, el ingreso al país de los pasajeros que no reúnan los requisitos que se exigen para tal fin y correrá por cuenta del pasajero cualquier gasto que se origine aplicándose en este caso las condiciones establecidas para anulaciones o desistimiento voluntario.La Empresa Del Valle Turismo se reserva el derecho de hacer, abandonar el tour en cualquier circunstancia o lugar a toda aquella persona que, de algún modo, cause malestar en el grupo y ponga en peligro el desarrollo normal de la excursión, no teniendo esta persona derecho.La Empresa Del Valle Turismo se reserva el derecho de cancelar algunas de las salidas establecidas cuando no se complete la cantidad mínima de 16 pasajeros inscritos, reintegrándoles la totalidad del dinero abonado a la fecha sin ningún tipo de interés u otro tipo de ajuste, comunicando fehacientemente a los contratantes con 5 días de anticipación a la fecha de salida, quedando de esta forma el organizador desligado de toda responsabilidad.Una vez confirmados los servicios en forma efectiva, la cancelación de los mismos sufrirá una retención del 10 % del total si esta se produjera con una anticipación de 20 días o más a la fecha de salida, menos de 20 días y hasta 10 días, la retención será del 20 %, menos de 10 días será del 50 % del valor total de la excursión.La excursión estará sujeta a modificación de tarifas sin previo aviso si así lo requiere el operador Del Valle Turismo."

import pdfMake from 'pdfmake/build/pdfmake';
import { logob64 } from './logob64';

export function imprimirComp(pago, venta) {
    const documentDefinition = {
        pageSize: 'A4',
        //pageOrientation: 'landscape',
        content: [
            {
                alignment: 'justify',
                columns: [
                    
                        [
                            {
                                image: `${logob64}`,
                                width: 72,
                                alignment: 'left',
                                margin: [0, 0]
                            },
                            {
                                text: [
                                    { text: 'Legajo número: ', bold: true },
                                    '18376. \n',
                                    { text: 'Dirección: ', bold: true },
                                    'La Rioja 2203 - Posadas (3360) - Misiones. \n',
                                    { text: 'Teléfonos: ', bold: true },
                                    '+54 (3764) 222333 / +54 (3764) 424450'
                                ],
                                fontSize: 10,
                                alignment: 'left',
                                width: 320,
                                margin: [0, 0]
                            }
                        ],
                    
                    {
                        text: [
                            {
                                text: `ID PAGO: ${pago.id}`,
                                bold: true
                            },
                            '\n',
                            { text: 'Fecha: ', bold: true },
                            `${new Date(pago.created).toLocaleString('es-AR', {
                                day: 'numeric',
                                month: 'short',
                                year: 'numeric'
                            })} \n`
                        ],
                        fontSize: 10,
                        alignment: 'right',
                        margin: [0, 10]
                    },
                ]
            },



        
            {
                text: [
                    // NOMBRE TITULAR
                    { text: 'Señor (es): ', bold: true },
                    `${venta.expand.cliente.nombre + ' ' + venta.expand.cliente.apellido} \n`,

                    // DNI TITULAR
                    { text: 'DNI: ', bold: true },
                    `${venta.expand.cliente.dni} \n`,

                    // NOMBRE PAQUETE
                    { text: 'Destino: ', bold: true },
                    `${venta.expand.paquete.nombre} \n`,

                    // ORIGEN
                    { text: 'Origen: ', bold: true },
                    'Posadas \n',

                    // FECHA SALIDA
                    { text: 'Fecha de salida: ', bold: true },
                    `${new Date(venta.expand.paquete.fechasalida).toLocaleString('es-AR', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric'
                    })} \n`,

                    // FECHA RETORNO
                    { text: 'Fecha de retorno: ', bold: true },
                    `${new Date(venta.expand.paquete.fecharetorno).toLocaleString('es-AR', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric'
                    })} \n`,

                    // HOTEL
                    { text: 'Hotel: ', bold: true },
                    `${venta.expand.paquete.hotel} \n`,

                    // REGIMEN
                    { text: 'Régimen: ', bold: true },
                    `${venta.expand.paquete.regimen} \n`,

                    // VALOR ENTREGADO
                    { text: 'Recibi la suma de PESOS: ', bold: true },
                    `${new Intl.NumberFormat('es-AR', {
                        style: 'currency',
                        currency: 'ARS'
                    }).format(pago.valor)} \n`,
                    


                    // SALDO ANTES DE LA SALIDA
                    { text: 'Saldo antes de la salida: ', bold: true },
                    `${new Intl.NumberFormat('es-AR', {
                        style: 'currency',
                        currency: 'ARS'
                    }).format(pago.saldo)} \n`,

    



                    { text: 'Total: ', bold: true },
                    `${new Intl.NumberFormat('es-AR', {
                        style: 'currency',
                        currency: 'ARS'
                    }).format(pago.total)} \n`,
                    { text: 'Fecha: ', bold: true },
                    `${new Date(pago.created).toLocaleString('es-AR', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric'
                    })} \n`
                ],
                fontSize: 10,
                alignment: 'left',
                width: 320,
                margin: [0, 0]
            },
            {
                text: [
                    { text: 'Recibí conforme: ', bold: true },
                    '\n',
                    '\n',
                    '\n',
                    '\n',
                    '\n',
                    '\n',
                    '\n',
                    '\n',
                    { text: '____________________________', bold: true },
                    '\n',
                    { text: 'Firma y aclaración', bold: true }
                ],
                fontSize: 10,
                alignment: 'center',
                margin: [0, 0]
            },
            {
                text: [
                    { text: terminos, fontSize: 6, alignment: 'justify' },
                ],
            }

        ]
    };

    pdfMake.createPdf(documentDefinition, null, pdfFonts).print();
}
