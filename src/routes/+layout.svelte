<script>
	import '../app.postcss';
	import 'carbon-components-svelte/css/all.css';
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
		Grid,
		Row,
		Column,
		Theme
	} from 'carbon-components-svelte';
	import UserAvatarFilledAlt from 'carbon-icons-svelte/lib/UserAvatarFilledAlt.svelte';
	import Group from 'carbon-icons-svelte/lib/Group.svelte';
	import { FlightInternational } from 'carbon-icons-svelte';
	import { Currency } from 'carbon-icons-svelte';
	import { Home } from 'carbon-icons-svelte';
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
		}
	];
</script>

<Theme theme="g100" />

<Header company="Del Valle" platformName="Empresa de turismo" bind:isSideNavOpen>
	<svelte:fragment slot="skip-to-content">
		<SkipToContent />
	</svelte:fragment>

	<HeaderUtilities>
		<HeaderAction bind:isOpen={isOpen1} icon={UserAvatarFilledAlt} closeIcon={UserAvatarFilledAlt}>
			<HeaderPanelLinks>
				<HeaderPanelDivider>Cuenta</HeaderPanelDivider>
			</HeaderPanelLinks>
		</HeaderAction>
	</HeaderUtilities>
</Header>

<SideNav bind:isOpen={isSideNavOpen} rail>
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
	<Grid>
		<Row>
			<Column>
				<slot />
			</Column>
		</Row>
	</Grid>
</Content>
