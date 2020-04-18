<template>
  <div>
    <Header />
    <nuxt class="container" />
    <Footer />
  </div>
</template>

<script>

import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

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
  font-family: "Open Sans", "Arial Narrow", Arial, sans-serif;
}

@font-face {
  font-family: "Uni Sans";
  src: local("Uni Sans Heavy"), local("UniSansHeavy"),
    url("../assets/fonts/UniSans.woff2") format("woff2");
  font-weight: 900;
  font-style: normal;
}

.container{
    min-height: calc(100vh - 365px);
}

a.link {
  position: relative;
  text-decoration: none;
  color: #cd6e57;
  -webkit-transition: color .15s ease-in;
  -moz-transition: color .15s ease-in;
  -o-transition: color .15s ease-in;
  transition: color .15s ease-in;
}

a.link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 50%;
  width: 100%;
  height: 1px;
  background-color: #cd6e57;
  -webkit-transition: -webkit-transform 250ms;
  transition: -webkit-transform 250ms;
  transition: transform 250ms;
  transition: transform 250ms, -webkit-transform 250ms;
  -webkit-transform: translateX(-50%) scaleX(0);
  transform: translateX(-50%) scaleX(0);
  -webkit-transform-origin: 50% 50%;
  transform-origin: 50% 50%;
}

a.link:hover::after {
  text-transform: none;
  -webkit-transform: translateX(-50%) scaleX(1);
  transform: translateX(-50%) scaleX(1);
}
</style>
