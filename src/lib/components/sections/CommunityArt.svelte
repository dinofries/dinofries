<script lang="ts">
	import { communityArt } from '$lib/data/community-art';

	const placeholderCount = 6;
	const placeholderSlots = Array.from({ length: placeholderCount }, (_, i) => i);
	const slotLabels = [
		'your art here',
		'open slot!',
		'submit yours',
		'???',
		'add one!',
		'free spot'
	];
</script>

<section class="community" id="art">
	<div class="inner">
		<header class="header">
			<span class="kicker">★ community wall ★</span>
			<p>submit your art to get featured here</p>
		</header>

		{#if communityArt.length > 0}
			<div class="grid">
				{#each communityArt as piece (piece.id)}
					<figure class="art-card" style:--tilt="{piece.rotate ?? 0}deg">
						<div class="frame">
							<img
								src={piece.image}
								alt={piece.caption ?? `art by ${piece.artist}`}
								loading="lazy"
							/>
						</div>
						<figcaption>
							<span class="credit-label">art by</span>
							<span class="artist">
								{#if piece.link}
									<a href={piece.link} target="_blank" rel="noopener noreferrer">{piece.artist}</a>
								{:else}
									{piece.artist}
								{/if}
							</span>
							{#if piece.handle && piece.link}
								<a class="handle" href={piece.link} target="_blank" rel="noopener noreferrer">
									{piece.handle}
								</a>
							{:else if piece.handle}
								<span class="handle">{piece.handle}</span>
							{/if}
							{#if piece.commissionedBy}
								<span class="commission">
									commissioned by
									{#if piece.commissionedByLink}
										<a href={piece.commissionedByLink} target="_blank" rel="noopener noreferrer">
											{piece.commissionedBy}
										</a>
									{:else}
										<strong>{piece.commissionedBy}</strong>
									{/if}
								</span>
							{/if}
							{#if piece.caption}
								<span class="caption">{piece.caption}</span>
							{/if}
						</figcaption>
					</figure>
				{/each}
			</div>
		{:else}
			<div class="empty-grid">
				{#each placeholderSlots as i (i)}
					<div class="slot" style:--tilt="{(i % 2 === 0 ? -1 : 1) * 1.5}deg">
						<div class="slot-mark" aria-hidden="true">?</div>
						<div class="slot-tag">{slotLabels[i % slotLabels.length]}</div>
					</div>
				{/each}
			</div>
			<p class="empty-msg">
				<strong>no submissions yet!</strong> be the first dino-friend on the wall.
			</p>
		{/if}

	</div>
</section>

<style>
	.community {
		padding: 80px 24px 64px;
		background: var(--color-page);
	}
	.inner {
		max-width: 1080px;
		margin: 0 auto;
	}

	.header {
		text-align: center;
		margin-bottom: 36px;
	}
	.kicker {
		font-family: var(--font-hand);
		font-size: 26px;
		color: var(--color-fries-red);
		font-weight: 700;
		display: inline-block;
		transform: rotate(-2deg);
	}
	.header p {
		font-size: 15px;
		line-height: 1.55;
		max-width: 560px;
		margin: 0 auto;
		color: #4a6a3a;
	}

	.grid,
	.empty-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(180px, 220px));
		justify-content: center;
		gap: 20px;
		margin-bottom: 28px;
	}

	.art-card {
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 8px;
		transform: rotate(var(--tilt));
		transition: transform 0.15s ease;
	}
	.art-card:hover {
		transform: rotate(0) translateY(-3px);
	}
	.frame {
		aspect-ratio: 1;
		background: #fff;
		border: 3px solid var(--color-ink);
		border-radius: 14px;
		padding: 8px;
		box-shadow: 0 4px 0 rgba(61, 90, 42, 0.18);
		overflow: hidden;
	}
	.frame img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 8px;
		display: block;
	}
	figcaption {
		display: flex;
		flex-direction: column;
		gap: 2px;
		padding: 0 4px;
	}
	.credit-label {
		font-size: 11px;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.5px;
		color: rgba(61, 90, 42, 0.55);
	}
	.artist {
		font-size: 15px;
		font-weight: 700;
		color: var(--color-ink);
		line-height: 1.1;
	}
	.artist a {
		color: inherit;
		text-decoration: none;
	}
	.artist a:hover {
		text-decoration: underline;
	}
	.handle {
		font-size: 12px;
		font-weight: 600;
		color: var(--color-fries-red);
		text-decoration: none;
	}
	.handle:hover {
		text-decoration: underline;
	}
	.commission {
		font-size: 12px;
		font-weight: 600;
		color: #6a7a5a;
		margin-top: 2px;
	}
	.commission strong,
	.commission a {
		color: var(--color-fries-red);
		font-weight: 700;
		text-decoration: none;
	}
	.commission a:hover {
		text-decoration: underline;
	}
	.caption {
		font-size: 12px;
		color: #6a7a5a;
		font-style: italic;
	}

	.slot {
		aspect-ratio: 1;
		background: #fff;
		border: 3px dashed var(--color-ink);
		border-radius: 14px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 4px;
		transform: rotate(var(--tilt));
		transition: all 0.2s ease;
	}
	.slot:hover {
		transform: rotate(0);
		background: var(--color-link-hover);
	}
	.slot-mark {
		font-size: 56px;
		font-weight: 800;
		color: var(--color-ink);
		opacity: 0.25;
		line-height: 1;
	}
	.slot-tag {
		font-family: var(--font-hand);
		font-size: 22px;
		font-weight: 700;
		color: var(--color-ink);
		opacity: 0.7;
		transform: rotate(-3deg);
	}

	.empty-msg {
		text-align: center;
		font-size: 14px;
		color: #4a6a3a;
		margin: 0 0 28px;
	}
	.empty-msg strong {
		color: var(--color-fries-red);
	}

</style>
