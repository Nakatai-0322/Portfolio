<template>
	<router-view/>
</template>

<style>
@import url(https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap);
@import url(https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);
@import url(https://fonts.googleapis.com/css2?family=M+PLUS+1p&display=swap);

body {
	background-color: #005498;
}

#app {
	font-family: Montserrat, "M PLUS 1p", Avenir, Helvetica, Arial, sans-serif;
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
