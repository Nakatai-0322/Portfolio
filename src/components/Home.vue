<template>
	<div class="wrapper">
		<div class="container">
			<span class="nkttxt">Nakatai</span>
			<div class="typed-div">I'm <span class="typed"></span>.</div>
			<div class="btn" id="aboutlink">
				<img
					src="https://cdn.nakatai.ga/img/nakatai.webp"
					alt="Nakatai"
					class="B"
				/>
				<img
					src="https://cdn.nakatai.ga/img/nakataimc.webp"
					alt="MC Nakatai"
					class="A"
				/>
			</div>
			<br />
		</div>
	</div>
</template>

<script>
export default {
	name: "HomeComp",
	components: {},
	mounted: function () {
		const abouttarget = document.getElementById("aboutlink");
		abouttarget.addEventListener("click", function () {
			window.location.href = "/about";
		});
		var typed = new Typed("span.typed", {
			strings: ["a apprenticing web developer", "a gamer"],
			loop: true,
			typeSpeed: 100,
		});
	},
};
</script>

<style scoped>
.typed-div {
	display: inline-block;
	font-size: 30pt;
}

.wrapper {
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
}

.container {
	display: inline-flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}

.nkttxt {
	font-family: "Montserrat Black";
	font-size: 50px;
}

.btn {
	position: relative;
	width: 300px;
	height: 300px;
	margin: 0 auto;
	display: block;
	border-radius: 12px;
	overflow: hidden;
	cursor: pointer;
}

.btn img {
	position: absolute;
	top: 50%;
	left: 50%;
	-webkit-transform: translate(-50%, -50%);
	transform: translate(-50%, -50%);
	width: 100%;
	display: block;
	-webkit-transition: 0.4s ease-in-out;
	transition: 0.4s ease-in-out;
}

.btn:hover img:nth-of-type(2) {
	-webkit-transform: translate(-50%, -50%) scale(0.8) !important;
	transform: translate(-50%, -50%) scale(0.8) !important;
	opacity: 0;
}

.icon {
	position: relative;
}

.links {
	color: white;
	font-size: 150%;
	margin-top: 5px;
}

.links a {
	margin: 0% 10px;
}

h3 {
	margin: 40px 0 0;
}

ul {
	list-style-type: none;
	padding: 0;
}

li {
	display: inline-block;
	margin: 0 10px;
}

a {
	color: #42b983;
}
</style>
