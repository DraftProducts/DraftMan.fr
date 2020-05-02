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

export default {
    components: {
        Hero,
        Citations,
        Prestations
    }
}
</script>

<style lang="scss">

</style>
