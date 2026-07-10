<script lang="ts">
	type Game = {
		title: string;
		href: string;
		image: string;
	};

	const games: Game[] = [
		{
			title: "Soul's Remnant",
			href: 'https://store.steampowered.com/app/3451980/Souls_Remnant/',
			image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3451980/header.jpg'
		},
		{
			title: 'Combo Devils',
			href: 'https://store.steampowered.com/app/2697620/Combo_Devils/',
			image:
				'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2697620/a03e72c19ca66c0b89e902af9b6f78eda93eefde/header.jpg'
		}
	];
</script>

<section class="games" id="games">
	<div class="dot-pattern" aria-hidden="true"></div>

	<div class="inner">
		<div class="card">
			<div class="tab">games i've worked on</div>

			<div class="grid">
				{#each games as game (game.title)}
					<a
						class="game"
						href={game.href}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={`View ${game.title} on Steam`}
					>
						<img src={game.image} alt={`${game.title} on Steam`} loading="lazy" />
					</a>
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	.games {
		position: relative;
		padding: 8px 24px 40px;
		background: var(--color-page);
	}
	.dot-pattern {
		position: absolute;
		inset: 0;
		background: radial-gradient(
			circle at 20px 20px,
			rgba(168, 216, 122, 0.3) 1.5px,
			transparent 2px
		);
		background-size: 40px 40px;
		pointer-events: none;
	}
	.inner {
		position: relative;
		max-width: 760px;
		margin: 0 auto;
	}
	.card {
		position: relative;
		background: #fff;
		border: 3px solid var(--color-ink);
		border-radius: 20px;
		padding: 28px 28px 24px;
		box-shadow: 0 6px 0 rgba(61, 90, 42, 0.18);
	}
	.tab {
		position: absolute;
		top: -18px;
		left: 28px;
		background: var(--color-fries-yellow);
		border: 3px solid var(--color-ink);
		border-radius: 999px;
		padding: 4px 18px;
		font-size: 14px;
		font-weight: 800;
		text-transform: lowercase;
		letter-spacing: 0.5px;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
		gap: 16px;
	}

	.game {
		display: block;
		border: 3px solid var(--color-ink);
		border-radius: 14px;
		overflow: hidden;
		line-height: 0;
		transition:
			transform 0.15s ease,
			box-shadow 0.15s ease;
		box-shadow: 0 4px 0 rgba(61, 90, 42, 0.18);
	}
	.game:hover {
		transform: translateY(-2px);
		box-shadow: 0 6px 0 rgba(61, 90, 42, 0.18);
	}
	.game img {
		width: 100%;
		height: auto;
		display: block;
	}
</style>
