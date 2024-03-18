//Aqui se generan los comprobantes de pago de las ventas

// Se deben importar las fuentes antes de importar pdfMake
const pdfFonts = {
	// download default Roboto font from cdnjs.com
	Roboto: {
		normal: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.7/fonts/Roboto/Roboto-Regular.ttf',
		bold: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.7/fonts/Roboto/Roboto-Medium.ttf',
		italics: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.7/fonts/Roboto/Roboto-Italic.ttf',
		bolditalics:
			'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.7/fonts/Roboto/Roboto-MediumItalic.ttf'
	}
};

// pdfMake
import pdfMake from 'pdfmake/build/pdfmake';

// Logo en base64 preprocesado
import { logob64 } from './logob64';

let pasajerosTexto = ''; // Mover la inicialización aquí

// Terminos y condiciones
const terminos =
	'CONDICIONES GENERALES: Incluye todos los servicios según como han sido contratados por el/los pasajeros detallados en el programa. \n La Empresa  Del Valle Turismo  declina toda responsabilidad por cualquier daño o inconveniente que las pertenencias del / los pasajeros \n pudieran sufrir por huelgas, accidentes y sus consecuencias, enfermedades, robos, pérdidas o daño de equipajes u objetos personales sean \n cuales fueran, sus causas durante los días de la excursión contratada. \n El Operador Del Valle Turismo  declina toda responsabilidad en caso de ser rechazados por las autoridades migratorias, el ingreso al pais \n del o los pasajeros que no reúnan los requisitos que se exigen para tal fin y correrá por cuenta del pasajero cualquier gasto que se origine \n aplicándose en este coso las condiciones establecidas para anulaciones o desistimiento voluntario. \n La Empresa  Del Valle Turismo  se reserva el derecho de hacer, abandonar el tour en cualquier circunstancia o lugar a toda aquella persona \n que por su modo de obrar cause malestar al grupo y ponga en peligro el normal desarrollo de la excursión, no teniendo esta persona derecho \n alguno a exigir indemnización por los servicios no utilizados. \n La Empresa  Del Valle Turismo  se reserva el derecho de cancelar algunas de las salidas establecidas cuando no se complete cantidad \n mínima de 16 pasajeros inscriptos, reintegrandoles la totalidad del dinero abonado la fecha sin ningún tipo de interés u otro tipo de ajuste, \ncomunicando fehacientemente a los contratantes con 5 días de anticipación a la fecha de salida, quedando de esta forma el organizador \n desligado de toda responsabilidad. \n Una vez confirmado los servicios en forma efectiva, la cancelación de los mismos sufrirá una retención del 10 % del total si esta es produjera \n con una anticipación de 20 días o más a la fecha de salida, menor de 20 días y hasta 10 días, \nla retención será del 20 %, menos de 10 días será del 50 % del valor total de la excursión. \n La excursión estará sujeta a modificación de tarifas sin previo aviso, si así lo requiere el operador de Del Valle Turismo.';

// Contenido del comprobante

// Función para imprimir el comprobante
export function imprimirComp(pago, venta) {
	const pasajeros = (venta) => {
		pasajerosTexto += `${venta.expand.cliente.nombre} ${venta.expand.cliente.apellido}, `;

		if (venta.expand.pasajeros !== undefined) {
			venta.expand.pasajeros.forEach((pasajero) => {
				pasajerosTexto += `${pasajero.nombre} ${pasajero.apellido}, `;
			});
		}

		// Agregar pasajerosTexto al arreglo pasajeros

		const pasajeros = [
			{ text: `Datos del/los pasajeros:`, bold: true },
			{ text: pasajerosTexto, fontSize: 10 }
		];

		return pasajeros;
	};

	const datosPasajeros = pasajeros(venta);
	const datosPasajeros2 = datosPasajeros;
	console.log(datosPasajeros2);

	const tableContent =
		//ORIGINAL
		[
			//Tabla encabezado
			{
				table: {
					widths: ['*', '*'],
					body: [
						[
							[
								{
									columns: [
										{
											image: `${logob64}`,
											width: 72,
											alignment: 'left',
											margin: [0, 0]
										},
										{
											text: 'ORIGINAL',
											fontsize: 16,
											bold: true,
											alignment: 'right',
											margin: [0, 0]
										}
									]
								},
								{
									text: [
										{ text: 'Legajo número: ', bold: true },
										'18376. \n',
										{ text: 'Dirección: \n', bold: true },
										'La Rioja 2203 - Posadas (3300) - Misiones. \n'
									],
									fontSize: 9,
									alignment: 'left',
									margin: [0, 0]
								}
							],

							{
								text: [
									{
										text: `RECIBO N°: ${pago.id} \n`,
										bold: true
									},
									{ text: 'Documento no valido como factura', bold: true },
									'\n',
									{ text: 'Fecha: ', bold: true },
									`${new Date(pago.created).toLocaleString('es-AR', {
										day: 'numeric',
										month: 'short',
										year: 'numeric'
									})} \n`,
									{ text: 'CUIT: ', bold: true },
									'23-17518170-9. \n',
									{ text: 'Teléfonos:\n ', bold: true },
									'+54 (3764) 222333 / +54 (3764) 424450'
								],
								fontSize: 9,
								alignment: 'left',
								margin: [0, 10]
							}
						]
					]
				}
			},

			//Primera tabla
			{
				fontSize: 12,
				table: {
					widths: ['70%', '*'],
					body: [
						[
							//Columna izquierda
							{
								text: [
									// NOMBRE TITULAR
									{ text: 'Señor (es): ', bold: true },
									`${venta.expand.cliente.nombre + ' ' + venta.expand.cliente.apellido} \n`
								]
							},
							//Columna derecha
							{
								text: [
									// DNI TITULAR
									{ text: 'DNI: ', bold: true },
									`${venta.expand.cliente.dni} \n`
								]
							}
						]
					]
				}
			},

			//Segunda tabla
			{
				fontSize: 12,
				table: {
					widths: ['*'],
					body: [
						//Unica columna
						[
							[
								// Datos del/los pasajeros
								{
									text: [
										{ text: 'Datos del/los pasajeros: ', bold: true },
										{ text: pasajerosTexto }
									]
								}
							]
						]
					]
				}
			},

			//Tercera tabla
			{
				fontSize: 12,
				table: {
					widths: ['*'],
					body: [
						[
							[
								// VALOR ENTREGADO
								{
									text: [
										{ text: 'Recibi la suma de PESOS: ', bold: true },
										`${new Intl.NumberFormat('es-AR', {
											style: 'currency',
											currency: 'ARS'
										}).format(pago.valor)} \n`
									]
								}
							]
						]
					]
				}
			},

			//Novena tabla Saldo y total
			{
				fontSize: 12,
				table: {
					widths: ['*', '*'],
					body: [
						[
							// SALDO
							{
								text: [
									{ text: 'Saldo: ', bold: true },
									`${new Intl.NumberFormat('es-AR', {
										style: 'currency',
										currency: 'ARS'
									}).format(pago.saldo)} \n`
								]
							},
							// TOTAL
							{
								text: [
									{ text: 'Total: ', bold: true },
									`${new Intl.NumberFormat('es-AR', {
										style: 'currency',
										currency: 'ARS'
									}).format(pago.total)} \n`
								]
							}
						]
					]
				}
			},

			//Sexta tabla Origen y destino
			{
				fontSize: 12,
				table: {
					widths: ['*', '*'],
					fontSize: 9,
					body: [
						[
							// ORIGEN
							{
								text: [{ text: 'Origen: ', bold: true }, 'Posadas \n']
							},
							// DESTINO
							{
								text: [{ text: 'Destino: ', bold: true }, `${venta.expand.paquete.nombre} \n`]
							}
						]
					]
				}
			},

			//Septima tabla Cantidad de pasajeros y regimen
			{
				fontSize: 12,
				table: {
					widths: ['*', '*'],
					body: [
						[
							// CANTIDAD DE PASAJEROS
							{
								text: [
									{ text: 'Cantidad de pasajeros: ', bold: true },
									`${
										venta.expand.pasajeros === undefined ? 1 : venta.expand.pasajeros.length + 1
									} \n`
								]
							},
							// REGIMEN
							{
								text: [{ text: 'Régimen: ', bold: true }, `${venta.expand.paquete.regimen} \n`]
							}
						]
					]
				}
			},

			//Octava tabla fecha de salida y fecha de retorno
			{
				fontSize: 12,
				table: {
					widths: ['*', '*'],
					body: [
						[
							// FECHA DE SALIDA
							{
								text: [
									{ text: 'Fecha de salida: ', bold: true },
									`${new Date(venta.expand.paquete.fechasalida).toLocaleString('es-AR', {
										day: 'numeric',
										month: 'numeric',
										year: 'numeric'
									})} \n`
								]
							},

							// FECHA DE RETORNO
							{
								text: [
									{ text: 'Fecha de retorno: ', bold: true },
									`${new Date(venta.expand.paquete.fecharetorno).toLocaleString('es-AR', {
										day: 'numeric',
										month: 'numeric',
										year: 'numeric'
									})} \n`
								]
							}
						]
					]
				}
			},

			//Novena tabla Hotel y I.V.A.
			{
				fontSize: 12,
				table: {
					widths: ['*', '*'],
					body: [
						[
							// HOTEL
							{
								text: [{ text: 'Hotel: ', bold: true }, `${venta.expand.paquete.hotel} \n`]
							},
							// I.V.A.
							{
								text: [{ text: 'I.V.A.: ', bold: true }, `Cons. final\n`]
							}
						]
					]
				}
			},

			//Firma y aclaracion

			{
				absolutePosition: {
					x: 165,
					y: 390
				},
				text: [
					{ text: '___________________', bold: true },
					'\n',
					{ text: 'Firma y aclaración', bold: true }
				],
				fontSize: 12
			},
			{
				absolutePosition: {
					x: 45,
					y: 425
				},

				text: [
					{
						text: terminos,
						fontSize: 6,
						alignment: 'justify',
						width: 40
					}
				]
			}
		];

	const content = [
		{
			//Tabla encabezado
			table: {
				heights: [512],
				widths: ['*', '*'],
				body: [
					[
						//ORIGINAL
						tableContent,

						//DUPLICADO
						[
							//Tabla encabezado
							{
								table: {
									widths: ['*', '*'],
									body: [
										[
											[
												{
													columns: [
														{
															image: `${logob64}`,
															width: 72,
															alignment: 'left',
															margin: [0, 0]
														},
														{
															text: 'DUPLICADO',
															fontsize: 16,
															bold: true,
															alignment: 'right',
															margin: [0, 0]
														}
													]
												},

												{
													text: [
														{ text: 'Legajo número: ', bold: true },
														'18376. \n',
														{ text: 'Dirección: \n', bold: true },
														'La Rioja 2203 - Posadas (3300) - Misiones. \n'
													],
													fontSize: 9,
													alignment: 'left',
													margin: [0, 0]
												}
											],

											{
												text: [
													{
														text: `RECIBO N°: ${pago.id} \n`,
														bold: true
													},
													{ text: 'Documento no valido como factura', bold: true },
													'\n',
													{ text: 'Fecha: ', bold: true },
													`${new Date(pago.created).toLocaleString('es-AR', {
														day: 'numeric',
														month: 'short',
														year: 'numeric'
													})} \n`,
													{ text: 'CUIT: ', bold: true },
													'23-17518170-9. \n',
													{ text: 'Teléfonos: \n', bold: true },
													'+54 (3764) 222333 / +54 (3764) 424450'
												],
												fontSize: 9,
												alignment: 'left',
												margin: [0, 10]
											}
										]
									]
								}
							},

							//Primera tabla
							{
								fontSize: 12,
								table: {
									widths: ['70%', '*'],
									body: [
										[
											//Columna izquierda
											{
												text: [
													// NOMBRE TITULAR
													{ text: 'Señor (es): ', bold: true },
													`${venta.expand.cliente.nombre + ' ' + venta.expand.cliente.apellido} \n`
												]
											},
											//Columna derecha
											{
												text: [
													// DNI TITULAR
													{ text: 'DNI: ', bold: true },
													`${venta.expand.cliente.dni} \n`
												]
											}
										]
									]
								}
							},

							//Segunda tabla
							{
								fontSize: 12,
								table: {
									widths: ['*'],
									body: [
										//Unica columna
										[
											[
												// Datos del/los pasajeros
												{
													text: [
														{ text: 'Datos del/los pasajeros: ', bold: true },
														{ text: pasajerosTexto }
													]
												}
											]
										]
									]
								}
							},

							//Tercera tabla
							{
								fontSize: 12,
								table: {
									widths: ['*'],
									body: [
										[
											[
												// VALOR ENTREGADO
												{
													text: [
														{ text: 'Recibi la suma de PESOS: ', bold: true },
														`${new Intl.NumberFormat('es-AR', {
															style: 'currency',
															currency: 'ARS'
														}).format(pago.valor)} \n`
													]
												}
											]
										]
									]
								}
							},

							//Novena tabla Saldo y total
							{
								fontSize: 12,
								table: {
									widths: ['*', '*'],
									body: [
										[
											// SALDO
											{
												text: [
													{ text: 'Saldo: ', bold: true },
													`${new Intl.NumberFormat('es-AR', {
														style: 'currency',
														currency: 'ARS'
													}).format(pago.saldo)} \n`
												]
											},
											// TOTAL
											{
												text: [
													{ text: 'Total: ', bold: true },
													`${new Intl.NumberFormat('es-AR', {
														style: 'currency',
														currency: 'ARS'
													}).format(pago.total)} \n`
												]
											}
										]
									]
								}
							},

							//Sexta tabla Origen y destino
							{
								fontSize: 12,
								table: {
									widths: ['*', '*'],
									fontSize: 9,
									body: [
										[
											// ORIGEN
											{
												text: [{ text: 'Origen: ', bold: true }, 'Posadas \n']
											},
											// DESTINO
											{
												text: [
													{ text: 'Destino: ', bold: true },
													`${venta.expand.paquete.nombre} \n`
												]
											}
										]
									]
								}
							},

							//Septima tabla Cantidad de pasajeros y regimen
							{
								fontSize: 12,
								table: {
									widths: ['*', '*'],
									body: [
										[
											// CANTIDAD DE PASAJEROS
											{
												text: [
													{ text: 'Cantidad de pasajeros: ', bold: true },
													`${
														venta.expand.pasajeros === undefined
															? 1
															: venta.expand.pasajeros.length + 1
													} \n`
												]
											},
											// REGIMEN
											{
												text: [
													{ text: 'Régimen: ', bold: true },
													`${venta.expand.paquete.regimen} \n`
												]
											}
										]
									]
								}
							},

							//Octava tabla fecha de salida y fecha de retorno
							{
								fontSize: 12,
								table: {
									widths: ['*', '*'],
									body: [
										[
											// FECHA DE SALIDA
											{
												text: [
													{ text: 'Fecha de salida: ', bold: true },
													`${new Date(venta.expand.paquete.fechasalida).toLocaleString('es-AR', {
														day: 'numeric',
														month: 'numeric',
														year: 'numeric'
													})} \n`
												]
											},

											// FECHA DE RETORNO
											{
												text: [
													{ text: 'Fecha de retorno: ', bold: true },
													`${new Date(venta.expand.paquete.fecharetorno).toLocaleString('es-AR', {
														day: 'numeric',
														month: 'numeric',
														year: 'numeric'
													})} \n`
												]
											}
										]
									]
								}
							},

							//Novena tabla Hotel y I.V.A.
							{
								fontSize: 12,
								table: {
									widths: ['*', '*'],
									body: [
										[
											// HOTEL
											{
												text: [{ text: 'Hotel: ', bold: true }, `${venta.expand.paquete.hotel} \n`]
											},
											// I.V.A.
											{
												text: [{ text: 'I.V.A.: ', bold: true }, `Cons. final\n`]
											}
										]
									]
								}
							},

							//Firma y aclaracion

							{
								absolutePosition: {
									x: 560,
									y: 390
								},
								text: [
									{ text: '___________________', bold: true },
									'\n',
									{ text: 'Firma y aclaración', bold: true }
								],
								fontSize: 12
							},

							{
								absolutePosition: {
									x: 425,
									y: 425
								},

								text: [
									{
										text: terminos,
										fontSize: 6,
										alignment: 'justify',
										width: 40
									}
								]
							}
						]
					]
				]
			}
		}
	];

	// Definición del documento
	const documentDefinition = {
		pageSize: 'A4',
		pageOrientation: 'landscape',
		content: content
	};

	pdfMake.createPdf(documentDefinition, null, pdfFonts).open();
}
