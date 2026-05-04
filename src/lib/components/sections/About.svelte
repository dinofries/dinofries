<script lang="ts"></script>

<section class="about" id="about">
	<div class="dot-pattern" aria-hidden="true"></div>

	<div class="inner">
		<div class="card">
			<div class="tab">about</div>

			<div class="greeting">hi, i'm Matt! AKA &ldquo;dinofries&rdquo; 👋</div>

			<p>
				i create gaming content on <a class="yt" href="https://www.youtube.com/@dinofries" target="_blank" rel="noopener noreferrer">YouTube</a>
			</p>
			<p>open to sponsorships and collaborations</p>

		</div>
	</div>
</section>

<style>
	.about {
		position: relative;
		padding: 32px 24px 28px;
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
		padding: 24px 28px 20px;
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
		font-size: 24px;
		font-weight: 800;
		margin-bottom: 10px;
		color: var(--color-ink);
	}
	.card p {
		font-size: 15px;
		line-height: 1.6;
		margin: 0 0 10px;
		color: #4a6a3a;
	}
	.yt {
		color: var(--color-fries-red);
		font-weight: 700;
		text-decoration: underline;
		text-underline-offset: 3px;
	}
</style>
