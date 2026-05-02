<script lang="ts">
	type Props = { size?: number; class?: string };
	let { size = 60, class: klass = '' }: Props = $props();
</script>

<svg
	viewBox="0 0 16 16"
	width={size}
	height={size}
	class={klass}
	shape-rendering="crispEdges"
	aria-hidden="true"
>
	<rect x="4" y="2" width="2" height="6" fill="#FFD93D" />
	<rect x="7" y="1" width="2" height="7" fill="#FFD93D" />
	<rect x="10" y="3" width="2" height="5" fill="#FFD93D" />
	<rect x="4" y="1" width="1" height="1" fill="#FFE680" />
	<rect x="7" y="0" width="1" height="1" fill="#FFE680" />
	<rect x="2" y="8" width="12" height="1" fill="#3d5a2a" />
	<rect x="2" y="9" width="12" height="6" fill="#E55934" />
	<rect x="2" y="15" width="12" height="1" fill="#3d5a2a" />
	<rect x="2" y="9" width="1" height="6" fill="#3d5a2a" />
	<rect x="13" y="9" width="1" height="6" fill="#3d5a2a" />
	<rect x="4" y="10" width="8" height="2" fill="#FFD93D" />
	<rect x="4" y="10" width="8" height="1" fill="#FFE680" />
</svg>
