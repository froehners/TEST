<template>
    <footer class="footer">
        <div class="container">
            <span v-html="settings.footer" />
            <p>Lovingly built with Forestry, Netlify & Gridsome. Designed in Figma.</p>
        </div>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            settings: require("../../data/theme.json")
        }
    }
}
</script>

<style scoped>
.footer {
    font-size: 0.875rem;
    font-weight: 700;
    padding: 6rem 0;
}
</style>
