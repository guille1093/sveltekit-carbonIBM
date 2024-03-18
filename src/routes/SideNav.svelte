<script>
	import { page } from '$app/stores';
	import {
		SideNav,
		SideNavItems,
		SideNavLink,
	} from 'carbon-components-svelte';
	import Group from 'carbon-icons-svelte/lib/Group.svelte';
	import FlightInternational from 'carbon-icons-svelte/lib/FlightInternational.svelte';
	import Hotel from 'carbon-icons-svelte/lib/Hotel.svelte';
	import Currency from 'carbon-icons-svelte/lib/Currency.svelte';
	import ChartColumnTarget from 'carbon-icons-svelte/lib/ChartColumnTarget.svelte';
	import ChangeCatalog from 'carbon-icons-svelte/lib/ChangeCatalog.svelte';
	import IbmCloudAppId from 'carbon-icons-svelte/lib/IbmCloudAppId.svelte';
	import Home from 'carbon-icons-svelte/lib/Home.svelte';


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

	<SideNav rail aria-hidden="false" ariaLabel="sidebar">
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

