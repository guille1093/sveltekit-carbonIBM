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
		Button
	} from 'carbon-components-svelte';
	import Logout from 'carbon-icons-svelte/lib/Logout.svelte';
	import UserAvatarFilledAlt from 'carbon-icons-svelte/lib/UserAvatarFilledAlt.svelte';
	import Group from 'carbon-icons-svelte/lib/Group.svelte';
	import { FlightInternational } from 'carbon-icons-svelte';
	import { Currency, ChartColumnTarget } from 'carbon-icons-svelte';
	import { Home } from 'carbon-icons-svelte';
	import { getImageURL } from '$lib/utils';

	export let data;

	let isSideNavOpen = false;
	let isOpen1 = false;

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
			title: 'Ventas',
			href: '/ventas',
			icon: Currency
		},

		{
			title: 'Reportes',
			href: '/reportes',
			icon: ChartColumnTarget
		}
	];
</script>

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
	<Header company="Del Valle" platformName="Empresa de turismo" bind:isSideNavOpen>
		<svelte:fragment slot="skip-to-content">
			<SkipToContent />
		</svelte:fragment>

		<HeaderUtilities>
			<HeaderAction
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
		</HeaderUtilities>
	</Header>

	<SideNav bind:isOpen={isSideNavOpen} aria-hidden="false" rail>
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
	</Content>
{/if}
