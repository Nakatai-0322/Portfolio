<template>
	<div class="desp">
		私は、"Nakatai"（なかたい）といいます。<br>
		岐阜県出身で、現在居住しています。<br>
		年齢は██歳、誕生日は3月22日です。
		<h1>Who am I?</h1>
		<p>
			<img src="https://cdn.nakatai.ga/img/nakatai.webp" width="300px"><br>
			Nakatai
		</p>
		<h2>コメント</h2>
		<p>

		</p>
		<h2>BASE Data</h2>
		<p>
			誕生日: ████-03-22<br>
			活動日数: <span id="days"></span>日（<span id="years"></span>年）<br>
			趣味: プログラミング, ゲーム<br>
		</p>
		<h2>WORKS</h2>
		<p>
			今の仕事: 非公開（非IT）
			Web活動など: <a href="https://go.nakatai.ga/orgs">こちら</a>をご参照ください。
		</p>
	</div>
</template>

<script>
export default {
	name: "AboutDesc",
	mounted() {
		let from, to, ms, days, years;
		from = new Date("2019/01/03");
		to = new Date();
		ms = to.getTime() - from.getTime();
		days = Math.floor(ms / (1000 * 60 * 60 * 24));
		years = (days / 365).toFixed(1);

		document.getElementById("days").innerHTML = days;
		document.getElementById("years").innerHTML = years;
	}
}
</script>

<style scoped>
.desp {
	color: white;
}

h1 {
	font-size: 2.5rem;
}

h2 {
	font-size: 2rem;
	font-weight: 700;
}
</style>
