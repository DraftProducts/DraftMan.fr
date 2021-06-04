<i18n global>
{
  "fr": {
    "raw_title": "DraftMan - Développeur JS Full-Stack",
    "description": "DraftMan, Développeur Javascript Full-Stack passionné par le design et l'ergonomie"
  },
  "nl": {
    "raw_title": "DraftMan - Full-Stack JavaScript Developer",
    "description": "DraftMan, Full-Stack Javascript Developer met passie voor design en ergonomie"
  }
}
</i18n>

<template>
  <div>
    <Hero />
    <Prestations />
    <Citations />
  </div>
</template>

<script>
import Hero from '@/components/home/Hero.vue'
import Citations from '@/components/home/Citations.vue'
import Prestations from '@/components/home/Prestations.vue'

import meta from '@/mixins/meta.js'

export default {
  components: {
    Hero,
    Citations,
    Prestations,
  },
  head() {
    return meta.get({
      title: this.$t('raw_title'),
      description: this.$t('description'),
    })
  },
}
</script>
