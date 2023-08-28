<script>
	import { enhance } from '$app/forms';
	import { TextInput, PasswordInput, FluidForm, Button } from 'carbon-components-svelte';
	import { Login } from 'carbon-icons-svelte';
	export let form;
	let loading = false;
	import {Modal } from 'carbon-components-svelte';

	let open = false;

	const submitLogin = () => {
		loading = true;
		return async ({ result, update }) => {
			switch (result.type) {
				case 'success':
					await update();
					break;
				case 'invalid':
					open = true;
					await update();
					break;
				case 'error':
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
	let form;
</script>

<div
	class="bg-cover z-0"
	style="background-image: url('https://images.unsplash.com/photo-1672661164570-d5e7e0890a69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80');"
>
	<Modal
		alert
		bind:open
		modalHeading="Error"
		primaryButtonText="Aceptar"
		secondaryButtonText="Cancel"
		on:click:button--secondary={() => (open = false)}
		on:open
		on:close
		on:submit
	>
		<p>Credenciales invalidas.</p>
	</Modal>
	<div class="min-h-screen sm:flex sm:flex-row mx-0 justify-center items-center">
		<div class="bg-gray-200 p-12">
			<a href="/" class="text-2xl font-semibold flex justify-center items-center p-3">
				<img src="/images/logo.png" height="50px" width="200px" alt="Logo" />
			</a>
			<div class="self-start hidden lg:flex flex-col">
				<h1 class=" text-black">Empresa de viajes y turismo Del Valle.</h1>
				<p class="text-2xl text-gray-900">Sistema de administración y control WEB.</p>
			</div>

			<div />
			<div class="w-full mt-4">
				<form bind:this={form} action="?/login" method="POST" use:enhance class="">
					<TextInput
						id="email"
						labelText="Nombre de usuario"
						placeholder="Ingrese su nombre de usuario"
						invalid={form?.errors?.email}
						disabled={loading}
					/>

					<PasswordInput
						id="password"
						labelText="Contraseña"
						placeholder="Ingrese su contraseña"
						invalid={form?.errors?.password}
						disabled={loading}
					/>
					<div class="flex w-full justify-end">
						<Button type="submit" icon={Login} disabled={loading}>Iniciar sesión</Button>
					</div>

					{#if form?.notVerified}
						<div class="alert alert-error shadow-lg w-full max-w-lg">
							<div>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="stroke-current flex-shrink-0 h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									><path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
									/></svg
								>
								<span
									>Se cuenta debe estar habilitada para poder iniciar sesión.<br /> Comuniquese con un
									administrador para habilitarla</span
								>
							</div>
						</div>
					{/if}
				</form>
			</div>
		</div>
	</div>
</div>
