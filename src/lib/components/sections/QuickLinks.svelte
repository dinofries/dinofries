<script lang="ts">
	type PortalIcon =
		| { kind: 'image'; src: string; alt: string }
		| { kind: 'svg'; viewBox: string; path: string };

	type Portal = {
		label: string;
		href: string;
		bg: string;
		fg: 'light' | 'dark';
		icon: PortalIcon;
	};

	const portals: Portal[] = [
		{
			label: 'MMOBomb',
			bg: '#fff',
			fg: 'dark',
			href: 'https://www.mmobomb.com/author/matthew',
			icon: { kind: 'image', src: '/logos/mmobomb.png', alt: 'MMOBomb' }
		},
		{
			label: 'Game Rant',
			bg: '#fff',
			fg: 'dark',
			href: 'https://gamerant.com/author/matthew-donofrio/',
			icon: { kind: 'image', src: '/logos/gamerant.svg', alt: 'Game Rant' }
		}
	];
</script>

<section class="portals" id="links">
	<div class="header">
		<h2>articles by me</h2>
	</div>

	<div class="grid">
		{#each portals as p (p.label)}
			<a
				class="portal df-shadow-pop"
				class:fg-light={p.fg === 'light'}
				href={p.href}
				target={p.href.startsWith('http') ? '_blank' : undefined}
				rel={p.href.startsWith('http') ? 'noopener noreferrer' : undefined}
				aria-label={p.label}
				style:--portal-bg={p.bg}
			>
				<div class="icon-slot">
					{#if p.icon.kind === 'image'}
						<img src={p.icon.src} alt={p.icon.alt} loading="lazy" />
					{:else}
						<svg viewBox={p.icon.viewBox} aria-hidden="true">
							<path d={p.icon.path} fill="currentColor" />
						</svg>
					{/if}
				</div>
			</a>
		{/each}
	</div>
</section>

<style>
	.portals {
		padding: 56px 24px 64px;
		background: #fff8e1;
		border-top: 3px solid var(--color-ink);
		border-bottom: 3px solid var(--color-ink);
	}
	.header {
		text-align: center;
		margin-bottom: 28px;
	}
	.header h2 {
		font-size: clamp(32px, 5vw, 48px);
		font-weight: 800;
		margin: 4px 0 0;
		color: var(--color-sage-light);
		-webkit-text-stroke: 2px var(--color-ink);
		text-shadow: 4px 4px 0 var(--color-ink);
	}

	.grid {
		max-width: 720px;
		margin: 0 auto;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(180px, 240px));
		justify-content: center;
		gap: 16px;
	}

	.portal {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 28px 22px;
		background: var(--portal-bg);
		border: 3px solid var(--color-ink);
		border-radius: 18px;
		text-decoration: none;
		color: var(--color-ink);
		text-align: center;
	}

	.icon-slot {
		width: 100%;
		height: 72px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.icon-slot svg {
		width: 48px;
		height: 48px;
	}
	.icon-slot img {
		width: 100%;
		height: 100%;
		object-fit: contain;
		display: block;
	}
</style>
