<i18n global>
{
  "fr": {
    "work-title": "Développeur JS Full-Stack",
    "projects": "Mes projets"
  },
  "nl": {
    "work-title": "Full-Stack JS-Ontwikkelaar",
    "projects": "MIJN PROJECTEN"
  }
}
</i18n>

<template>
  <section id="hero">
    <h1>NICOLAS <span>VAN AARSEN</span></h1>
    <h2>{{ $t('work-title') }}</h2>
    <nuxt-link :to="localePath('/experiences')" :title="$t('projects')">
      {{ $t('projects') }}
    </nuxt-link>
    <ScrollDownIcon @click="scrollDown()" />
    <div ref="scroll" class="line" />
  </section>
</template>

<script>
import ScrollDownIcon from '@/assets/icons/scroll-down.svg?inline'

export default {
  name: 'Hero',
  components: {
    ScrollDownIcon,
  },
  methods: {
    scrollDown() {
      this.$refs.scroll.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      })
    },
  },
}
</script>

<style lang="scss">
#hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 100px);
  @media only screen and (max-width: $mobile) {
    height: calc(100vh - 190px);
  }
  @media screen and (max-width: $phone) {
    height: calc(100vh - 70px);
  }

  vertical-align: middle;
  background-image: url(/images/banner_dark.jpg);
  background-position: center center;
  background-size: cover;

  h1 {
    position: relative;
    float: left;
    margin: 20px 0 8px;
    text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.38);
    text-transform: uppercase;
    font-size: 70px;
    font-weight: 700;
    letter-spacing: 2px;
    color: #cd6e57;
    font-family: 'Uni Sans', 'Arial', sans-serif;
    text-align: center;
    padding: 0 16px;
    span {
      color: #ffffff;
      font-family: 'Uni Sans', 'Arial', sans-serif;
      font-weight: 700;
      z-index: 3;
      white-space: nowrap;
    }

    @media screen and (max-width: $mobile) {
      font-size: 70px;
    }

    @media screen and (max-width: $phone) {
      font-size: 50px;
      margin: 10px 0;
    }

    // &:before, &:after {
    //     content: "NICOLAS VAN AARSEN";
    //     position: absolute;
    //     top: 0;
    //     right: 0;
    //     left: 0;
    //     overflow: hidden;
    //     font-weight: 700;
    //     color: #cd6e57;
    //     font-family: 'Uni Sans';
    // }
  }

  h2 {
    text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.639);
    text-transform: uppercase;
    font-size: 30px;
    font-weight: 600;
    letter-spacing: 0.6px;
    color: white;
    text-align: center;
    margin: 0;
    margin-bottom: 24px;

    @media screen and (max-width: $mobile) {
      font-size: 30px;
    }

    @media screen and (max-width: $phone) {
      font-size: 20px;
    }
  }

  // h3 {
  //     text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.639);
  //     text-transform: uppercase;
  //     font-size: 25px;
  //     font-weight: 700;
  //     letter-spacing: .6px;
  //     color: white;
  //     text-align: center;
  //     margin: 16px 0 0 0;

  //     @media screen and (max-width: $mobile){
  //         font-size: 20px;
  //     }

  //     @media screen and (max-width: $phone){
  //      :   font-size: 15px;
  //     }
  // }

  a {
    position: relative;
    margin: 24px 0;
    padding: 15px 30px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    -khtml-border-radius: 5px;
    border-radius: 5px;
    text-transform: uppercase;
    text-decoration: none;
    font-size: 18px;
    outline: 1px solid;
    color: #ffffff;
    background-color: rgba(0, 0, 0, 0.3);
    animation: wave_small 2s infinite ease-in-out alternate-reverse;
    transition: all 0.7s;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      overflow: hidden;
      outline: 1px solid;
      animation: wave_big 2s infinite ease-in-out alternate-reverse;
    }
  }

  &:hover {
    h1::before {
      left: -2px;
      text-shadow: 2px 0 #fe3a7f;
      animation: effect 3s infinite ease-in-out alternate-reverse;
    }
    h1::after {
      left: 2px;
      text-shadow: -2px 0 #00ffea;
      animation: effect 2s infinite ease-in-out alternate-reverse;
    }
  }

  .scroll_down {
    position: absolute;
    bottom: 30px;
    margin: 0 auto;
    cursor: pointer;
    animation: vertical_move 0.6s ease-in infinite alternate;
  }
  @keyframes vertical_move {
    from {
      transform: translateY(-10px);
    }
    to {
      transform: translateY(0);
    }
  }
  .line {
    position: absolute;
    bottom: 0;
  }
}

@keyframes effect {
  0% {
    clip: rect(55px, 9999px, 56px, 0);
  }

  5% {
    clip: rect(47px, 9999px, 30px, 0);
  }

  10% {
    clip: rect(33px, 9999px, 36px, 0);
  }

  15% {
    clip: rect(35px, 9999px, 9px, 0);
  }

  20% {
    clip: rect(63px, 9999px, 59px, 0);
  }

  25% {
    clip: rect(96px, 9999px, 98px, 0);
  }

  30% {
    clip: rect(48px, 9999px, 77px, 0);
  }

  35% {
    clip: rect(50px, 9999px, 34px, 0);
  }

  40% {
    clip: rect(60px, 9999px, 72px, 0);
  }

  45% {
    clip: rect(10px, 9999px, 81px, 0);
  }

  50% {
    clip: rect(2px, 9999px, 60px, 0);
  }

  55% {
    clip: rect(76px, 9999px, 89px, 0);
  }

  60% {
    clip: rect(62px, 9999px, 30px, 0);
  }

  65% {
    clip: rect(60px, 9999px, 73px, 0);
  }

  70% {
    clip: rect(78px, 9999px, 87px, 0);
  }

  75% {
    clip: rect(2px, 9999px, 17px, 0);
  }

  80% {
    clip: rect(28px, 9999px, 87px, 0);
  }

  85% {
    clip: rect(73px, 9999px, 50px, 0);
  }

  90% {
    clip: rect(10px, 9999px, 81px, 0);
  }

  95% {
    clip: rect(28px, 9999px, 2px, 0);
  }

  100% {
    clip: rect(17px, 9999px, 30px, 0);
  }
}

@keyframes wave_small {
  0% {
    text-shadow: none;
    outline-color: rgba(255, 255, 255, 0);
    outline-offset: 0;
    box-shadow: none;
  }

  20% {
    outline-color: rgba(255, 255, 255, 0.7);
  }

  50%,
  60% {
    text-shadow: 0 0 20px rgba(255, 255, 255, 1);
    outline-color: rgba(255, 255, 255, 0);
    outline-offset: 5px;
    box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.2),
      0 0 20px rgba(255, 255, 255, 0.3);
  }

  80% {
    outline-color: rgba(255, 255, 255, 0.7);
  }

  100% {
    text-shadow: none;
    outline-color: rgba(255, 255, 255, 0);
    outline-offset: 0;
    box-shadow: none;
  }
}

@keyframes wave_big {
  0% {
    text-shadow: none;
    outline-color: rgba(255, 255, 255, 0);
    outline-offset: 0;
    box-shadow: none;
  }

  20% {
    outline-color: rgba(255, 255, 255, 0.7);
  }

  50%,
  60% {
    text-shadow: 0 0 20px rgba(255, 255, 255, 1);
    outline-color: rgba(255, 255, 255, 0);
    outline-offset: 15px;
    box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.2),
      0 0 20px rgba(255, 255, 255, 0.3);
  }

  80% {
    outline-color: rgba(255, 255, 255, 0.7);
  }

  100% {
    text-shadow: none;
    outline-color: rgba(255, 255, 255, 0);
    outline-offset: 0;
    box-shadow: none;
  }
}
</style>
