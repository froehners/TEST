<template>
    <div 
        class="journal-content"
        v-html="content"
    />
</template>

<script>
export default {
    props: {
        content: String
    }
}
</script>

<style>
p {
    line-height: 1.5;
    font-size: 1.5rem;
}
h1 {
    font-family: 'Pirata One', cursive;
    font-size: 2rem;
}
h2 {
    font-size: 1.5rem;
    font-weight: 400;
}
h3 {
    font-family: 'Pirata One', cursive;
    font-size: 1.5rem;
    font-weight:400;
}
h4, h5, h6 {
    font-size: 1.333rem;
    font-weight: 700;
}
</style>
