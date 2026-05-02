<script lang="ts">
	type Item = { name: string; href: string };
	type Props = { items: Item[]; active: string; onSelect: (name: string) => void };
	let { items, active, onSelect }: Props = $props();

	let menuOpen = $state(false);

	function handleSelect(name: string) {
		onSelect(name);
		menuOpen = false;
	}

	function onKey(e: KeyboardEvent) {
		if (e.key === 'Escape') menuOpen = false;
	}
</script>

<svelte:window onkeydown={onKey} />

<nav class="nav-bar">
	<div class="inner">
		<a class="brand" href="#home" onclick={() => handleSelect('Home')} aria-label="dinofries home">
			<img src="/logo.png" alt="" class="brand-logo" width="44" height="44" />
			<span class="brand-text">dinofries</span>
		</a>

		<button
			class="burger"
			class:open={menuOpen}
			aria-label={menuOpen ? 'close menu' : 'open menu'}
			aria-expanded={menuOpen}
			aria-controls="primary-nav"
			onclick={() => (menuOpen = !menuOpen)}
		>
			<span class="bar"></span>
			<span class="bar"></span>
			<span class="bar"></span>
		</button>

		<div id="primary-nav" class="items" class:open={menuOpen}>
			{#each items as item (item.name)}
				<a
					class="item"
					class:active={active === item.name}
					href={item.href}
					onclick={() => handleSelect(item.name)}
				>
					{item.name}
				</a>
			{/each}
		</div>
	</div>
</nav>

<style>
	.nav-bar {
		position: sticky;
		top: 0;
		z-index: 50;
		background: rgba(255, 248, 225, 0.92);
		backdrop-filter: blur(8px);
		border-bottom: 3px solid var(--color-ink);
	}
	.inner {
		max-width: 1180px;
		margin: 0 auto;
		padding: 12px 24px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 16px;
	}
	.brand {
		display: flex;
		align-items: center;
		gap: 10px;
		text-decoration: none;
	}
	.brand-logo {
		display: block;
		object-fit: contain;
		image-rendering: -webkit-optimize-contrast;
	}
	.brand-text {
		font-weight: 800;
		font-size: 22px;
		color: var(--color-ink);
		letter-spacing: -0.5px;
	}
	.items {
		display: flex;
		gap: 4px;
		flex-wrap: wrap;
	}
	.item {
		padding: 8px 14px;
		border: 2px solid transparent;
		border-radius: 999px;
		font-size: 14px;
		font-weight: 600;
		color: var(--color-ink);
		text-decoration: none;
		transition: all 0.15s;
	}
	.item:hover {
		background: var(--color-link-hover);
	}
	.item.active {
		background: var(--color-sage);
		border-color: var(--color-ink);
	}

	/* Hamburger — desktop hides it */
	.burger {
		display: none;
		width: 44px;
		height: 44px;
		padding: 0;
		background: #fff;
		border: 3px solid var(--color-ink);
		border-radius: 12px;
		cursor: pointer;
		position: relative;
		box-shadow: 0 3px 0 var(--color-ink);
		transition:
			transform 0.1s ease,
			box-shadow 0.1s ease;
	}
	.burger:active {
		transform: translateY(2px);
		box-shadow: 0 1px 0 var(--color-ink);
	}
	.bar {
		position: absolute;
		left: 50%;
		top: 50%;
		width: 22px;
		height: 3px;
		background: var(--color-ink);
		border-radius: 2px;
		transform: translate(-50%, -50%);
		transition:
			transform 0.2s ease,
			opacity 0.2s ease,
			top 0.2s ease;
	}
	.bar:nth-child(1) {
		top: calc(50% - 7px);
	}
	.bar:nth-child(3) {
		top: calc(50% + 7px);
	}
	.burger.open .bar:nth-child(1) {
		top: 50%;
		transform: translate(-50%, -50%) rotate(45deg);
	}
	.burger.open .bar:nth-child(2) {
		opacity: 0;
	}
	.burger.open .bar:nth-child(3) {
		top: 50%;
		transform: translate(-50%, -50%) rotate(-45deg);
	}

	@media (max-width: 720px) {
		.burger {
			display: block;
		}
		.items {
			position: absolute;
			top: 100%;
			left: 0;
			right: 0;
			flex-direction: column;
			gap: 6px;
			padding: 14px 24px 18px;
			background: rgba(255, 248, 225, 0.98);
			backdrop-filter: blur(8px);
			border-bottom: 3px solid var(--color-ink);
			box-shadow: 0 6px 0 rgba(61, 90, 42, 0.12);
			max-height: 0;
			overflow: hidden;
			padding-top: 0;
			padding-bottom: 0;
			border-bottom-width: 0;
			transition:
				max-height 0.25s ease,
				padding 0.2s ease,
				border-bottom-width 0.2s ease;
		}
		.items.open {
			max-height: 70vh;
			padding-top: 14px;
			padding-bottom: 18px;
			border-bottom-width: 3px;
		}
		.item {
			padding: 12px 16px;
			font-size: 16px;
			border-radius: 12px;
			border-width: 2.5px;
			background: #fff;
			border-color: var(--color-ink);
		}
		.item:hover,
		.item.active {
			background: var(--color-sage);
		}
	}
</style>
