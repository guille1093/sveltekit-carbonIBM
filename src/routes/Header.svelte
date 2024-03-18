<script>
	import '../app.postcss';
	import 'carbon-components-svelte/css/g100.css';
	import {
		Header,
		HeaderUtilities,
		HeaderAction,
		HeaderPanelLinks,
		HeaderPanelDivider,
		SkipToContent,
		Button,
	} from 'carbon-components-svelte';
	import Logout from 'carbon-icons-svelte/lib/Logout.svelte';
	import UserAvatarFilledAlt from 'carbon-icons-svelte/lib/UserAvatarFilledAlt.svelte';
	import { getImageURL } from '$lib/utils';
	import Notifications from '$lib/components/Notifications.svelte';

	export let data;

	let isSideNavOpen = false;
	let isOpen1 = false;
</script>

	<Header
		href="/"
		uiShellAriaLabel="Del Valle"
		company="Del Valle"
		platformName="Empresa de turismo"
		bind:isSideNavOpen
	>
		<svelte:fragment slot="skip-to-content">
			<SkipToContent />
		</svelte:fragment>

		<HeaderUtilities>
			<HeaderAction
				aria-label="User Avatar"
				bind:isOpen={isOpen1}
				icon={UserAvatarFilledAlt}
				closeIcon={UserAvatarFilledAlt}
			>
				<HeaderPanelLinks>
					<HeaderPanelDivider>Cuenta</HeaderPanelDivider>
					<div class="w-full flex flex-col items-center justify-center">
						<img
							class="w-32 rounded-full"
							src={data.user?.avatar
								? getImageURL(data.user?.collectionId, data.user?.id, data.user?.avatar)
								: `https://ui-avatars.com/api/?name=${data.user?.name}`}
							alt="user avatar"
							id="avatar-preview"
						/>

						<p>{data?.user?.username}</p>
						<div />
						<br />
						<h4>{data?.user?.name} {data?.user?.apellido}</h4>
						<form action="/logout" method="POST" class="mt-16 w-full">
							<Button type="submit" icon={Logout} class="w-full">Cerrar sesión</Button>
						</form>
					</div></HeaderPanelLinks
				>
			</HeaderAction>
			<Notifications />
		</HeaderUtilities>
	</Header>

