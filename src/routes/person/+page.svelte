<script>
	import {
		Form,
		FormGroup,
		Button,
		TextInput,
		DatePickerInput,
		DatePicker,
		Tile
	} from 'carbon-components-svelte';
    import Add from "carbon-icons-svelte/lib/Add.svelte";
</script>

<Tile class="w-[320px]">
	<h1 class="p-4">Personas</h1>
	<Form on:submit method="post" action="?/create">
		<FormGroup legendText="Nombres">
			<TextInput type="text" name="nombre" placeholder="Nombre" />
			<TextInput type="text" name="apellido" placeholder="Apellido" />
		</FormGroup>
		<FormGroup legendText="Fecha Nacimiento">
			<DatePicker datePickerType="single" dateFormat="d/m/Y" locale="es" on:change>
				<DatePickerInput name="nacimiento" placeholder="dd/mm/yyyy" />
			</DatePicker>
		</FormGroup>
		<Button type="submit" icon={Add}>Crear</Button>
	</Form>
</Tile>
