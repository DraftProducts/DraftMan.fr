<i18n global>
{
  "fr": {
    "menu": {
      "title": "DraftMan.fr",
      "home": "Accueil",
      "about-me": "À Propos",
      "experiences": "Expériences",
      "draftbot": "DraftBot"
    },
    "social": {
      "title": "Contact"
    },
    "parteners": {
      "title": "Partenaires"
    }
  },
  "nl": {
    "menu": {
      "title": "DraftMan.fr",
      "home": "Ontvangst",
      "about-me": "Over Mij",
      "experiences": "Ervaringen",
      "draftbot": "DraftBot"
    },
    "social": {
      "title": "Contact"
    },
    "parteners": {
      "title": "Partners"
    }
  }
}
</i18n>

<template>
  <footer>
    <div class="content">
      <div class="column">
        <h4>{{ $t('menu.title') }}</h4>
        <router-link :to="localePath('/')" :title="$t('menu.home')">
          {{ $t('menu.home') }}
        </router-link>
        <router-link :to="localePath('/a-propos')" :title="$t('menu.about-me')">
          {{ $t('menu.about-me') }}
        </router-link>
        <router-link
          :to="localePath('/experiences')"
          :title="$t('menu.experiences')"
        >
          {{ $t('menu.experiences') }}
        </router-link>
        <a href="https://www.draftbot.fr" :title="$t('menu.draftbot')">
          {{ $t('menu.draftbot') }}
        </a>
      </div>
      <div class="column">
        <h4>{{ $t('social.title') }}</h4>
        <a href="/linkedin" target="blank">Linkedin</a>
        <a href="/twitter" target="blank">Twitter</a>
        <a href="/discord" target="blank">Discord</a>
        <a href="/github" target="blank">GitHub</a>
      </div>
      <div class="column">
        <h4>{{ $t('parteners.title') }}</h4>
        <a href="https://www.draftbot.fr" target="blank">DraftBot</a>
        <a href="https://www.blagues-api.fr" target="blank">Blagues API</a>
        <a href="https://www.bio2game.com/" target="blank">Bio2Game</a>
        <a href="https://wolfy.fr" target="blank">Wolfy</a>
      </div>
    </div>
    <div id="copyright">
      <section>Copyright 2016 - 2020 &copy; - All rights reserved</section>
      <div class="languages">
        <nuxt-link
          :class="{ active: $i18n.locale === 'fr' }"
          :to="switchLocalePath('fr')"
          >FR</nuxt-link
        >
        /
        <nuxt-link
          :class="{ active: $i18n.locale === 'nl' }"
          :to="switchLocalePath('nl')"
          >NL</nuxt-link
        >
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style lang="scss">
footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  letter-spacing: 1px;
  color: #ffffff;
  background-color: #2e3133;
  min-height: 265px;
  .content {
    display: flex;
    max-width: 1250px;
    width: 100%;
    @media only screen and (max-width: $phone) {
      flex-direction: column;
    }
    .column {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      text-align: center;
      h4 {
        margin-top: 30px;
        margin-bottom: 20px;
        text-transform: uppercase;
        font-size: 18px;
        font-weight: 700;
        line-height: 16px;
        color: #838485;
      }
      a {
        text-decoration: none;
        font-size: 16px;
        font-weight: 400;
        line-height: 28px;
        color: #ffffff;
        &:hover {
          color: #cd6e57;
        }
      }
    }
  }
  #copyright {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 20px 0 15px;
    font-size: 14px;
    line-height: 24px;
    color: #b1b1b1;
    width: 100%;
    section {
      display: inline-block;
    }
    br {
      display: none;
    }
    span.coeur {
      color: red;
    }
    .languages {
      position: absolute;
      right: 16px;
      a {
        color: #b1b1b1;
        text-decoration: none;
        &.active {
          color: #cd6e57;
        }
      }
    }
  }
}
</style>
