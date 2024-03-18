<script>
	import {
		Button,
	} from 'carbon-components-svelte';
	import { logob64 } from '$lib/logob64';
	import { Printer } from 'carbon-icons-svelte';
	import { onMount } from 'svelte';

	const pdfFonts = {
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

	import pdfMake from 'pdfmake/build/pdfmake';
	export let data;


	const docDefinition = {
		pageMargins: [40, 40],
		pageSize: 'A4',
		content: [
			{
				columns: [
					[
						{
							image: `${logob64}`,
							width: 72, // Ajusta el ancho de la imagen según tus necesidades
							alignment: 'left',
							margin: [0, 0]
						},
						{
							text: [
								{ text: 'Del Valle Turismo.\n', fontSize: 14, bold: true },
								{ text: 'Empresa de viajes y turismo \n', fontSize: 10, bold: true },
								{ text: 'Legajo número: ', bold: true },
								'18376. \n',
								{ text: 'Dirección: ', bold: true },
								'La Rioja 2203 - Posadas (3300) - Misiones. \n',
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
						text: `ID PAQUETE: ${data.paquetes.id.toString().padStart(4, '0').toUpperCase()}`,
						fontSize: 10,
						alignment: 'right',
						margin: [0, 10]
					}
				]
			},

			{
				text: `MANIFIESTO DE PASAJEROS Y TRIPULACIÓN`,
				style: 'header'
			},

			{
				table: {
					headerRows: 1,
					widths: ['*', '*'],
					body: [
						[
							{
								table: {
									headerRows: 1,
									widths: ['*', '*'],
									body: [
										[
											{ text: 'DATOS CONDUCTOR', style: 'tableHeader' },
											{ text: 'DNI', style: 'tableHeader' }
										],
										[`${data.paquetes.chofer1nombre}`, `${data.paquetes.chofer1dni}`],
										[`${data.paquetes.chofer2nombre}`, `${data.paquetes.chofer2dni}`]
									]
								}
							},
							{
								table: {
									headerRows: 1,
									widths: ['*', '*'],
									body: [
										[
											{ text: 'DOMINIO VEHICULO', style: 'tableHeader' },
											{ text: 'INTERNO VEHICULO', style: 'tableHeader' }
										],

										[`${data.paquetes.dominio}`, `${data.paquetes.interno}`]
									]
								}
							}
						]
					]
				}
			},

			{
				table: {
					headerRows: 1,
					widths: ['auto', '*', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto'],
					body: [
						// Encabezado de la tabla
						[
							{ text: 'NRO.', style: 'tableHeader' },
							{ text: 'APELLIDO Y NOMBRE', style: 'tableHeader' },
							{ text: 'NACIMIENTO', style: 'tableHeader' },
							{ text: 'NACIONALIDAD', style: 'tableHeader' },
							{ text: 'OCUPACIÓN', style: 'tableHeader' },
							{ text: 'SEXO', style: 'tableHeader' },
							{ text: 'DNI', style: 'tableHeader' },
							{ text: 'PAIS RESIDENCIA', style: 'tableHeader' }
						],
						// Datos de los pasajeros
						...data.ventas.reduce((rows, venta) => {
							// Agregar cada pasajero como una fila en la tabla
							venta.pasajeros.forEach((pasajero) => {
								rows.push([
									{ text: rows.length + 1, fontSize: 10 }, // Tamaño de fuente de la celda
									{ text: pasajero.apellido + ' ' + pasajero.nombre || '', fontSize: 10 },
									{
										text:
											new Date(pasajero.fechanacimiento)
												.toLocaleDateString('es-ES', {
													day: '2-digit',
													month: '2-digit',
													year: 'numeric'
												})
												.toUpperCase() || '',
										fontSize: 10
									},
									{ text: pasajero.nacionalidad || '', fontSize: 10 },
									{ text: pasajero.ocupacion || '', fontSize: 10 },
									{
										text:
											pasajero.sexo === 'MASCULINO'
												? 'M'
												: (pasajero.sexo === 'FEMENINO' ? 'F' : '') || '',
										fontSize: 10
									},
									{ text: pasajero.dni || '', fontSize: 10 },
									{ text: pasajero.nacionalidad || '', fontSize: 10 }
								]);
							});
							return rows;
						}, [])
					]
				}
			}

			// ...
		],
		styles: {
			tableFont: {
				fontSize: 8 // Ajusta el tamaño de fuente deseado para la tabla
			},

			header: {
				fontSize: 14,
				bold: true,
				alignment: 'center',
				margin: [0, 15, 0, 5]
			},
			// Estilo para el encabezado de la tabla
			tableHeader: {
				bold: true,
				fontSize: 8,
				alignment: 'center',
				fillColor: '#eeeeee' // Color de fondo del encabezado de la tabla
			},
			paragraph: {
				fontSize: 10,
				alignment: 'justify',
				margin: [0, 2, 0, 2]
			},
			bold: {
				bold: true,
				margin: [0, 5, 0, 5]
			},
			list: {
				fontSize: 8,
				margin: [0, 5, 0, 5]
			},
			page: {
				fontSize: 8,
				alignment: 'right'
			}
		}
	};

	onMount(() => {
		pdfMake.createPdf(docDefinition, null, pdfFonts).open();
	});
</script>


<main>
	<h1 class="uppercase">Manifiesto {data.paquetes.nombre}</h1>
</main>
<Button
				size="small"
				kind="tertiary"
				icon={Printer}
				on:click={() => {
					pdfMake.createPdf(docDefinition, null, pdfFonts).open();
				}}>Imprimir</Button
			>
