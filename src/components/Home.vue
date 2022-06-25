<template>
    <div class="center">
        <h1 style="font-size: 60px;">Nakatai</h1>
        <IconComp />
    </div>
</template>

<script>
import IconComp from "./Icon.vue"

export default {
    name: 'HomeComp',
    components: {
        IconComp
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#app {
    padding: 20px;
    /* 余白指定 */
    background-color: #ddd;
    /* 背景色指定 */
    height: 300px;
    /* 高さ指定 */
    width: 640px;
    /* 幅指定 */
    position: relative;
    /* 位置指定の基準点にする */
}

.center {
    background-color: #2196F3;
    /* 背景色指定 */
    position: absolute;
    /* 位置指定 */
    padding: 20px;
    /* 余白指定 */
    top: 0;
    /* 位置指定 */
    bottom: 0;
    /* 位置指定 */
    left: 0;
    /* 位置指定 */
    right: 0;
    /* 位置指定 */
    margin: auto;
    /* 中央寄せ */
    width: 150px;
    /* 幅指定 */
    height: 80px;
    /* 高さ指定 */
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
