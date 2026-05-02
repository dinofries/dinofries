<script lang="ts">
	type Props = { size?: number; class?: string };
	let { size = 100, class: klass = '' }: Props = $props();
</script>

<svg
	viewBox="0 0 100 60"
	width={size}
	height={size * 0.6}
	class={klass}
	aria-hidden="true"
	preserveAspectRatio="xMidYMid meet"
>
	<path
		d="M20 40 L20 30 L30 30 L30 20 L50 20 L50 15 L70 15 L70 25 L80 25 L80 35 L90 35 L90 45 L10 45 L10 40 Z"
		fill="#fff"
		stroke="#B8D4E8"
		stroke-width="1.5"
	/>
</svg>
