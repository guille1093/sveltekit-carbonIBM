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
		HeaderPanelLink,
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
	let theme = 'g10';

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

	$: activeUrl = $page.url.pathname;

	import { onMount } from 'svelte';

	// indicate if we're in dark mode or not
	let dark = false;

	// hide the control until we've decided what the intial mode is
	let hidden = true;

	onMount(() => {
		// use the existence of the dark class on the html element for the initial value
		dark = document.documentElement.classList.contains('dark');

		// show UI controls
		hidden = false;

		// listen for changes so we auto-adjust based on system settings
		const matcher = window.matchMedia('(prefers-color-scheme: dark)');
		matcher.addEventListener('change', handleChange);
		return () => matcher.removeEventListener('change', handleChange);
	});

	function handleChange({ matches: dark }) {
		// only set if we haven't overridden the theme
		if (!localStorage.theme) {
			setMode(dark);
		}
	}

	function toggle() {
		setMode(!dark);
	}

	/**
	 * @param {boolean} value
	 */
	function setMode(value) {
		dark = value;

		// update page styling
		if (dark) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}

		// store the theme as a local override
		localStorage.theme = dark ? 'dark' : 'light';

		// if the toggled-to theme matches the system defined theme, clear the local override
		// this effectively provides a way to override or revert to "automatic" setting mode
		if (window.matchMedia(`(prefers-color-scheme: ${localStorage.theme})`).matches) {
			localStorage.removeItem('theme');
		}
	}
</script>

<Header company="Del Valle" platformName="Empresa de turismo" bind:isSideNavOpen>
	<svelte:fragment slot="skip-to-content">
		<SkipToContent />
	</svelte:fragment>

	<HeaderUtilities>
		<HeaderAction bind:isOpen={isOpen1} icon={UserAvatarFilledAlt} closeIcon={UserAvatarFilledAlt}>
			<HeaderPanelLinks>
				<HeaderPanelDivider>Cuenta</HeaderPanelDivider>
				<Theme
					class="mx-2"
					render="toggle"
					toggle={{
						themes: ['g10', 'g90'],
						size: 'sm'
					}}
					bind:theme
					on:update={toggle}
				/>
				<HeaderPanelDivider>Switcher subject 1</HeaderPanelDivider>
				<HeaderPanelLink>Switcher item 1</HeaderPanelLink>
				<HeaderPanelLink>Switcher item 2</HeaderPanelLink>
				<HeaderPanelLink>Switcher item 3</HeaderPanelLink>
				<HeaderPanelLink>Switcher item 4</HeaderPanelLink>
				<HeaderPanelDivider>Switcher subject 2</HeaderPanelDivider>
				<HeaderPanelLink>Switcher item 1</HeaderPanelLink>
				<HeaderPanelLink>Switcher item 2</HeaderPanelLink>
				<HeaderPanelDivider>Switcher subject 3</HeaderPanelDivider>
				<HeaderPanelLink>Switcher item 1</HeaderPanelLink>
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
