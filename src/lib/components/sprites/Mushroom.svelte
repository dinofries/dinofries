<script lang="ts">
	type Props = { size?: number; class?: string };
	let { size = 60, class: klass = '' }: Props = $props();
</script>

<svg viewBox="0 0 60 60" width={size} height={size} class={klass} aria-hidden="true">
	<path
		d="M8 30 Q8 12 30 12 Q52 12 52 30 L52 34 L8 34 Z"
		fill="#E58B4A"
		stroke="#3d5a2a"
		stroke-width="2"
	/>
	<ellipse cx="20" cy="22" rx="4" ry="3" fill="#FFE4C0" />
	<ellipse cx="36" cy="20" rx="5" ry="3.5" fill="#FFE4C0" />
	<ellipse cx="44" cy="28" rx="3" ry="2" fill="#FFE4C0" />
	<rect
		x="18"
		y="34"
		width="24"
		height="18"
		fill="#F5E6D3"
		stroke="#3d5a2a"
		stroke-width="2"
		rx="2"
	/>
	<ellipse cx="24" cy="42" rx="1.5" ry="2" fill="#2a3a1a" />
	<ellipse cx="36" cy="42" rx="1.5" ry="2" fill="#2a3a1a" />
	<rect x="18" y="50" width="8" height="4" fill="#3d5a2a" rx="1" />
	<rect x="34" y="50" width="8" height="4" fill="#3d5a2a" rx="1" />
</svg>
