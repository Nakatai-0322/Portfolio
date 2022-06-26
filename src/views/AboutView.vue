<template>
    <div class="about">
        <h1>「なかたい」って何者？</h1>
        <AboutDesc/>
    </div>
</template>

<script>
import AboutDesc from "@/components/AboutDesc.vue"

export default {
    name: "AboutView",
    components: {
        AboutDesc
    }
}
</script>
