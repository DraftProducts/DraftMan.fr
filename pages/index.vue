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
      description:
        "DraftMan, Développeur Javascript Full-Stack passionné par le design et l'ergnonomie",
    })
  },
}
</script>
