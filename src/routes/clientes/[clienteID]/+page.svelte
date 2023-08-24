<script>
	import { OrderedList, ListItem, Link } from 'carbon-components-svelte';
	import { UserProfile } from 'carbon-icons-svelte';
	import {
		StructuredList,
		StructuredListHead,
		StructuredListRow,
		StructuredListCell,
		StructuredListBody,
		Tile
	} from 'carbon-components-svelte';
	export let data;
	const tableitems = [
		{
			title: 'Nombres',
			value: data.cliente.nombre
		},
		{
			title: 'Apellido',
			value: data.cliente.apellido
		},
		{
			title: 'DNI',
			value: data.cliente.dni
		},
		{
			title: 'Sexo',
			value: data.cliente.sexo
		},
		{
			title: 'Fecha nacimiento',
			value: new Date(data.cliente.fechanacimiento).toLocaleDateString('es-AR', {
				year: 'numeric',
				month: 'long',
				day: 'numeric'
			})
		},
		{
			title: 'Domicilio',
			value: data.cliente.domicilio
		},
		{
			title: 'Teléfono',
			value: data.cliente.telefono
		},
		{
			title: 'Email',
			value: data.cliente.email
		},
		{
			title: 'Ocupación',
			value: data.cliente.ocupacion
		},
		{
			title: 'Nacionalidad',
			value: data.cliente.nacionalidad
		},
		{
			title: 'Lugar ascenso',
			value: data.cliente.lugarascenso
		},
		{
			title: 'Nombre madre',
			value: data.cliente.nombremadre
		},
		{
			title: 'Apellido madre',
			value: data.cliente.apellidomadre
		},
		{
			title: 'Observaciones',
			value: data.cliente.observaciones
		}
	];
</script>

<h1>Cliente: {data.cliente.nombre} {data.cliente.apellido}</h1>
<Tile>
	<StructuredList condensed>
		<StructuredListBody>
			{#each tableitems as items}
				<StructuredListRow>
					<StructuredListCell noWrap><strong>{items.title}:</strong></StructuredListCell>
					<StructuredListCell>{items.value}</StructuredListCell>
				</StructuredListRow>
			{/each}
		</StructuredListBody>
	</StructuredList>
</Tile>
