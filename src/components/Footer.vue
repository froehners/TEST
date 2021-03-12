<template>
    <footer class="footer">
        <div class="container">
            <span v-html="settings.footer" />
            <p>Lovingly built with <a href="https://forestry.io/" target="_blank">Forestry</a>, <a href="https://www.netlify.com/" target="_blank">Netlify</a>, & <a href="https://gridsome.org/" target="_blank">Gridsome</a>. Designed in <a href="https://www.figma.com/file/tD7k741tWE0gOv1Hv4yEn0/2021-Working?node-id=33%3A5" target="_blank">Figma</a>.</p>
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

.footer p {
    font-size: 0.875rem;
    margin-top: 0;
    float: right;
}

.footer a {
    color: var(--color-contrast-3);
    text-decoration: none;
    padding-bottom: 4px;
    border-bottom: 2px solid;
    border-color: transparent;
    transition: border 0.15s;
}

.footer a:hover {
    border-color: var(--color-base-3);
}
</style>
