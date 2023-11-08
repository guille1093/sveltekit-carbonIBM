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
		Breakpoint
	} from 'carbon-components-svelte';
	import { ContentSwitcher, Switch } from 'carbon-components-svelte';
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
		</HeaderUtilities>
	</Header>
	{#if !(size === 'sm')}
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
	{/if}

	<Content>
		<slot />
		{#if size === 'sm'}
			<div class="fixed bottom-10 bg-neutral-900 left-0 z-50 w-full">
				<ContentSwitcher
					size="sm"
					selectedIndex={$page.url.pathname.includes('/')
						? 0
						: $page.url.pathname.includes('/clientes')
						? 1
						: $page.url.pathname.includes('/paquetes')
						? 2
						: $page.url.pathname.includes('/ventas')
						? 3
						: $page.url.pathname.includes('/reportes')
						? 4
						: undefined}
				>
					<Switch on:click={() => (window.location.href = `/`)}>Inicio</Switch>

					{#each navigation as navItem}
						<Switch on:click={() => (window.location.href = `${navItem.href}`)}>
							{navItem.title}
						</Switch>
					{/each}
				</ContentSwitcher>
			</div>
		{/if}
	</Content>
{/if}
