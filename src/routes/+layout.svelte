<script>
	import '../app.postcss';
	import 'carbon-components-svelte/css/g100.css';
	import { page } from '$app/stores';
	import {
		Header,
		HeaderUtilities,
		HeaderAction,
		HeaderPanelLinks,
		HeaderPanelDivider,
		SideNav,
		SideNavItems,
		SideNavLink,
		SkipToContent,
		Content,
		Button,
		Breakpoint,
		Grid,
		Row,
		Column
	} from 'carbon-components-svelte';
	import Logout from 'carbon-icons-svelte/lib/Logout.svelte';
	import UserAvatarFilledAlt from 'carbon-icons-svelte/lib/UserAvatarFilledAlt.svelte';
	import Group from 'carbon-icons-svelte/lib/Group.svelte';
	import FlightInternational from 'carbon-icons-svelte/lib/FlightInternational.svelte';
	import Hotel from 'carbon-icons-svelte/lib/Hotel.svelte';
	import Currency from 'carbon-icons-svelte/lib/Currency.svelte';
	import ChartColumnTarget from 'carbon-icons-svelte/lib/ChartColumnTarget.svelte';
	import ChangeCatalog from 'carbon-icons-svelte/lib/ChangeCatalog.svelte';
	import IbmCloudAppId from 'carbon-icons-svelte/lib/IbmCloudAppId.svelte';
	import Home from 'carbon-icons-svelte/lib/Home.svelte';
	import Notification from 'carbon-icons-svelte/lib/Notification.svelte';
	import Lock_01 from 'carbon-pictograms-svelte/lib/Lock_01.svelte';
	import { getImageURL } from '$lib/utils';

	export let data;

	let isSideNavOpen = false;
	let isOpen1 = false;
	let size;

	//Variables
	const navigation = [
		{
			title: 'Clientes',
			href: '/clientes',
			icon: Group
		},
		{
			title: 'Paquetes',
			href: '/paquetes',
			icon: FlightInternational
		},
		{
			title: 'Hoteles',
			href: '/hotels',
			icon: Hotel
		},
		{
			title: 'Ventas',
			href: '/ventas',
			icon: Currency
		},

		{
			title: 'Reportes',
			href: '/reportes',
			icon: ChartColumnTarget
		},

		{
			title: 'Auditoría',
			href: '/audit',
			icon: ChangeCatalog
		},

		{
			title: 'Cuentas',
			href: '/users',
			icon: IbmCloudAppId
		}
	];
</script>

<Breakpoint bind:size on:change />

<svelte:head>
	<title>Del Valle Turismo</title>
	<meta
		name="description"
		content="Software de gestión y control de ventas de paquetes turisticos"
	/>
</svelte:head>

{#if !data.user}
	<slot />
{:else}
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
			<HeaderAction aria-label="Notificaciones" icon={Notification} closeIcon={Notification}>
				<HeaderPanelLinks>
					<HeaderPanelDivider>Notificaciones</HeaderPanelDivider>
					<div class="w-full flex flex-col items-center justify-center">
						Aún no posee notificaciones
					</div></HeaderPanelLinks
				>
			</HeaderAction>
		</HeaderUtilities>
	</Header>
	<SideNav bind:isOpen={isSideNavOpen} rail aria-hidden="false" ariaLabel="sidebar">
		<SideNavItems>
			<SideNavLink
				href="/"
				text="Inicio"
				icon={Home}
				isSelected={$page.url.pathname === '/' ? true : false}
			/>

			{#each navigation as navItem}
				<SideNavLink
					text={navItem.title}
					href={navItem.href}
					isSelected={$page.url.pathname.includes(navItem.href.replace(/^\//, '')) ? true : false}
					icon={navItem.icon}
				/>
			{/each}
		</SideNavItems>
	</SideNav>
	<Content>
		<slot />
		<!-- <pre><code>{JSON.stringify($page, null, 2)}</code></pre> -->
	</Content>
{/if}
