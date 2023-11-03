<script>
	import TileVentas from './/TileVentas.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	import '@carbon/charts-svelte/styles.css';
	import { BarChartSimple, DonutChart } from '@carbon/charts-svelte';
	import { Tile, Grid, Row, Column, DatePicker, DatePickerInput } from 'carbon-components-svelte';
	import { Spanish } from 'flatpickr/dist/l10n/es.js';
	import ChartHistogram from 'carbon-pictograms-svelte/lib/ChartHistogram.svelte';

	const dataForChart = getDataForChart(data.ventas);

	let dataUltimoMes = data;

	dataUltimoMes.ventas.forEach((venta) => {
		if (venta.expand.pagos !== (undefined || null)) {
			venta.expand.pagos.forEach((pago) => {
				let fecha = new Date(pago.created);
				let date = new Date();
				date.setDate(0);
				date.setHours(0, 0, 0, 0);
				date.setMonth(date.getMonth() - 2);
				if (fecha < date) {
					dataUltimoMes = dataUltimoMes.ventas.filter((venta) => venta !== venta);
				}
			});
		}
	});

	function getDataForChart(ventas) {
		const paquetes = getPaquetes(ventas);
		const dataForChart = getValuePaquetes(ventas, paquetes);
		return dataForChart;
	}

	function getPaquetes(ventas) {
		const paquetes = [];
		ventas.forEach((paquete) => {
			paquetes.push(paquete.expand.paquete.nombre + ' ' + paquete.expand.paquete.fechasalida);
		});
		return [...new Set(paquetes)];
	}

	function getValuePaquetes(ventas, paquetes) {
		const dataForChart = [];
		paquetes.forEach((paquete) => {
			let valor = 0;
			ventas.forEach((venta) => {
				if (venta.expand.paquete.nombre + ' ' + venta.expand.paquete.fechasalida === paquete) {
					if (venta.expand.pagos !== (undefined || null)) {
						venta.expand.pagos.forEach((pago) => {
							valor += pago.valor;
						});
					}
				}
			});
			dataForChart.push({ group: paquete, value: valor });
		});
		return dataForChart;
	}
</script>

<Grid>
	<Row>
		<Column>
			<h1>Reportes</h1>
			<p>Reportes de ventas y pagos</p>
		</Column>
		<Column class="flex justify-end"><ChartHistogram /></Column>
	</Row>

	<Row class="mt-8">
		<Column>
			<h4>Registros de pagos</h4>
		</Column>
	</Row>

	<Row class="mb-8">
		<Column>
			<TileVentas titulo="Último mes" data={dataUltimoMes} />
		</Column>

		<Column>
			<TileVentas titulo="Diario" {data} />
		</Column>

		<Column>
			<TileVentas titulo="Última semana" {data} />
		</Column>
	</Row>

	<Row class="mt-8">
		<Column>
			<h4>Gráficos de ventas</h4>
		</Column>
	</Row>

	<Row>
		<Column>
			<Tile>
				<Row>
					<Column>
						<h5>Rango de fechas</h5>
					</Column>
					<Column>
						<DatePicker
							datePickerType="range"
							dateFormat="d/m/Y"
							locale={Spanish}
							valueFrom={new Date().toISOString()}
							valueTo={new Date().toISOString()}
							on:change
						>
							<DatePickerInput placeholder="dd/mm/aaa" name="fechasalida" />
							<DatePickerInput placeholder="dd/mm/aaa" name="fecharetorno" />
						</DatePicker>
					</Column>
				</Row>

				<DonutChart
					data={dataForChart}
					options={{
						theme: 'g100',
						title: 'Proporción del total de pagos por paquete',
						height: '400px',
						resizable: true,
						donut: {
							center: {
								label: 'Total ARS'
							}
						}
					}}
				/>
			</Tile>
		</Column>

		<Column>
			<Tile>
				<Row>
					<Column>
						<h5>Rango de fechas</h5>
					</Column>
					<Column>
						<DatePicker
							datePickerType="range"
							dateFormat="d/m/Y"
							locale={Spanish}
							valueFrom={new Date().toISOString()}
							valueTo={new Date().toISOString()}
							on:change
						>
							<DatePickerInput placeholder="dd/mm/aaa" name="fechasalida" />
							<DatePickerInput placeholder="dd/mm/aaa" name="fecharetorno" />
						</DatePicker>
					</Column>
				</Row>
				<BarChartSimple
					data={dataForChart}
					options={{
						theme: 'g100',
						title: 'Pagos por paquete',
						height: '400px',
						axes: {
							left: { mapsTo: 'value' },
							bottom: { mapsTo: 'group', scaleType: 'labels' }
						}
					}}
				/>
			</Tile>
		</Column>
	</Row>
</Grid>
