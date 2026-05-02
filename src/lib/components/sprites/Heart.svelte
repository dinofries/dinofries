<script lang="ts">
	type Props = { size?: number; color?: string; class?: string };
	let { size = 18, color = '#FF8FB1', class: klass = '' }: Props = $props();
</script>

<svg viewBox="0 0 18 18" width={size} height={size} class={klass} aria-hidden="true">
	<path
		d="M9 16 C9 16 1.5 11 1.5 6 C1.5 3.5 3.5 2 5.5 2 C7 2 8.5 3 9 4.5 C9.5 3 11 2 12.5 2 C14.5 2 16.5 3.5 16.5 6 C16.5 11 9 16 9 16 Z"
		fill={color}
		stroke="#3d5a2a"
		stroke-width="1.2"
	/>
</svg>
