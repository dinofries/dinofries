<script lang="ts">
	type Props = {
		size?: number;
		holding?: boolean;
		mood?: 'happy' | 'flat';
		class?: string;
	};
	let { size = 120, holding = true, mood = 'happy', class: klass = '' }: Props = $props();
</script>

<svg viewBox="0 0 120 120" width={size} height={size} class={klass} aria-hidden="true">
	<path d="M30 52 L34 42 L40 52 Z M44 46 L50 36 L56 46 Z M60 44 L68 34 L74 44 Z" fill="#7AB85A" />
	<ellipse cx="60" cy="80" rx="38" ry="32" fill="#A8D87A" />
	<ellipse cx="60" cy="80" rx="38" ry="32" fill="none" stroke="#3d5a2a" stroke-width="2.5" />
	<ellipse cx="60" cy="88" rx="22" ry="18" fill="#E8F4D0" />
	<ellipse cx="60" cy="52" rx="34" ry="30" fill="#A8D87A" stroke="#3d5a2a" stroke-width="2.5" />
	<ellipse cx="36" cy="58" rx="6" ry="4" fill="#FFB6C1" opacity="0.7" />
	<ellipse cx="84" cy="58" rx="6" ry="4" fill="#FFB6C1" opacity="0.7" />
	<ellipse cx="48" cy="50" rx="3.5" ry="4.5" fill="#2a3a1a" />
	<ellipse cx="72" cy="50" rx="3.5" ry="4.5" fill="#2a3a1a" />
	<circle cx="49" cy="48" r="1.2" fill="#fff" />
	<circle cx="73" cy="48" r="1.2" fill="#fff" />
	{#if mood === 'happy'}
		<path
			d="M54 62 Q60 67 66 62"
			stroke="#3d5a2a"
			stroke-width="2"
			fill="none"
			stroke-linecap="round"
		/>
	{/if}
	{#if holding}
		<g>
			<path d="M40 78 L80 78 L76 108 L44 108 Z" fill="#E55934" stroke="#3d5a2a" stroke-width="2" />
			<rect
				x="44"
				y="83"
				width="32"
				height="6"
				fill="#FFD93D"
				stroke="#3d5a2a"
				stroke-width="1.5"
				rx="1"
			/>
			<rect
				x="46"
				y="62"
				width="4"
				height="22"
				fill="#FFD93D"
				stroke="#3d5a2a"
				stroke-width="1.5"
				rx="1"
			/>
			<rect
				x="53"
				y="56"
				width="4"
				height="28"
				fill="#FFD93D"
				stroke="#3d5a2a"
				stroke-width="1.5"
				rx="1"
			/>
			<rect
				x="60"
				y="60"
				width="4"
				height="24"
				fill="#FFD93D"
				stroke="#3d5a2a"
				stroke-width="1.5"
				rx="1"
			/>
			<rect
				x="67"
				y="54"
				width="4"
				height="30"
				fill="#FFD93D"
				stroke="#3d5a2a"
				stroke-width="1.5"
				rx="1"
			/>
		</g>
	{/if}
</svg>
