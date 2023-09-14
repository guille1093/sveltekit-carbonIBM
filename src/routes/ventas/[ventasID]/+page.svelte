<script>
// @ts-nocheck

	import { Button } from 'carbon-components-svelte';
	import { Printer } from 'carbon-icons-svelte';
	export let data;
	const created = new Date(data.venta.created).toLocaleString('es-AR');
	const updated = new Date(data.venta.updated).toLocaleString('es-AR');
	const createdMes = new Date(data.venta.created).toLocaleString('es-AR', { month: 'long' });
	const createdDia = new Date(data.venta.created).toLocaleString('es-AR', { day: 'numeric' });
	const createdAnio = new Date(data.venta.created).toLocaleString('es-AR', { year: 'numeric' });
	const precio = new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(
		data.venta.paquete.precio
	);
	const precio_total = new Intl.NumberFormat('es-AR', {
		style: 'currency',
		currency: 'ARS'
	}).format(data.venta.valor);

	const fechasalida = new Date(data.venta.paquete.fechasalida).toLocaleString('es-AR', {
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	});

	const fecharetorno = new Date(data.venta.paquete.fecharetorno).toLocaleString('es-AR', {
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	});
	const items = [
		{
			name: 'Nombre y Apellido Titular',
			icon: 'bx-user',
			value: data.venta.cliente.nombre + ' ' + data.venta.cliente.apellido
		},
		{
			name: 'Precio paquete',
			icon: 'bx-dollar',
			value: precio
		},
		{
			name: 'Estado',
			icon: 'bx-check-circle',
			value: data.venta.estado
		},
		{
			name: 'Observaciones',
			icon: 'bx-comment-detail',
			value: data.venta.observaciones
		},
		{
			name: 'Creado',
			icon: 'bx-calendar',
			value: created
		},
		{
			name: 'Modificado',
			icon: 'bx-calendar-edit',
			value: updated
		}
	];

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

	import pdfMake from 'pdfmake/build/pdfmake';

	const docDefinition = {
		pageMargins: [40, 40],
		pageSize: 'A4',
		content: [
			{
				columns: [
					[
						{
							image: `data:image/jpeg;base64,${data.logo}`,
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
						text: `ID CONTRATO: ${data.venta.id.toString().padStart(4, '0').toUpperCase()}`,
						fontSize: 10,
						alignment: 'right',
						margin: [0, 10]
					}
				]
			},

			{
				text: 'CONTRATO DE EXCURSIÓN',
				style: 'header'
			},
			
			{
				text: [
					'En la ciudad de ',
					{ text: 'POSADAS, PROVINCIA DE MISIONES', fontSize: 10, bold: true },
					`, a los `,
					{ text: `${createdDia.toString().toUpperCase()} DÍAS DEL MES DE `, bold: true },
					{ text: `${createdMes.toString().toUpperCase()}`, bold: true },
					` del año `,
					{ text: `${createdAnio.toString().toUpperCase()}`, bold: true },
					`, entre la empresa de viajes y turismo `,
					{ text: 'DEL VALLE TURISMO', bold: true },
					', con domicilio en la calle ',
					{ text: 'LA RIOJA 2203', bold: true },
					' de la ciudad de Posadas, Provincia de Misiones, y la parte contratante el Sr/a ',
					{
						text: `${data.venta.cliente.nombre
							.toString()
							.toUpperCase()} ${data.venta.cliente.apellido.toString().toUpperCase()}`,
						bold: true
					},
					`, con DNI N° ${data.venta.cliente.dni.toString().toUpperCase()}.`
				],
				style: 'paragraph'
			},
			{
				text: [
					`Contrata una excursión para ${data.venta.cant_personas
						.toString()
						.toUpperCase()} persona/s. El precio es por persona en habitaciones dobles, triples o cuádruples, de `,
					{ text: `${precio.toString().toUpperCase()}`, bold: true },
					` con el régimen de `,
					{ text: `${data.venta.paquete.regimen.toString().toUpperCase()}`, bold: true },
					'. Estando la salida prevista para el día ',
					{ text: `${fechasalida.toString().toUpperCase()}`, bold: true },
					' y el regreso para el día ',
					{ text: `${fecharetorno.toString().toUpperCase()}`, bold: true },
					` por ${data.venta.paquete.cant_noches
						.toString()
						.toUpperCase()} noches y ${data.venta.paquete.cant_dias
						.toString()
						.toUpperCase()} días. El precio total de la excursión es de `,
					{ text: `${precio_total.toString().toUpperCase()}`, bold: true },
					'.'
				],
				style: 'paragraph'
			},
			{
				text: 'Incluye:',
				style: 'bold'
			},
			{
				ul: [
					'Todos los servicios que estén expresamente detallados en el programa elegido.',
					'No Incluye: Extras en los hoteles, lavado, planchado, llamadas telefónicas, entradas a los parques y complejos turísticos, así como cualquier otro gasto de carácter personal. El organizador no se hace responsable por problemas de salud en general que padezca el viajero en el transcurso de la excursión, pudiendo este contratar, como servicio adicional, una asistencia de salud a su exclusivo cargo.',
					'Traslado: Desde La Empresa Turismo Valle Hermoso al destino elegido y viceversa, en ómnibus o minibús acondicionado para viajes especiales de larga distancia, provisto con Aire Acondicionado, TV, Video, butacas reclinables y/o semi cama, y coordinación permanente.',
					'Alojamiento: De acuerdo a la categoría del hotel según el programa elegido por el/los pasajeros.',
					'Responsabilidad: El pasajero cuenta con seguro de responsabilidad civil durante el viaje a cargo de la Empresa transportadora. El operador Turismo Valle Hermoso declina toda responsabilidad por cualquier daño o inconveniente que el/los pasajeros o sus pertenencias pudieran sufrir por huelgas, accidentes y sus consecuencias, enfermedades, robos o pérdidas o daños de equipajes u objetos personales, sean cuales fueren sus causas durante los días de la excursión contratada.',
					'Documentación: El operador Turismo Valle Hermoso declina toda responsabilidad en caso de ser rechazado por las autoridades Policiales, Migratorias y Aduaneras. Cualquier gasto que se origine correrá por cuenta del pasajero. En este caso, se aplicarán las condiciones establecidas para anulaciones o desistimiento voluntario sin derecho a ninguna indemnización.',
					'El pasajero deberá ir provisto de: DNI, Cédula de la Policía Federal o Pasaporte, según corresponda. ARGENTINOS CON DOBLE CIUDADANÍA deberán tener pasaporte argentino válido. EXTRANJEROS RESIDENTES EN EL PAÍS deben presentar el pasaporte del país de origen, cédula de identidad y visado si fuese necesario.',
					'DERECHO DE PERMANENCIA: El operador Turismo Valle Hermoso se reserva el derecho de hacer abandonar el tour en cualquier circunstancia o lugar a toda aquella persona que, por su conducta o modo de obrar, cause malestar al grupo y ponga en peligro el normal desarrollo de la excursión. Esta persona no tendrá derecho alguno a exigir indemnización por los servicios no utilizados.',
					'Cantidad Mínima: El operador Turismo Valle Hermoso se reserva el derecho de cancelar algunas salidas establecidas cuando no se complete la cantidad mínima de (35) treinta y cinco personas en ómnibus o en minibús (17) pasajeros inscritos. En este caso, se les reintegrará la totalidad del dinero abonado hasta la fecha, sin ningún tipo de interés u otro tipo de ajuste. La empresa comunicará 5 (cinco) días antes de la salida la suspensión del viaje.',
					'Cancelaciones: Una vez confirmados los servicios, la cancelación de los mismos sufrirá una retención del 10% del total de la excursión si esta se produce con una anticipación de 20 días o más a la fecha de salida. Si la cancelación se realiza entre 20 días y 10 días antes, la retención será del 20%. En caso de cancelación con menos de 10 días de anticipación, la retención será del 50% del valor total de la excursión. Si se produce una cancelación en menos de 5 (cinco) días, la retención será del 100%. Como alternativa, se podrá ceder o transferir a otra persona, con la condición de que no esté inscrita, o la Empresa otorgará una nota de crédito para otra excursión futura.',
					'COSTO DE LA EXCURSIÓN: El precio está expresado en dólares estadounidenses y está sujeto a modificación según la cotización del día. El costo no sufrirá variación una vez abonada la totalidad de la excursión.',
					'DE CONOCIMIENTO DEL PASAJERO: El simple hecho de inscribirse para tomar parte en los viajes detallados en el presente folleto implica la total conformidad, aceptación y conocimiento de todas y cada una de las condiciones generales mencionadas anteriormente. La Empresa Turismo Valle Hermoso.'
				],
				style: 'list'
			},
			{
				text: 'Observaciones:',
				style: 'bold'
			},
			{
				text: data.venta.observaciones,
				style: 'paragraph'
			},
			{
				text: 'Página 1/1',
				style: 'page'
			}
		],
		styles: {
			header: {
				fontSize: 14,
				bold: true,
				alignment: 'center',
				margin: [0, 15, 0, 5]
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
</script>



<Button
	size="small"
	tooltipPosition="right"
	tooltipAlignment="end"
	iconDescription="Generar PDF"
	icon={Printer}
	on:click={() => {
		pdfMake.createPdf(docDefinition, null, pdfFonts).open();
	}}
/>

<div class="min-h-screen">
	<section>
		<div
			class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6"
		>
			<section class="mb-32">
				<div class="block rounded-lg shadow-lg">
					<div class="flex flex-wrap w-full items-center">
						<div class="grow-0 shrink-0 basis-auto w-full lg:w-8/12 xl:w-[800px]">
							<div class="px-6 py-12 md:px-12">
								<h2 class="text-3xl font-bold mb-6 pb-2">
									<i class="bx bx-venta text-blue-600 mr-2" /><strong>VENTA </strong>
									{data.venta.id}
								</h2>
								<p class="mb-6 pb-2">
									{data.venta.observaciones}
								</p>
								<ul class="space-y-5 my-7">
									{#each items as item}
										<li class="flex space-x-3">
											<!-- Icon -->
											<i class="bx text-blue-600 {item.icon}" />
											<span class=""><strong>{item.name}:</strong> {item.value}</span>
										</li>
									{/each}
									<!-- pasajeros -->
									{#each data.venta.pasajeros as pasajero}
										<li class="flex space-x-3">
											<!-- Icon -->
											<i class="bx text-blue-600 bx-user" />
											<span class=""><strong>Pasajero:</strong> {pasajero}</span>
										</li>
									{/each}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	</section>

	<section class="page">
		<div class="max-w-5xl mx-auto py-8 bg-white text-black">
			<article class="overflow-hidden">
				<div class="bg-[white] rounded-b-md">
					<div class="px-9 flex flex-col">
						<div class="text-slate-700 top-0">
							<div class="flex flex-row justify-between">
								<div class="justify-end">
									<p class="uppercase"><strong>CONTRATO NRO. </strong>{data.venta.id}</p>
								</div>
							</div>
						</div>
					</div>

					<div class="flex flex-row justify-center px-9 py-9">
						<h1 class="underline text-3xl font-bold">CONTRATO DE EXCURSIÓN</h1>
					</div>

					<p class="px-9 tracking-widest text-justify">
						En la ciudad de <strong class="uppercase tracking-tight"
							>Posadas, Provincia de Misiones,</strong
						>
						a los <strong class="uppercase tracking-tight">{createdDia}</strong>
						días del mes de <strong class="uppercase tracking-tight">{createdMes}</strong> del año
						<strong class="uppercase tracking-tight">{createdAnio}</strong>, entre la empresa de
						viajes y turismo <strong class="">DEL VALLE TURISMO</strong>, con domicilio en la calle
						<strong class="uppercase tracking-tight">La Rioja 2203</strong> de la ciudad de
						<strong class="uppercase tracking-tight">Posadas, Provincia de Misiones,</strong>
						y la parte contratante el Sr/a
						<strong class="uppercase tracking-tight">
							{data.venta.cliente.nombre}
							{data.venta.cliente.apellido}
						</strong>, con DNI N°
						<strong class="uppercase tracking-tight"> {data.venta.cliente.dni} </strong>. <br />
						Contrata una excursión para
						<strong class="uppercase tracking-tight"> {data.venta.cant_personas} </strong> persona/s
						<strong class="uppercase tracking-tight"> {data.venta.cant_personas} </strong>
						El precio es por persona en habitaciones dobles, triples o cuádruples, de
						<strong class="uppercase tracking-tight"> {precio} </strong>
						con el regimen de
						<strong class="uppercase tracking-tight">{data.venta.paquete.regimen} </strong>. <br />
						Estando la salida prevista para el día
						<strong class="uppercase tracking-tight"> {fechasalida} </strong> y el regreso para el
						día <strong class="uppercase tracking-tight"> {fecharetorno} </strong>
						por <strong class="uppercase tracking-tight"> {data.venta.paquete.cant_noches} </strong>
						noches y
						<strong class="uppercase tracking-tight"> {data.venta.paquete.cant_dias} </strong>
						días. El precio total de la excursión es de
						<strong class="uppercase tracking-tight"> {precio_total} </strong>. <br />
						<strong class="uppercase font-bold">observaciones:</strong>
						{data.venta.observaciones}
						<br />
					</p>
				</div>
			</article>
		</div>
	</section>
	<!--	nro pagina 1/1-->
</div>
