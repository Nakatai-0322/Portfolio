<template>
	<router-view/>
</template>

<style>
@import url(https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap);
@import url(https://fonts.googleapis.com/css2?family=Montserrat&display=swap);
@import url(https://fonts.googleapis.com/css2?family=M+PLUS+1p&display=swap);

body {
	background-color: #005498;
}

#app {
	font-family: "M PLUS 1p", Montserrat, Avenir, Helvetica, Arial, sans-serif;
    font-weight: 500;
	-webkit-font-smoothing: auto;
	-moz-osx-font-smoothing: auto;
	text-align: center;
	color: #fff;
    transform: rotate(0.05deg);
}

nav {
	padding: 30px;
}

nav a {
	font-weight: bold;
	color: #2c3e50;
}

nav a router-link-exact-active {
	color: #42b983;
}
</style>
