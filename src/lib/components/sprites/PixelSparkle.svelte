<script lang="ts">
	type Props = { size?: number; color?: string; class?: string };
	let { size = 12, color = '#FFD93D', class: klass = '' }: Props = $props();
</script>

<svg
	viewBox="0 0 12 12"
	width={size}
	height={size}
	class={klass}
	shape-rendering="crispEdges"
	aria-hidden="true"
>
	<rect x="5" y="0" width="2" height="2" fill={color} />
	<rect x="5" y="10" width="2" height="2" fill={color} />
	<rect x="0" y="5" width="2" height="2" fill={color} />
	<rect x="10" y="5" width="2" height="2" fill={color} />
	<rect x="4" y="4" width="4" height="4" fill={color} />
	<rect x="3" y="3" width="1" height="1" fill={color} opacity="0.5" />
	<rect x="8" y="3" width="1" height="1" fill={color} opacity="0.5" />
	<rect x="3" y="8" width="1" height="1" fill={color} opacity="0.5" />
	<rect x="8" y="8" width="1" height="1" fill={color} opacity="0.5" />
</svg>
