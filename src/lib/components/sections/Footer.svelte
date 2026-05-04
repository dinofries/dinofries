<script lang="ts">
	const year = new Date().getFullYear();
</script>

<footer class="footer" id="contact">
	<div class="inner">
		<a href="mailto:contact@dinofries.com" class="email">contact@dinofries.com</a>
		<span class="dash" aria-hidden="true">—</span>
		<span class="muted">© {year} dinofries</span>
		<span class="dash" aria-hidden="true">—</span>
		<a class="link" href="https://dinofries.com">dinofries.com</a>
		<span class="dash" aria-hidden="true">—</span>
		<span class="muted">made with ❤️ and 🍟 by</span>
		<a class="link" href="https://github.com/MatthewTroke" target="_blank" rel="noopener noreferrer">matthew</a>
	</div>
</footer>

<style>
	.footer {
		padding: 20px 24px;
		background: var(--color-ink);
		color: #f0e8d8;
	}
	.inner {
		max-width: 1180px;
		margin: 0 auto;
		display: flex;
		flex-wrap: nowrap;
		align-items: center;
		justify-content: center;
		gap: 8px;
		text-align: center;
		font-size: 14px;
		white-space: nowrap;
	}
	.email,
	.link {
		color: var(--color-fries-yellow);
		text-decoration: none;
		font-weight: 700;
	}
	.email:hover,
	.link:hover {
		text-decoration: underline;
	}
	.muted {
		opacity: 0.85;
	}
	.dash {
		opacity: 0.5;
	}

	@media (max-width: 720px) {
		.inner {
			flex-wrap: wrap;
			gap: 6px;
			font-size: 12px;
			white-space: normal;
		}
	}
</style>
