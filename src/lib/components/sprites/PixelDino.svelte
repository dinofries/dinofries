<script lang="ts">
	type Props = { size?: number; class?: string };
	let { size = 80, class: klass = '' }: Props = $props();
</script>

<svg
	viewBox="0 0 20 20"
	width={size}
	height={size}
	class={klass}
	shape-rendering="crispEdges"
	aria-hidden="true"
>
	<rect x="6" y="3" width="1" height="1" fill="#7AB85A" />
	<rect x="9" y="2" width="1" height="1" fill="#7AB85A" />
	<rect x="12" y="3" width="1" height="1" fill="#7AB85A" />
	<rect x="4" y="4" width="12" height="1" fill="#3d5a2a" />
	<rect x="3" y="5" width="1" height="6" fill="#3d5a2a" />
	<rect x="16" y="5" width="1" height="6" fill="#3d5a2a" />
	<rect x="4" y="5" width="12" height="6" fill="#A8D87A" />
	<rect x="6" y="7" width="2" height="2" fill="#2a3a1a" />
	<rect x="12" y="7" width="2" height="2" fill="#2a3a1a" />
	<rect x="7" y="7" width="1" height="1" fill="#fff" />
	<rect x="13" y="7" width="1" height="1" fill="#fff" />
	<rect x="5" y="9" width="1" height="1" fill="#FFB6C1" />
	<rect x="14" y="9" width="1" height="1" fill="#FFB6C1" />
	<rect x="4" y="11" width="12" height="1" fill="#3d5a2a" />
	<rect x="3" y="11" width="1" height="5" fill="#3d5a2a" />
	<rect x="16" y="11" width="1" height="5" fill="#3d5a2a" />
	<rect x="4" y="12" width="12" height="4" fill="#A8D87A" />
	<rect x="6" y="13" width="8" height="2" fill="#E8F4D0" />
	<rect x="4" y="16" width="3" height="1" fill="#3d5a2a" />
	<rect x="13" y="16" width="3" height="1" fill="#3d5a2a" />
</svg>
