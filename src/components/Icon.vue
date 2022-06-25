<template>
    <div class="img_container">
    <img src="https://cdn.nakatai.ga/img/nakataimc.webp" alt="Nakatai MC Icon" width="200" height="200">
    <img src="https://cdn.nakatai.ga/img/nakatai.webp" alt="Nakatai Icon" width="200" height="200">
    </div>
</template>

<script>
export default {
    name: "IconComp"
};
</script>

<style scoped>
.img_container {
    width: 70%;
    height: 70%;
    margin: 50px auto;
    position: relative;
    overflow: hidden;
}

img:nth-child(2) {
    cursor: pointer;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.img_container:hover img:nth-child(2) {
    opacity: 0;
    transition: opacity 1s;
}
</style>
