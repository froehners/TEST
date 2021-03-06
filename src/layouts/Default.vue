<template>
  <div class="layout" :class="{ 'sticky-header': $route.path === '/' }">
    <Header />
    <slot/>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default {
  components: {
    Header,
    Footer
  }
}
</script>


<style>
* {
  box-sizing: border-box;
}

body {
  --color-base-1: rgb(0, 0, 0);
  --color-base-2: rgb(255, 230, 230);
  --color-base-3: rgb(189, 240, 231);
  --color-contrast-1: rgb(0, 20, 9);
  --color-contrast-50: rgb(128, 138, 132);
  --color-contrast-2: rgb(0, 82, 35);
  --color-contrast-3: rgb(255, 140, 140);
  font-family: 'Cabin', sans-serif;
  margin:0;
  padding: 0;
  font-size: 24px;
  background: var(--color-base-1);
  color: var(--color-contrast-1);
  transition: background 0.5s ease;
}

h1 {
  letter-spacing: -0.01em;
  font-family: 'Cabin', sans-serif;
}

.layout {
  padding: 0;
}

.layout.sticky-header {
  padding: 6rem 0 0 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

@media (min-width: 860px) {
  .container {
    padding: 0 6rem;
  }
}

a {
  color: var(--color-contrast-2);
}

img {
  max-width: 100%;
}

.label {
  display: block;
  margin-bottom: 0.5rem;
}
</style>
