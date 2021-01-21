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
    Footer,
  },
  head: {
    meta: [
      // OpenGraph data (Most widely used)
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:locale', property: 'og:locale', content: 'fr_FR' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'DraftMan.fr' },
      {
        hid: 'og:image',
        property: 'og:image',
        content: `${process.env.BASE_URL}/images/me.png`,
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: `${process.env.BASE_URL}/images/me.png`,
      },

      // Twitter card
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@DraftMan_Dev' },
      {
        hid: 'twitter:creator',
        name: 'twitter:creator',
        content: '@DraftMan_Dev',
      },
      {
        hid: 'twitter:image:src',
        name: 'twitter:image:src',
        content: `${process.env.BASE_URL}/images/me.png`,
      },

      // Google / Schema.org markup:
      { itemprop: 'image', content: `${process.env.BASE_URL}/images/me.png` },
    ],
  },
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  font-family: 'Open Sans', 'Arial Narrow', Arial, sans-serif;
}

@font-face {
  font-family: 'Uni Sans';
  src: url('../assets/fonts/UniSans.woff2') format('woff2'),
    url('../assets/fonts/UniSans.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

.container {
  min-height: calc(100vh - 365px);
  @media screen and (max-width: $phone) {
    padding-top: 70px;
  }
}

a.link {
  position: relative;
  text-decoration: none;
  color: #cd6e57;
  -webkit-transition: color 0.15s ease-in;
  -moz-transition: color 0.15s ease-in;
  -o-transition: color 0.15s ease-in;
  transition: color 0.15s ease-in;
  &::after {
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
  &:hover::after {
    text-transform: none;
    -webkit-transform: translateX(-50%) scaleX(1);
    transform: translateX(-50%) scaleX(1);
  }
}
</style>
