<script>
	import { enhance, applyAction } from '$app/forms';
	import { invalidateAll } from '$app/navigation';
	import { getImageURL } from '$lib/utils';
	import { Button } from 'carbon-components-svelte';
	import { FileUploaderDropContainer } from 'carbon-components-svelte';

	export let data;
	export let form;
	let loading;

	$: loading = false;
	const showPreview = (event) => {
		const target = event.target;
		const files = target.files;

		if (files.length > 0) {
			const src = URL.createObjectURL(files[0]);
			const preview = document.getElementById('avatar-preview');
			preview.src = src;
		}

	};

	const submitUpdateProfile = () => {
		loading = true;
		return async ({ result }) => {
			switch (result.type) {
				case 'success':
					await invalidateAll();
					break;
				case 'error':
					break;
				default:
					await applyAction(result);
			}
			loading = false;
		};
	};
	
</script>

<div class="flex items-center flex-col md:w-1/2 w-full h-screen">
	<form
		action="?/updateProfile"
		method="POST"
		class="flex flex-col space-y-2 w-full"
		enctype="multipart/form-data"
		use:enhance={submitUpdateProfile}
	>
		<h3 class="text-2xl font-medium dark:text-gray-200">Actualizar perfil</h3>
		<div class="form-control w-full max-w-lg">
			<label for="avatar" class="label font-medium pb-1">
				<span class="label-text dark:text-gray-200">Imagen de perfil</span>
			</label>
			<label for="avatar" class="avatar w-32 rounded-full hover:cursor-pointer">
				<label for="avatar" class="absolute -bottom-0.5 -right-0.5 hover:cursor-pointer" />
				<div class="w-32 rounded-full">
					<img
						src={data.user?.avatar
							? getImageURL(data.user?.collectionId, data.user?.id, data.user?.avatar)
							: `https://ui-avatars.com/api/?name=${data.user?.name}`}
						alt="user avatar"
						id="avatar-preview"
					/>
				</div>
			</label>
			<input
				type="file"
				name="avatar"
				id="avatar"
				value=""
				accept="image/*"
				hidden
				on:change={showPreview}
				disabled={loading}
			/>

			<FileUploaderDropContainer
				name="avatar"
				id="avatar"
				multiple
				disabled={loading}
				labelText="Drag and drop files here or click to upload"
				validateFiles={(files) => {
					return files.filter((file) => file.size < 1_024);
				}}
				on:change={showPreview}
			/>
		</div>
		<input id="name" label="Nombre" value={form?.data?.name ?? data?.user?.name} />
		<div class="w-full max-w-lg pt-3">
			<Button class="w-full max-w-lg" type="submit" disabled={loading}>Actualizar perfil</Button>
		</div>
	</form>
</div>
