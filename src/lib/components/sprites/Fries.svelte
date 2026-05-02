<script lang="ts">
	type Props = { size?: number; class?: string };
	let { size = 80, class: klass = '' }: Props = $props();
</script>

<svg viewBox="0 0 80 80" width={size} height={size} class={klass} aria-hidden="true">
	<rect
		x="22"
		y="14"
		width="6"
		height="40"
		fill="#FFD93D"
		stroke="#3d5a2a"
		stroke-width="1.8"
		rx="1.5"
	/>
	<rect
		x="32"
		y="8"
		width="6"
		height="46"
		fill="#FFD93D"
		stroke="#3d5a2a"
		stroke-width="1.8"
		rx="1.5"
	/>
	<rect
		x="42"
		y="12"
		width="6"
		height="42"
		fill="#FFD93D"
		stroke="#3d5a2a"
		stroke-width="1.8"
		rx="1.5"
	/>
	<rect
		x="52"
		y="6"
		width="6"
		height="48"
		fill="#FFD93D"
		stroke="#3d5a2a"
		stroke-width="1.8"
		rx="1.5"
	/>
	<path d="M14 44 L66 44 L60 74 L20 74 Z" fill="#E55934" stroke="#3d5a2a" stroke-width="2" />
	<rect
		x="20"
		y="50"
		width="40"
		height="6"
		fill="#FFD93D"
		stroke="#3d5a2a"
		stroke-width="1.5"
		rx="1"
	/>
</svg>
