<script lang="ts">
	const friendCode = '#caWtD';
	let copied = $state(false);

	async function copyCode() {
		try {
			await navigator.clipboard.writeText(friendCode);
			copied = true;
			setTimeout(() => (copied = false), 1500);
		} catch {
			/* clipboard not available — silently no-op */
		}
	}
</script>

<section class="about" id="about">
	<div class="dot-pattern" aria-hidden="true"></div>

	<div class="inner">
		<div class="card">
			<div class="tab">about</div>

			<div class="greeting">Hi, I'm Matt! AKA &ldquo;dinofries&rdquo; 👋</div>

			<p>
				And I Create Content On <a class="yt" href="https://www.youtube.com/@dinofries" target="_blank" rel="noopener noreferrer">YouTube</a>.
			</p>

			<button class="friend df-shadow-pop" onclick={copyCode} aria-live="polite">
				<span class="friend-label">
					<span class="friend-game">MapleStory Worlds</span>
					<span class="friend-line">come find me!</span>
				</span>
				<span class="friend-code">{copied ? 'copied!' : friendCode}</span>
			</button>

			<p class="footer-line">
				stay awhile, grab a snack 🍟
			</p>
		</div>
	</div>
</section>

<style>
	.about {
		position: relative;
		padding: 80px 24px 64px;
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
		padding: 36px 32px 28px;
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
	.greeting {
		font-size: 28px;
		font-weight: 800;
		margin-bottom: 14px;
		color: var(--color-ink);
	}
	.card p {
		font-size: 15px;
		line-height: 1.6;
		margin: 0 0 10px;
		color: #4a6a3a;
	}
	.hl {
		background: var(--color-fries-yellow);
		padding: 0 4px;
		border-radius: 4px;
		font-weight: 700;
		color: var(--color-ink);
	}
	.yt {
		color: var(--color-fries-red);
		font-weight: 700;
		text-decoration: underline;
		text-underline-offset: 3px;
	}
	.footer-line {
		margin-top: 14px !important;
		font-family: var(--font-hand);
		font-size: 24px !important;
		color: var(--color-ink) !important;
		font-weight: 700;
		transform: rotate(-1deg);
	}

	.friend {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 16px;
		width: 100%;
		margin: 16px 0 4px;
		padding: 12px 18px;
		background: var(--color-sage);
		border: 3px solid var(--color-ink);
		border-radius: 14px;
		cursor: pointer;
		font-family: inherit;
		text-align: left;
	}
	.friend-label {
		display: flex;
		flex-direction: column;
		gap: 2px;
	}
	.friend-game {
		font-size: 12px;
		font-weight: 800;
		text-transform: uppercase;
		letter-spacing: 1px;
		color: var(--color-ink);
		opacity: 0.7;
	}
	.friend-line {
		font-family: var(--font-hand);
		font-size: 20px;
		font-weight: 700;
		color: var(--color-ink);
		line-height: 1;
	}
	.friend-code {
		background: #fff;
		border: 2.5px solid var(--color-ink);
		border-radius: 8px;
		padding: 6px 12px;
		font-family: ui-monospace, 'SFMono-Regular', Menlo, monospace;
		font-size: 16px;
		font-weight: 800;
		color: var(--color-ink);
		letter-spacing: 1px;
		min-width: 96px;
		text-align: center;
	}
</style>
