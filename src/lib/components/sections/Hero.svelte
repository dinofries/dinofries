<script lang="ts">
	import PixelSparkle from '../sprites/PixelSparkle.svelte';

	const sparkles = [
		{ top: '14%', left: '8%', s: 14, delay: 0 },
		{ top: '24%', left: '88%', s: 18, delay: 0.6 },
		{ top: '70%', left: '12%', s: 12, delay: 1.2 },
		{ top: '78%', left: '82%', s: 16, delay: 0.3, c: '#FF8FB1' },
		{ top: '50%', left: '6%', s: 10, delay: 0.9 }
	];
</script>

<section class="hero" id="home">
	<div class="hero-bg" aria-hidden="true"></div>

	<!-- Player-stats HUD (top-left). Hides on mobile. -->
	<aside class="hud" aria-hidden="true">
		<div class="hud-head">
			<span class="lvl">Lv. 200</span>
			<span class="char">dinofries</span>
		</div>
		<div class="bar-row">
			<span class="bar-label">HP</span>
			<div class="bar"><div class="bar-fill hp"></div><span class="bar-text">9999/9999</span></div>
		</div>
		<div class="bar-row">
			<span class="bar-label">MP</span>
			<div class="bar"><div class="bar-fill mp"></div><span class="bar-text">∞/∞</span></div>
		</div>
		<div class="bar-row">
			<span class="bar-label">EXP</span>
			<div class="bar"><div class="bar-fill exp"></div><span class="bar-text">100%</span></div>
		</div>
	</aside>

	<!-- Map-name banner (top-right). Hides on mobile. -->
	<div class="map-banner" aria-hidden="true">
		<span class="map-icon">▣</span>
		<span class="map-name">DINOFRIES WORLD</span>
		<span class="map-ch">· CH. 1</span>
	</div>

	{#each sparkles as sp, i (i)}
		<div
			class="sparkle"
			style="top:{sp.top}; left:{sp.left}; animation-delay:{sp.delay}s"
			aria-hidden="true"
		>
			<PixelSparkle size={sp.s} color={sp.c ?? '#FFD93D'} />
		</div>
	{/each}

	<div class="content">
		<div class="welcome-row">
			<span class="welcome">welcome to</span>
		</div>

		<div class="logo-stage">
			<!-- Pixel-art lightbulb hint floating above the logo -->
			<div class="quest" aria-hidden="true">
				<svg viewBox="0 0 12 13" shape-rendering="crispEdges">
					<!-- top of bulb -->
					<rect x="4" y="1" width="4" height="1" fill="#3d5a2a" />
					<!-- row 2 -->
					<rect x="2" y="2" width="2" height="1" fill="#3d5a2a" />
					<rect x="4" y="2" width="4" height="1" fill="#FFD93D" />
					<rect x="8" y="2" width="2" height="1" fill="#3d5a2a" />
					<!-- row 3 -->
					<rect x="1" y="3" width="1" height="1" fill="#3d5a2a" />
					<rect x="2" y="3" width="1" height="1" fill="#FFD93D" />
					<rect x="3" y="3" width="1" height="1" fill="#FFE680" />
					<rect x="4" y="3" width="6" height="1" fill="#FFD93D" />
					<rect x="10" y="3" width="1" height="1" fill="#3d5a2a" />
					<!-- row 4 (widest) -->
					<rect x="0" y="4" width="1" height="1" fill="#3d5a2a" />
					<rect x="1" y="4" width="1" height="1" fill="#FFD93D" />
					<rect x="2" y="4" width="2" height="1" fill="#FFE680" />
					<rect x="4" y="4" width="7" height="1" fill="#FFD93D" />
					<rect x="11" y="4" width="1" height="1" fill="#3d5a2a" />
					<!-- row 5 -->
					<rect x="0" y="5" width="1" height="1" fill="#3d5a2a" />
					<rect x="1" y="5" width="10" height="1" fill="#FFD93D" />
					<rect x="11" y="5" width="1" height="1" fill="#3d5a2a" />
					<!-- row 6 -->
					<rect x="0" y="6" width="1" height="1" fill="#3d5a2a" />
					<rect x="1" y="6" width="10" height="1" fill="#FFD93D" />
					<rect x="11" y="6" width="1" height="1" fill="#3d5a2a" />
					<!-- row 7 (narrowing) -->
					<rect x="1" y="7" width="1" height="1" fill="#3d5a2a" />
					<rect x="2" y="7" width="8" height="1" fill="#FFD93D" />
					<rect x="10" y="7" width="1" height="1" fill="#3d5a2a" />
					<!-- row 8 (neck) -->
					<rect x="2" y="8" width="1" height="1" fill="#3d5a2a" />
					<rect x="3" y="8" width="6" height="1" fill="#FFD93D" />
					<rect x="9" y="8" width="1" height="1" fill="#3d5a2a" />
					<!-- row 9 — base separator -->
					<rect x="2" y="9" width="8" height="1" fill="#3d5a2a" />
					<!-- row 10 — base body -->
					<rect x="2" y="10" width="1" height="1" fill="#3d5a2a" />
					<rect x="3" y="10" width="6" height="1" fill="#bdbdbd" />
					<rect x="9" y="10" width="1" height="1" fill="#3d5a2a" />
					<!-- row 11 — base body -->
					<rect x="2" y="11" width="1" height="1" fill="#3d5a2a" />
					<rect x="3" y="11" width="6" height="1" fill="#888888" />
					<rect x="9" y="11" width="1" height="1" fill="#3d5a2a" />
					<!-- row 12 — base bottom -->
					<rect x="3" y="12" width="6" height="1" fill="#3d5a2a" />
				</svg>
			</div>

			<div class="speech">
				<span>you found me!</span>
				<div class="speech-tail"></div>
			</div>
			<img src="/logo.png" alt="dinofries" class="logo" width="380" height="380" />
		</div>

		<h1 class="title">dinofries</h1>

		<p class="tagline">where dinosaurs &amp; fries rule the world</p>

		<div class="buttons">
			<a class="btn primary df-shadow-pop" href="#about">explore the site →</a>
			<a class="btn secondary df-shadow-pop" href="#art">see community art</a>
		</div>
	</div>

	<div class="cloud-deco cloud-1" aria-hidden="true"></div>
	<div class="cloud-deco cloud-2" aria-hidden="true"></div>
	<div class="cloud-deco cloud-3" aria-hidden="true"></div>

	<div class="ground" aria-hidden="true">
		<div class="ground-grass-tips"></div>
		<div class="ground-grass"></div>
		<div class="ground-dirt">
			<span class="pebble" style="left:12%; top:60%"></span>
			<span class="pebble" style="left:34%; top:30%"></span>
			<span class="pebble" style="left:58%; top:65%"></span>
			<span class="pebble" style="left:78%; top:40%"></span>
		</div>
	</div>
</section>

<style>
	.hero {
		position: relative;
		min-height: calc(100vh - var(--nav-height));
		min-height: calc(100dvh - var(--nav-height));
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 40px 24px 140px;
	}
	.hero-bg {
		position: absolute;
		inset: 0;
		background: linear-gradient(
			180deg,
			var(--color-sky-1) 0%,
			var(--color-sky-2) 60%,
			var(--color-sky-3) 100%
		);
		z-index: 0;
	}

	/* CSS-drawn pillowy clouds */
	.cloud-deco {
		position: absolute;
		background: #fff;
		border-radius: 999px;
		opacity: 0.75;
		filter: drop-shadow(0 4px 0 rgba(184, 212, 232, 0.4));
		pointer-events: none;
		z-index: 1;
	}
	.cloud-1 {
		width: 240px;
		height: 70px;
		top: 14%;
		left: -40px;
	}
	.cloud-2 {
		width: 180px;
		height: 56px;
		top: 8%;
		right: 8%;
		opacity: 0.85;
	}
	.cloud-3 {
		width: 140px;
		height: 44px;
		bottom: 35%;
		right: -20px;
		opacity: 0.7;
	}

	.sparkle {
		position: absolute;
		z-index: 2;
		animation: df-twinkle 2.6s ease-in-out infinite;
	}

	/* HUD — player stats overlay */
	.hud {
		position: absolute;
		top: 16px;
		left: 16px;
		z-index: 4;
		background: rgba(255, 255, 255, 0.94);
		border: 3px solid var(--color-ink);
		border-radius: 12px;
		padding: 8px 12px 10px;
		box-shadow: 0 4px 0 rgba(61, 90, 42, 0.18);
		min-width: 220px;
		font-family: ui-monospace, 'SFMono-Regular', Menlo, monospace;
	}
	.hud-head {
		display: flex;
		align-items: center;
		gap: 6px;
		margin-bottom: 6px;
	}
	.lvl {
		background: var(--color-fries-yellow);
		border: 2px solid var(--color-ink);
		border-radius: 6px;
		padding: 1px 6px;
		font-size: 10px;
		font-weight: 800;
		color: var(--color-ink);
		letter-spacing: 0.5px;
	}
	.char {
		font-family: var(--font-display);
		font-size: 13px;
		font-weight: 800;
		color: var(--color-ink);
	}
	.bar-row {
		display: grid;
		grid-template-columns: 30px 1fr;
		align-items: center;
		gap: 6px;
		margin-top: 4px;
	}
	.bar-label {
		font-size: 9px;
		font-weight: 800;
		color: var(--color-ink);
		letter-spacing: 0.5px;
	}
	.bar {
		position: relative;
		height: 12px;
		background: #2a3a1a;
		border: 2px solid var(--color-ink);
		border-radius: 4px;
		overflow: hidden;
	}
	.bar-fill {
		height: 100%;
		width: 100%;
	}
	.bar-fill.hp {
		background: linear-gradient(180deg, #ff6868 0%, #c12626 100%);
	}
	.bar-fill.mp {
		background: linear-gradient(180deg, #6aa9ff 0%, #2a5dba 100%);
	}
	.bar-fill.exp {
		background: linear-gradient(180deg, #ffe680 0%, #ffd93d 100%);
	}
	.bar-text {
		position: absolute;
		inset: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 9px;
		font-weight: 800;
		color: #fff;
		text-shadow: 0 1px 0 rgba(0, 0, 0, 0.45);
		letter-spacing: 0.3px;
	}

	/* Map name banner */
	.map-banner {
		position: absolute;
		top: 16px;
		right: 16px;
		z-index: 4;
		display: flex;
		align-items: center;
		gap: 6px;
		background: rgba(61, 90, 42, 0.92);
		color: #fff8e1;
		border: 3px solid var(--color-ink);
		border-radius: 10px;
		padding: 6px 12px;
		font-family: ui-monospace, monospace;
		font-size: 11px;
		font-weight: 800;
		letter-spacing: 1.2px;
		box-shadow: 0 3px 0 rgba(61, 90, 42, 0.25);
	}
	.map-icon {
		color: var(--color-fries-yellow);
		font-size: 14px;
		line-height: 1;
	}
	.map-ch {
		opacity: 0.65;
	}

	.content {
		position: relative;
		z-index: 3;
		text-align: center;
		max-width: 760px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 14px;
	}

	.welcome-row {
		display: flex;
		justify-content: center;
		margin-bottom: -6px;
	}
	.welcome {
		font-family: var(--font-hand);
		font-size: 44px;
		color: var(--color-ink);
		font-weight: 700;
		transform: rotate(-3deg);
		display: inline-block;
	}

	.logo-stage {
		position: relative;
		display: inline-block;
	}
	.logo {
		width: clamp(220px, 36vw, 380px);
		height: auto;
		display: block;
		animation: df-bob 4.5s ease-in-out infinite;
		filter: drop-shadow(0 8px 0 rgba(61, 90, 42, 0.18));
	}
	.speech {
		position: absolute;
		top: 8%;
		right: -38px;
		background: #fff;
		border: 2.5px solid var(--color-ink);
		border-radius: 14px;
		padding: 8px 14px;
		font-size: 13px;
		font-weight: 700;
		box-shadow: 0 3px 0 rgba(61, 90, 42, 0.15);
		transform: rotate(6deg);
		z-index: 5;
		white-space: nowrap;
	}
	.speech-tail {
		position: absolute;
		bottom: -10px;
		left: 22px;
		width: 14px;
		height: 14px;
		background: #fff;
		border-right: 2.5px solid var(--color-ink);
		border-bottom: 2.5px solid var(--color-ink);
		transform: rotate(45deg);
	}

	/* Pixel lightbulb hint above the logo */
	.quest {
		position: absolute;
		top: -28px;
		left: -10px;
		width: 36px;
		height: 39px;
		z-index: 5;
		animation: df-bob 1.8s ease-in-out infinite;
		filter: drop-shadow(0 0 8px rgba(255, 217, 61, 0.6))
			drop-shadow(0 2px 0 rgba(61, 90, 42, 0.3));
	}
	.quest svg {
		width: 100%;
		height: 100%;
	}

	.title {
		font-size: clamp(56px, 11vw, 128px);
		font-weight: 800;
		line-height: 0.95;
		margin: 0;
		color: var(--color-sage-light);
		-webkit-text-stroke: 3px var(--color-ink);
		text-shadow: 6px 6px 0 var(--color-ink);
		letter-spacing: -2px;
	}

	.tagline {
		font-size: clamp(16px, 2vw, 20px);
		font-weight: 700;
		color: var(--color-ink);
		margin: 0;
	}

	.buttons {
		display: flex;
		gap: 12px;
		flex-wrap: wrap;
		justify-content: center;
		margin-top: 8px;
	}
	.btn {
		padding: 12px 22px;
		border: 2.5px solid var(--color-ink);
		border-radius: 999px;
		font-size: 15px;
		font-weight: 700;
		color: var(--color-ink);
		text-decoration: none;
		display: inline-flex;
		align-items: center;
		gap: 6px;
	}
	.btn.primary {
		background: var(--color-sage);
	}
	.btn.secondary {
		background: #fff;
	}

	/* Pixel ground horizon */
	.ground {
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		height: 60px;
		z-index: 1;
		pointer-events: none;
	}
	.ground-grass-tips {
		position: absolute;
		bottom: 56px;
		left: 0;
		right: 0;
		height: 6px;
		background-image: repeating-linear-gradient(
			90deg,
			var(--color-sage-dark) 0,
			var(--color-sage-dark) 6px,
			transparent 6px,
			transparent 12px
		);
	}
	.ground-grass {
		position: absolute;
		bottom: 44px;
		left: 0;
		right: 0;
		height: 14px;
		background: var(--color-sage-dark);
		border-top: 3px solid var(--color-ink);
		border-bottom: 3px solid var(--color-ink);
	}
	.ground-dirt {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		height: 44px;
		background: var(--color-grass-dirt);
	}
	.pebble {
		position: absolute;
		width: 6px;
		height: 6px;
		background: rgba(0, 0, 0, 0.2);
		border-radius: 1px;
	}

	@media (max-width: 720px) {
		.hud,
		.map-banner {
			display: none;
		}
		.ground {
			height: 48px;
		}
		.ground-grass {
			bottom: 32px;
			height: 12px;
		}
		.ground-grass-tips {
			bottom: 44px;
		}
		.ground-dirt {
			height: 32px;
		}
		.hero {
			padding-bottom: 110px;
		}
	}
	@media (max-width: 600px) {
		.speech {
			right: -10px;
			font-size: 12px;
		}
		.quest {
			top: -22px;
			left: -4px;
			width: 28px;
			height: 30px;
		}
	}
</style>
