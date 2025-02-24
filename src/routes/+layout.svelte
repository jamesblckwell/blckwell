<script lang="ts">
	import '../app.css';
	import Nav from '$components/Nav.svelte';
	import { showNav, pageTitle } from '$stores/store';

	$pageTitle = 'Home';
	$showNav = true;
</script>

<svelte:head>
	<title>{$pageTitle} | Blckwell.net</title>
</svelte:head>

{#if $showNav}
	<Nav></Nav>
{/if}
<slot />

<style>
	:global(body) {
		font-family: 'Open Sans', sans-serif;
	}
</style>
