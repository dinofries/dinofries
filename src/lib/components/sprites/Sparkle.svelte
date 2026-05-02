<script lang="ts">
	type Props = { size?: number; color?: string; class?: string };
	let { size = 16, color = '#FFD93D', class: klass = '' }: Props = $props();
</script>

<svg viewBox="0 0 16 16" width={size} height={size} class={klass} aria-hidden="true">
	<path
		d="M8 0 L9.5 6.5 L16 8 L9.5 9.5 L8 16 L6.5 9.5 L0 8 L6.5 6.5 Z"
		fill={color}
		stroke="#3d5a2a"
		stroke-width="0.8"
	/>
</svg>
