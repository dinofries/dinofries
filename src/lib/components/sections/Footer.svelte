<script lang="ts">
	const year = new Date().getFullYear();
</script>

<footer class="footer" id="contact">
	<div class="inner">
		<div class="row">
			<a href="mailto:contact@dinofries.com" class="email">contact@dinofries.com</a>
			<span class="dot" aria-hidden="true">·</span>
			<a href="#home" class="up">back to top ↑</a>
		</div>
		<div class="meta">© {year} dinofries — <a class="credit" href="https://dinofries.com">dinofries.com</a> — made with ❤️ and 🍟 by <a class="credit" href="https://github.com/MatthewTroke" target="_blank" rel="noopener noreferrer">matthew</a></div>
	</div>
</footer>

<style>
	.footer {
		padding: 32px 24px 40px;
		background: var(--color-ink);
		color: #f0e8d8;
	}
	.inner {
		max-width: 1080px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 8px;
		text-align: center;
	}
	.row {
		display: flex;
		gap: 12px;
		align-items: center;
		flex-wrap: wrap;
		justify-content: center;
	}
	.email,
	.up {
		color: var(--color-fries-yellow);
		text-decoration: none;
		font-weight: 700;
		font-size: 15px;
	}
	.email:hover,
	.up:hover {
		text-decoration: underline;
	}
	.dot {
		opacity: 0.5;
	}
	.meta {
		font-size: 12px;
		opacity: 0.7;
	}
	.credit {
		color: var(--color-fries-yellow);
		text-decoration: underline;
		text-underline-offset: 2px;
		font-weight: 700;
	}
</style>
