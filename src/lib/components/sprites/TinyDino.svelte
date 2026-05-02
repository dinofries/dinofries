<script lang="ts">
	type Props = { size?: number; color?: string; class?: string };
	let { size = 40, color = '#A8D87A', class: klass = '' }: Props = $props();
</script>

<svg viewBox="0 0 40 40" width={size} height={size} class={klass} aria-hidden="true">
	<path d="M10 18 L12 13 L15 18 Z M17 16 L20 11 L23 16 Z" fill="#7AB85A" />
	<ellipse cx="20" cy="24" rx="14" ry="12" fill={color} stroke="#3d5a2a" stroke-width="1.8" />
	<ellipse cx="14" cy="22" rx="1.4" ry="1.8" fill="#2a3a1a" />
	<ellipse cx="26" cy="22" rx="1.4" ry="1.8" fill="#2a3a1a" />
	<ellipse cx="11" cy="26" rx="2" ry="1.3" fill="#FFB6C1" opacity="0.7" />
	<ellipse cx="29" cy="26" rx="2" ry="1.3" fill="#FFB6C1" opacity="0.7" />
	<path
		d="M17 28 Q20 30 23 28"
		stroke="#3d5a2a"
		stroke-width="1.4"
		fill="none"
		stroke-linecap="round"
	/>
</svg>
