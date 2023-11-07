<script>
	import { enhance } from '$app/forms';
	import { TextInput, PasswordInput, Button, Form, FormGroup } from 'carbon-components-svelte';
	import { Login } from 'carbon-icons-svelte';
	import { fly, slide } from 'svelte/transition';
	export let form;
	let loading = false;
	 import { ToastNotification } from "carbon-components-svelte";

	let open = false;

	const submitLogin = () => {
		loading = true;
		return async ({ result, update }) => {
			switch (result.type) {
				case 'success':
					await update();
					break;
				case 'invalid':
					await new Promise((resolve) => setTimeout(resolve, 3000));
					open = true;
					await update();
					break;
				case 'error':
					await new Promise((resolve) => setTimeout(resolve, 3000));
					open = true;
					break;
				default:
					await update();
			}
			loading = false;
		};
	};

	/**
	 * @type {HTMLFormElement}
	 */

	let loginform;
</script>


			{#if open}
<div in:fly={{ y: 100 }} out:slide class="z-0 absolute inset-0">
				<ToastNotification
					kind="error"
					title="Error de autenticación"
					subtitle="Credenciales incorrectas"
					caption={new Date().toLocaleString()}
					fullWidth
					on:close={() => (open = false)}
				/>
			</div>
{/if}		

<div
	class="container max-w-md mx-auto xl:max-w-3xl h-full flex justify-center mt-16 sm:mt-32 shadow-xl shadow-neutral-800"
>

	<div class="hidden xl:block xl:w-1/2">
		<img
			class="object-cover object-center"
			src="https://images.unsplash.com/photo-1537100861360-bf6be4ddeac4?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D"
			alt="una playa xd"
		/>
	</div>
	<div class="w-full xl:w-1/2 p-8">
		<h1>Del Valle Turismo</h1>
		<p>Empresa de viajes y Turismo</p>
		<h4 class="mt-14 mb-4">Inicie sesión en su cuenta</h4>
		<form bind:this={loginform} action="?/login" method="POST" use:enhance={submitLogin}>
			<FormGroup legendText="Nombre de usuario">
				<TextInput
					id="email"
					name="email"
					placeholder="Ingrese su nombre de usuario"
					invalid={form?.errors?.email}
					disabled={loading}
				/>
			</FormGroup>

			<FormGroup>
				<PasswordInput
					id="password"
					name="password"
					labelText="Contraseña"
					placeholder="Ingrese su contraseña"
					invalid={form?.errors?.password}
					disabled={loading}
				/>
			</FormGroup>

			<div class="flex w-full justify-end">
				<Button type="submit" icon={Login} disabled={loading} skeleton={loading}
					>Iniciar sesión</Button
				>
			</div>
		</form>
	</div>
</div>
