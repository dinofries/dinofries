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
			label: 'YouTube',
			subtitle: '10k+ subscribers ↗',
			bg: '#FF0033',
			fg: 'light',
			href: 'https://www.youtube.com/@dinofries',
			badge: '10k+',
			icon: {
				kind: 'svg',
				viewBox: '0 0 24 24',
				path: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z'
			}
		},
		{
			label: 'Discord',
			subtitle: 'join the server ↗',
			bg: '#5865F2',
			fg: 'light',
			href: 'https://discord.gg/XBYQhbWWw2',
			icon: {
				kind: 'svg',
				viewBox: '0 0 24 24',
				path: 'M20.317 4.37a19.79 19.79 0 0 0-4.885-1.515.07.07 0 0 0-.078.037c-.21.375-.444.865-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.51 12.51 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.74 19.74 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.058a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.1 13.1 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 0 1 .078-.011c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.099.247.198.373.292a.077.077 0 0 1-.006.127 12.3 12.3 0 0 1-1.873.891.077.077 0 0 0-.04.107c.36.698.772 1.363 1.225 1.993a.076.076 0 0 0 .084.028 19.84 19.84 0 0 0 6.002-3.03.077.077 0 0 0 .031-.055c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.029zM8.02 15.331c-1.183 0-2.157-1.085-2.157-2.42 0-1.332.955-2.418 2.157-2.418 1.21 0 2.176 1.095 2.157 2.419 0 1.334-.955 2.42-2.157 2.42zm7.975 0c-1.183 0-2.157-1.085-2.157-2.42 0-1.332.955-2.418 2.157-2.418 1.21 0 2.176 1.095 2.157 2.419 0 1.334-.946 2.42-2.157 2.42z'
			}
		},
		{
			label: 'Twitch',
			subtitle: 'catch me live ↗',
			bg: '#9146FF',
			fg: 'light',
			href: 'https://www.twitch.tv/dinofries',
			icon: {
				kind: 'svg',
				viewBox: '0 0 24 24',
				path: 'M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z'
			}
		},
		{
			label: 'Spotify',
			subtitle: '10k+ subscribers',
			bg: '#1DB954',
			fg: 'light',
			href: 'https://open.spotify.com/artist/3v37CkEbz5MsUauu1BIXOj',
			icon: {
				kind: 'svg',
				viewBox: '0 0 24 24',
				path: 'M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12A12 12 0 0 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z'
			}
		},
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
			label: 'community art',
			subtitle: 'fan-made & friends',
			bg: '#FFD0DC',
			fg: 'dark',
			href: '#art',
			icon: {
				kind: 'svg',
				viewBox: '0 0 24 24',
				path: 'M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20Zm0-2a8 8 0 0 0 8-8c0-1.1-.9-2-2-2h-2.5a1.5 1.5 0 0 1 0-3H17c1.1 0 2-.9 2-2v-.5A8 8 0 1 0 12 20Zm-5-9a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6-3a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z'
			}
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
	.kicker {
		font-family: var(--font-hand);
		font-size: 26px;
		font-weight: 700;
		color: var(--color-fries-red);
		display: inline-block;
		transform: rotate(-2deg);
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
