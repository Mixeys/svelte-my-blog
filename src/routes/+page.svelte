<script lang="ts">
	import { onMount } from 'svelte';

	let canvas: HTMLCanvasElement | null = $state(null);
	let ctx: CanvasRenderingContext2D | null = $state(null);
	let x = $state(20);
	let speed = $state(2);
	let isAnimation = $state(false);
	let animationFrameId: number;
	// let radius: number = $state(50);
	// let color: string = $state('red');
	// let colors: string[] = [
	// 	'red',
	// 	'green',
	// 	'blue',
	// 	'yellow',
	// 	'purple',
	// 	'orange',
	// 	'pink',
	// 	'brown',
	// 	'black',
	// 	'gray'
	// ];

	onMount(() => {
		if (canvas) {
			ctx = canvas.getContext('2d');
			// animation();
		}
	});

	function animation() {
		if (ctx && canvas) {
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			ctx.beginPath();
			ctx.arc(x, 200, 20, 0, 2 * Math.PI);
			ctx.fillStyle = 'red';
			ctx.fill();

			x += speed;

			if (x + 20 > canvas.width || x - 20 < 0) {
				speed = -speed;
			}

			animationFrameId = requestAnimationFrame(animation);
		}
	}

	function animationToggle() {
		isAnimation = !isAnimation;

		if (isAnimation) {
			animation();
		} else {
			cancelAnimationFrame(animationFrameId);
		}
	}

	// $effect(() => {
	// 	if (canvas) {
	// 		ctx = canvas.getContext('2d');
	// 		if (ctx) {
	// ctx.font = '20px Arial';
	// ctx.fillStyle = color;
	// ctx.fillText('Hello, Canvas!', 50, 50);
	// ctx.fillStyle = 'blue';
	// ctx.fillRect(50, 50, 100, 80);
	// ctx.lineWidth = 2;
	// ctx.strokeStyle = 'black';
	// ctx.strokeRect(150, 150, 100, 80);
	// ctx.beginPath();
	// ctx.moveTo(50, 200);
	// ctx.lineTo(200, 200);
	// ctx.stroke();
	// ctx.beginPath();
	// ctx.arc(canvas.width / 2, canvas.height / 2, radius, 0, 2 * Math.PI);
	// ctx.fillStyle = color;
	// ctx.fill();
	// ctx.clearRect(0, 0, canvas.width, canvas.height);

	// 		}
	// 	}
	// });

	// function increment() {
	// 	radius += 10;
	// 	color = colors[Math.floor(Math.random() * colors.length)];
	// }
</script>

<svelte:head>
	<title>Home | My Blog</title>
</svelte:head>

<h1 class="mb-5 text-center text-3xl">Welcome to Canvas</h1>
<canvas bind:this={canvas} width="500" height="500"></canvas>

<!-- <button onclick={increment}>Increment</button> -->
<button onclick={animationToggle}>Toggle Animation</button>

<style>
	canvas {
		border: 1px solid black;
	}
</style>
