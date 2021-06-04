<template>
  <div>
    <Stitch v-if="active" id="stitchSVG" :style="styles" @click="playHiii()" />
    <audio ref="audio" style="display: none" @ended="playing = false">
      <source src="/audio/hiiii.mp3" type="audio/mp3" />
    </audio>
  </div>
</template>

<script>
import Stitch from '@/assets/stitch/down.svg?inline'

export default {
  name: 'StitchDown',
  components: {
    Stitch,
  },
  data() {
    return {
      interval: null,
      timeout: null,
      styles: {},
      active: false,
      playing: false,
    }
  },
  mounted() {
    this.interval = setInterval(() => {
      if (Math.random() > 0.5) {
        this.active = true
        this.styles = {
          top: 0,
          left: Math.floor(Math.random() * (window.innerWidth - 80)),
        }
        this.timeout = setTimeout(() => {
          this.active = false
        }, 4000)
      }
    }, 20000)
  },
  beforeDestroy() {
    clearInterval(this.interval)
  },
  methods: {
    playHiii() {
      const audio = this.$refs.audio
      if (this.playing) return
      this.playing = true
      audio.volume = 0.4
      audio.play()
    },
  },
}
</script>

<style lang="scss">
#stitchSVG {
  position: fixed;
  width: 80px;
  z-index: 1000;
  cursor: pointer;
  cursor: url('../../assets/stitch/cursor.svg') 16 16, auto !important;
}
#stitch {
  animation: stitch_down 4s linear 1 normal forwards;
}

@keyframes stitch_down {
  0% {
    transform: translate(0, -439px);
    animation-timing-function: cubic-bezier(0.5, 0, 0.7, 0.7);
  }

  20% {
    transform: translate(0, 0);
    animation-timing-function: cubic-bezier(0.5, 0, 0.7, 0.7);
  }

  80% {
    transform: translate(0, 0);
    animation-timing-function: cubic-bezier(0.4, 0.6, 0.6, 1);
  }

  100% {
    transform: translate(0, -439px);
  }
}
</style>
