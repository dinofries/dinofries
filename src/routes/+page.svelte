<script lang="ts">
	import Nav from '$lib/components/sections/Nav.svelte';
	import Hero from '$lib/components/sections/Hero.svelte';
	import About from '$lib/components/sections/About.svelte';
	import QuickLinks from '$lib/components/sections/QuickLinks.svelte';
	import CommunityArt from '$lib/components/sections/CommunityArt.svelte';
	import Footer from '$lib/components/sections/Footer.svelte';

	let active = $state('Home');

	const navItems = [
		{ name: 'Home', href: '#home' },
		{ name: 'About', href: '#about' },
		{ name: 'Art', href: '#art' },
		{ name: 'Contact', href: '#contact' }
	];
</script>

<svelte:head>
	<title>dinofries</title>
</svelte:head>

<Nav items={navItems} {active} onSelect={(name) => (active = name)} />
<Hero />
<About />
<QuickLinks />
<CommunityArt />
<Footer />
