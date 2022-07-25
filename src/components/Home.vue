<template>
    <div class="wrapper">
        <div class="container">
            <span class="nkttxt">Nakatai</span>
            <div class="btn" id="aboutlink">
                <img src="https://cdn.nakatai.ga/img/nakatai.webp" alt="Nakatai" class="B">
                <img src="https://cdn.nakatai.ga/img/nakataimc.webp" alt="MC Nakatai" class="A">
            </div>
            <Typed :options="options">
                <h1 class="typing"></h1>
            </Typed>
        </div>
    </div>
</template>

<script>
import { Typed } from "@duskmoon/vue3-typed-js";

const TypedOptions = {
    strings: ["Hello", "World", "This is vue3-typed-js"],
    loop: true,
    typeSpeed: 30,
};

export default {
    name: 'HomeComp',
    components: {},
    mounted: function () {
        window.addEventListener("click", function () {
            this.window.location.href = "/about";
        });
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
    -webkit-transition: .4s ease-in-out;
    transition: .4s ease-in-out;
}

.btn:hover img:nth-of-type(2) {
    -webkit-transform: translate(-50%, -50%) scale(.8) !important;
    transform: translate(-50%, -50%) scale(.8) !important;
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
