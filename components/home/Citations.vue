<i18n global>
{
  "fr": {
    "quote1": "“J’ai toujours rêvé que mon ordinateur soit aussi simple à utiliser que mon téléphone. Ce rêve est devenu réalité : je ne comprends plus comment utiliser mon téléphone”",
    "quote2": "“Le manuel disait « Nécessite Windows XP ou mieux ». J’ai donc installé Linux.”",
    "quote3": "“Si debugger, c’est supprimer des bugs, alors programmer ne peut être que les ajouter.”",
    "quote4": "“Je ne suis pas asocial, je ne suis juste pas orienté utilisateur.”"
  },
  "nl": {
    "quote1": "“Ik heb er altijd van gedroomd dat mijn computer net zo gebruiksvriendelijk is als mijn telefoon. Deze droom is uitgekomen: ik begrijp niet meer hoe ik mijn telefoon moet gebruiken”",
    "quote2": "“In de handleiding stond « Windows XP of beter vereist ». Dus ik heb Linux geïnstalleerd.”",
    "quote3": "“Als foutopsporing het verwijderen van bugs is, kan programmeren deze alleen toevoegen.”",
    "quote4": "“Ik ben niet asociaal, ik ben gewoon niet gebruikersgericht.”"
  }
}
</i18n>

<template>
  <section class="citations">
    <div class="control left" @click="switchSlide('prev', true)" />

    <img src="/images/citations.png" alt="Citations" />

    <div id="slides">
      <div
        v-for="(item, index) in items"
        ref="quotes"
        :key="index"
        class="quote"
        :style="{
          left: `${index + 1}00%`,
          transform: `translateX(-${carouselCount * 100}%)`,
        }"
      >
        <blockquote>
          <p>{{ item.quote }}</p>
          <h2>{{ item.author }}</h2>
        </blockquote>
      </div>
    </div>

    <div class="control right" @click="switchSlide('next', true)" />
  </section>
</template>

<script>
export default {
  name: 'Citations',
  data() {
    return {
      items: [
        {
          quote: this.$t('quote1'),
          author: 'Bjarne Stroustrup',
        },
        {
          quote: this.$t('quote1'),
          author: 'Gerald Weinberg',
        },
        {
          quote: this.$t('quote3'),
          author: 'Edsger Dijkstra',
        },
        {
          quote: this.$t('quote4'),
          author: 'Peter Funk',
        },
      ],
      scrollInterval: null,
      carouselCount: 1,
    }
  },
  mounted() {
    this.scrollInterval = setInterval(
      () => this.switchSlide('next', false),
      10000
    )
  },
  methods: {
    switchSlide(direction = 'next', manual = true) {
      this.carouselCount += direction === 'next' ? 1 : -1
      if (this.carouselCount > this.items.length || this.carouselCount <= 0) {
        this.carouselCount = !this.carouselCount ? this.items.length : 1
      }

      if (manual) {
        clearInterval(this.scrollInterval)
        this.scrollInterval = setInterval(
          () => this.switchSlide('next', false),
          10000
        )
      }
    },
  },
}
</script>

<style lang="scss">
.citations {
  display: grid;
  position: relative;
  width: 100%;
  padding: 20px 0;
  overflow: hidden;
  text-align: center;
  background-color: #cd6e57;
  color: #ffffff;
  grid-template-columns: 120px auto 120px;
  grid-template-rows: 90px 190px;
  grid-template-areas:
    'left logo right'
    'left slides right';

  @media only screen and (max-width: $mobile) {
    grid-template-rows: 65px 190px;
    grid-template-areas:
      'logo logo logo'
      'slides slides slides';
  }

  img {
    width: 70px;
    grid-area: logo;
    align-self: flex-end;
    justify-self: center;
  }
  #slides {
    grid-area: slides;
    position: relative;
    overflow: hidden;
    flex: 1;
    .quote {
      display: flex;
      position: absolute;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      height: 100%;
      transition: transform 1s;
    }
    h2 {
      margin-top: 30px;
      text-align: center;
    }
    p {
      margin: 16px 0;
      font-size: 22px;
      @media only screen and (max-width: $phone) {
        font-size: 16px;
      }
    }
  }
  .control {
    display: block;
    width: 65px;
    height: 135px;
    transition: opacity 0.15s ease-in;
    align-self: center;
    justify-self: center;
    @media only screen and (max-width: $mobile) {
      display: none;
    }
    &.left {
      background-image: url('/images/arrow_left.png');
      grid-area: left;
    }
    &.right {
      background-image: url('/images/arrow_right.png');
      grid-area: right;
    }

    &:hover {
      opacity: 0.5;
    }
  }
}
</style>
