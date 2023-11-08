<script>
	import TileVentas from './/TileVentas.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	import '@carbon/charts-svelte/styles.css';
	import { BarChartSimple, DonutChart } from '@carbon/charts-svelte';
	import { Tile, Grid, Row, Column, DatePicker, DatePickerInput } from 'carbon-components-svelte';
	import { Spanish } from 'flatpickr/dist/l10n/es.js';
	import ChartHistogram from 'carbon-pictograms-svelte/lib/ChartHistogram.svelte';

	let dataUltimoMes = data;

	const dataForChart2 = data.ventas.map((venta) => {
		// Verifica si el array de pagos existe y no es null ni undefined
		if (venta.expand.pagos && Array.isArray(venta.expand.pagos)) {
			const group = venta.expand.paquete.nombre;
			// Suma los valores de los pagos o 0 si no hay pagos
			const value = venta.expand.pagos.reduce((total, pago) => total + (pago.valor || 0), 0);
			return { group, value };
		} else {
			// Si no hay array de pagos o no es válido, devuelve 0
			return { group: venta.expand.paquete.nombre, value: 0 };
		}
	});
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
					data={dataForChart2}
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
					data={dataForChart2}
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

<pre class="text-white">{JSON.stringify(dataForChart2, null, 2)}</pre>
