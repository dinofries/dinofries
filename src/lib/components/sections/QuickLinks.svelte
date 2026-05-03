<script lang="ts">
	type PortalIcon =
		| { kind: 'image'; src: string; alt: string }
		| { kind: 'svg'; viewBox: string; path: string };

	type Portal = {
		label: string;
		href: string;
		subtitle: string;
		bg: string;
		fg: 'light' | 'dark';
		icon: PortalIcon;
		badge?: string;
	};

	const portals: Portal[] = [
		{
			label: 'MMOBomb',
			subtitle: 'my MMO articles ↗',
			bg: '#fff',
			fg: 'dark',
			href: 'https://www.mmobomb.com/author/matthew',
			icon: { kind: 'image', src: '/logos/mmobomb.png', alt: 'MMOBomb' }
		},
		{
			label: 'Game Rant',
			subtitle: 'my game features ↗',
			bg: '#fff',
			fg: 'dark',
			href: 'https://gamerant.com/author/matthew-donofrio/',
			icon: { kind: 'image', src: '/logos/gamerant.svg', alt: 'Game Rant' }
		},
		{
			label: 'NordVPN',
			subtitle: 'save on a vpn ↗',
			bg: '#fff',
			fg: 'dark',
			href: 'https://go.nordvpn.net/aff_c?offer_id=612&aff_id=131124&source=dinofries',
			badge: '#ad',
			icon: { kind: 'image', src: '/logos/nordvpn.svg', alt: 'NordVPN' }
		}
	];
</script>

<section class="portals" id="links">
	<div class="header">
		<h2>where to next?</h2>
	</div>

	<div class="grid">
		{#each portals as p (p.label)}
			<a
				class="portal df-shadow-pop"
				class:fg-light={p.fg === 'light'}
				href={p.href}
				target={p.href.startsWith('http') ? '_blank' : undefined}
				rel={p.href.startsWith('http') ? 'noopener noreferrer' : undefined}
				style:--portal-bg={p.bg}
			>
				{#if p.badge}
					<span class="badge" aria-hidden="true">{p.badge}</span>
				{/if}
				<div class="icon-slot">
					{#if p.icon.kind === 'image'}
						<img src={p.icon.src} alt={p.icon.alt} loading="lazy" />
					{:else}
						<svg viewBox={p.icon.viewBox} aria-hidden="true">
							<path d={p.icon.path} fill="currentColor" />
						</svg>
					{/if}
				</div>
				<span class="portal-label">{p.label}</span>
				<span class="portal-sub">{p.subtitle}</span>
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
		max-width: 1180px;
		margin: 0 auto;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
		gap: 16px;
	}

	.portal {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 8px;
		padding: 22px 18px 20px;
		background: var(--portal-bg);
		border: 3px solid var(--color-ink);
		border-radius: 18px;
		text-decoration: none;
		color: var(--color-ink);
		text-align: center;
	}

	.badge {
		position: absolute;
		top: -10px;
		right: -10px;
		background: var(--color-fries-yellow);
		color: var(--color-ink);
		border: 2.5px solid var(--color-ink);
		border-radius: 999px;
		padding: 4px 10px;
		font-size: 13px;
		font-weight: 800;
		letter-spacing: -0.3px;
		transform: rotate(8deg);
		box-shadow: 0 2px 0 var(--color-ink);
		z-index: 2;
	}
	.portal.fg-light {
		color: #fff;
	}
	.portal.fg-light .portal-sub {
		color: rgba(255, 255, 255, 0.85);
	}

	.icon-slot {
		width: 100%;
		height: 56px;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 4px;
	}
	.icon-slot svg {
		width: 40px;
		height: 40px;
	}
	.icon-slot img {
		width: 100%;
		height: 100%;
		object-fit: contain;
		display: block;
	}

	.portal-label {
		font-size: 18px;
		font-weight: 800;
		letter-spacing: -0.3px;
	}
	.portal-sub {
		font-size: 13px;
		font-weight: 600;
		color: rgba(61, 90, 42, 0.7);
	}
</style>
