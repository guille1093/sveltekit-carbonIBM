<script>
	import {
		Form,
		FormGroup,
		Button,
		TextInput,
		DatePickerInput,
		DatePicker,
		Tile,
		ToastNotification
	} from 'carbon-components-svelte';
	import Add from 'carbon-icons-svelte/lib/Add.svelte';
	$: userName = '';
	$: isValid = true;
	$: validationMessage = '';
	$: isFormValid = isValid && userName.length > 0;

	const validateUserName = () => {
		if (userName.length < 3) {
			isValid = false;
			validationMessage = 'El nombre debe contener al menos 3 letras.';
		} else if (!/^[a-zA-Z]+$/.test(userName)) {
			isValid = false;
			validationMessage = 'El nombre solo puede contener letras.';
		} else {
			isValid = true;
			validationMessage = '';
		}
	};
</script>

<Tile class="w-[320px]">
	<h1 class="p-4">Personas</h1>
	<Form on:submit method="post" action="?/create">
		<FormGroup legendText="Nombres">
			<TextInput
				bind:value={userName}
				name="nombre"
				on:keyup={validateUserName}
				invalid={!isValid}
				invalidText={validationMessage}
				labelText=""
				placeholder="Ingrese el nombre"
			/>
		</FormGroup>

		<FormGroup legendText="Fecha Nacimiento">
			<DatePicker datePickerType="single" dateFormat="d/m/Y" locale="es" on:change>
				<DatePickerInput name="nacimiento" placeholder="dd/mm/yyyy" />
			</DatePicker>
		</FormGroup>
		<Button type="submit" disabled={!isFormValid} icon={Add}>Crear</Button>
	</Form>
</Tile>

<ToastNotification
	class="fixed hidden"
	lowContrast
	kind="success"
	title="Operación exitosa."
	subtitle="Cliente guardado."
	caption={new Date().toLocaleString()}
/>
