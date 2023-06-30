<template>
	<div class="container animate__animated animate__fadeIn">
		<div class="row">
			<div class="col-md-6">
				<div class="about">
					<h1 class="line-after">About Me</h1>
					<img src="https://cdn.nakatai.ga/img/nakatai.webp" alt="Nakatai">
					<img src="https://cdn.nakatai.ga/img/nakataimc.webp" alt="NakataiMC">

					<h4 class="mt-4">Hi, there👋~</h4>
					私は、"Nakatai"（なかたい）といいます。<br>
					岐阜県出身で、現在居住しています。
					<h2>コメント</h2>
					<p></p>
					<h2>BASE Data</h2>
					<p>
						誕生日: ****年03月22日<br>
						活動日数: <span id="days"></span>日（<span id="years"></span>年）<br>
						趣味: プログラミング, ゲーム<br>
					</p>
					<h2>WORKS</h2>
					<p>
						今の仕事: 非公開（非IT）
						Web活動など: <a href="https://go.nakatai.xyz/orgs">こちら</a>をご参照ください。
					</p>
				</div>
			</div>
			<div class="col-md-6">
				<img src="https://cdn.nakatai.ga/img/header.webp" alt="Itsuka Wallpaper" class="abt-img" />
			</div>
		</div>
	</div>
</template>
<script>
export default {
	mounted() {
		let from, to, ms, days, years;
		from = new Date("2019/01/03");
		to = new Date();
		ms = to.getTime() - from.getTime();
		days = Math.floor(ms / (1000 * 60 * 60 * 24));
		years = (days / 365).toFixed(1);
		document.getElementById("days").innerHTML = days;
		document.getElementById("years").innerHTML = years;
	},
	data() {
		return {
			startYear: 2021,
			currYear: new Date().getFullYear(),
			stacks: [
				{
					language: "HTML",
					experience: "3+ Years",
					variant: "secondary",
					breif: "lorem...",
				},
				{
					language: "CSS",
					experience: "3+ Years",
					variant: "primary",
					breif: "lorem...",
				},
				{
					language: "Javascript",
					experience: "2+ Years",
					variant: "warning",
					breif: "lorem...",
				},
				{
					language: "VUE.JS",
					experience: "2+ Years",
					variant: "success",
					breif: "lorem...",
				},
				{
					language: "Node.js",
					experience: "2+ Years",
					variant: "dark",
					breif: "lorem...",
				},
			],
		};
	},
	head: {
		title: "About - Itsuka",
		meta: [
			{
				hid: "description",
				name: "description",
				// currYear - startYear
				content: `A Lightweight and Stable Discord Music Bot For Your Daily Production.`,
			},
		],
	},
};
</script>
<style scoped>
.container {
	margin-top: 140px;
	text-align: left;
}

.line-after {
	overflow: hidden;
}

.line-after::after {
	content: "";
	display: inline-block;
	height: 0.5em;
	vertical-align: bottom;
	width: 100%;
	margin-right: -100%;
	margin-left: 10px;
	border-top: 2px solid rgb(211, 46, 46);
}

.abt-img {
	width: inherit;
	height: inherit;
	border-radius: 5px;
}

/* .abt-img:hover {
  animation: swing;
  animation-duration: 2s;
} */
</style>
