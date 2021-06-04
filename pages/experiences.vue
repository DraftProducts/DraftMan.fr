<i18n global>
{
  "fr": {
    "raw_title": "DraftMan - Développeur JS Full-Stack",
    "title": "Experiences",
    "description": "Mon travail vous intéresse ? Dans ce Portfolio vous pourrez retrouver mes plus gros projets !",
    "projects": {
      "draftbot": {
        "title": "DraftBot",
        "description": "DraftBot est un bot Discord francophone que j’ai imaginé et développé.<br /> J’en assure son évolution ainsi que sa maintenance quotidienne.<br /> Il fut l’un de mes plus gros projets personnels.",
        "stats": "<b>{guilds}</b> serveurs - <b>{users}</b> prospects"
      },
      "wolfy": {
        "title": "Wolfy",
        "description": "Wolfy est une adaptation web du jeu populaire Loups-Garous. J'ai fait parti de l’équipe et ai contribué au développement de l’application mobile.",
        "stats": "Plus de <b>{count}</b> joueurs inscrits"
      },
      "bio2game": {
        "title": "Bio2Game",
        "description": "Bio2Game est un jeu pour challenger ses connaissances en rapport avec la nature. C’est ma première mission de grande envergure en tant qu’autoentrepreneur mais également ma première expérience de relation client-collaborateur."
      },
      "blagues-api": {
        "title": "Blagues API",
        "description": "Blagues API est une api française et communautaire qui regroupe plus de 300 blagues catégorisées et disponibles gratuitement par token authentification Bearer. Crée dans le but d’alimenter la fonctionnalité de blagues de DraftBot"
      }
    }
  },
  "nl": {
    "raw_title": "DraftMan - Full-Stack JavaScript Developer",
    "title": "Ervaringen",
    "description": "Ben je geïnteresseerd in mijn werk? In deze Portfolio vind je mijn grootste projecten!",
    "projects": {
      "draftbot": {
        "title": "DraftBot",
        "description": "DraftBot is een Franstalige Discord-bot die ik heb bedacht en ontwikkeld. <br /> Ik zorg voor zowel de evolutie als het dagelijkse onderhoud. <br /> Het was een van mijn grootste persoonlijke projecten.",
        "stats": "<b>{guilds}</b> serveurs - <b>{users}</b> prospects"
      },
      "wolfy": {
        "title": "Wolfy",
        "description": "Wolfy is een webversie van het populaire Werewolves-spel. Ik maakte deel uit van het team en droeg bij aan de ontwikkeling van de mobiele applicatie.",
        "stats": "Meer dan <b>{count}</b> geregistreerde spelers"
      },
      "bio2game": {
        "title": "Bio2Game",
        "description": "Bio2Game is een spel om je kennis in relatie tot de natuur uit te dagen. Dit is mijn eerste grootschalige missie als zelfstandige, maar ook mijn eerste ervaring in klant-werknemerrelaties."
      },
      "blagues-api": {
        "title": "Blagues API",
        "description": "Blagues-API is een Franse en community-API die meer dan 300 gecategoriseerde grappen samenbrengt die gratis beschikbaar zijn via Bearer-authenticatietoken. Gemaakt om de grapfunctionaliteit van DraftBot te voeden"
      }
    }
  }
}
</i18n>

<template>
  <div class="experiences">
    <div class="wrapper">
      <div class="head">
        <div class="title">
          <h1>{{ $t('title') }}</h1>
        </div>
      </div>
      <div class="projects">
        <a class="item" href="https://www.draftbot.fr">
          <img
            class="logo"
            src="/images/projects/draftbot.png"
            :alt="$t('projects.draftbot.title')"
            :title="$t('projects.draftbot.title')"
          />
          <div class="content">
            <h2 class="title">{{ $t('projects.draftbot.title') }}</h2>
            <p v-html="$t('projects.draftbot.description')" />
            <transition name="fade">
              <p
                v-if="stats"
                class="stats"
                v-html="$t('projects.draftbot.stats', stats)"
              />
            </transition>
            <div class="tools">
              <icon icon="nodejs" name="Node.Js" />
              <icon icon="expressjs" name="Express.Js" />
              <icon icon="discordjs" name="Discord.Js" />
              <icon icon="nuxtjs" name="Nuxt.Js" />
              <icon icon="sass" name="SASS" />
              <icon icon="sequelize" name="Sequelize" />
              <icon icon="rabbitmq" name="RabbitMQ" />
              <icon icon="postgresql" name="PostgreSQL" />
              <icon icon="redis" name="Redis" />
              <icon icon="figma" name="Figma" />
              <icon icon="illustrator" name="Illustrator" />
            </div>
          </div>
        </a>
        <a class="item" href="https://wolfy.fr/">
          <img
            class="logo"
            src="/images/projects/wolfy.png"
            :alt="$t('projects.wolfy.title')"
            :title="$t('projects.wolfy.title')"
          />
          <div class="content">
            <h3 class="title">{{ $t('projects.wolfy.title') }}</h3>
            <p>{{ $t('projects.wolfy.description') }}</p>
            <p
              class="stats"
              v-html="$t('projects.wolfy.stats', { count: '2 000 000' })"
            />
            <div class="tools">
              <icon icon="flutter" name="Flutter" />
              <icon icon="dart" name="Dart" />
              <icon icon="nodejs" name="Node.Js" />
              <icon icon="reactjs" name="React.Js" />
              <icon icon="expressjs" name="Express.js" />
              <icon icon="adobexd" name="AdobeXD" />
              <icon icon="socketio" name="Socket.io" />
            </div>
          </div>
        </a>
        <a class="item" href="https://www.bio2game.com/">
          <img
            class="logo"
            src="/images/projects/bio2game.png"
            :alt="$t('projects.bio2game.title')"
            :title="$t('projects.bio2game.title')"
          />
          <div class="content">
            <h3 class="title">{{ $t('projects.bio2game.title') }}</h3>
            <p>{{ $t('projects.bio2game.description') }}</p>
            <div class="tools">
              <icon icon="nodejs" name="Node.Js" />
              <icon icon="expressjs" name="Express.Js" />
              <icon icon="adonisjs" name="Adonis.Js" />
              <icon icon="vuejs" name="Vue.Js" />
              <icon icon="nuxtjs" name="Nuxt.Js" />
              <icon icon="socketio" name="Socket.io" />
              <icon icon="sass" name="SASS" />
              <icon icon="figma" name="Figma" />
              <icon icon="mariadb" name="Mariadb" />
              <icon icon="illustrator" name="Illustrator" />
            </div>
          </div>
        </a>
        <a class="item" href="https://www.blagues-api.fr">
          <img
            class="logo"
            src="/images/projects/blagues-api.png"
            :alt="$t('projects.blagues-api.title')"
            :title="$t('projects.blagues-api.title')"
          />
          <div class="content">
            <h3 class="title">{{ $t('projects.blagues-api.title') }}</h3>
            <p>{{ $t('projects.blagues-api.description') }}</p>
            <div class="tools">
              <icon icon="nodejs" name="Node.Js" />
              <icon icon="expressjs" name="Express.Js" />
              <icon icon="discordjs" name="Discord.Js" />
              <icon icon="sass" name="SASS" />
              <icon icon="figma" name="Figma" />
              <icon icon="ejs" name="EJS" />
              <icon icon="webpack" name="Webpack" />
              <icon icon="sequelize" name="Sequelize" />
              <icon icon="sqlite" name="SQLite" />
              <icon icon="illustrator" name="Illustrator" />
            </div>
          </div>
        </a>
        <!-- <div class="item">
          <img
            class="logo"
            src="/images/projects/providence-maths.png"
            alt="Providence Maths"
            title="Providence Maths"
          />
          <div class="content">
            <h3 class="title">PROVIDENCE MATHS</h3>
            <p>
              Providence Maths est un site qui proposes: des cours, exercices et
              évaluations corrigés gratuitement. En colaboration avec mon
              professeur de maths, je suis en train de concevoir un site
              ergonomique et morderne.
            </p>
            <div class="tools">
              <icon icon="nodejs" name="Node.Js" />
              <icon icon="expressjs" name="Express.Js" />
              <icon icon="nuxtjs" name="Nuxt.Js" />
              <icon icon="sass" name="SASS" />
              <icon icon="figma" name="Figma" />
              <icon icon="illustrator" name="Illustrator" />
              <icon icon="photoshop" name="Photoshop" />
              <icon icon="analytics" name="Analytics" />
            </div>
          </div>
        </div>
        <div class="item">
          <img
            class="logo"
            src="/images/projects/sfr.png"
            alt="Saint François Régis"
            title="Saint François Régis"
          />
          <div class="content">
            <h3 class="title">SAINT FRANÇOIS RÉGIS</h3>
            <p>
              SFRégis est le site de l’établissement dans lequel j’ai étudié
              durant toute ma scolarité. Afin de les remercier, j’ai réalisé un
              site et un logo qui leur correspondait avant de continuer mon
              parcours au lycée, j’en ai laissé la maintenance au responsable
              informatique.
            </p>
            <div class="tools">
              <icon icon="php" name="Php" />
              <icon icon="sass" name="SASS" />
              <icon icon="adobexd" name="Adobe XD" />
              <icon icon="illustrator" name="Illustrator" />
              <icon icon="photoshop" name="Photoshop" />
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import IconTooltip from '@/components/experiences/IconTooltip.vue'

import meta from '@/mixins/meta.js'

export default {
  components: {
    icon: IconTooltip,
  },
  data() {
    return {
      stats: null,
    }
  },
  async mounted() {
    console.log(this.$i18n)
    const stats = await this.$axios
      .$get('https://api.draftbot.fr/base/stats')
      .catch(() => null)
    if (stats) {
      this.stats = {
        users: (Math.ceil(stats.users / 10000) * 10000).toLocaleString(),
        guilds: (Math.ceil(stats.guilds / 1000) * 1000).toLocaleString(),
      }
    }
  },
  head() {
    return meta.get({
      title: this.$t('raw_title'),
      name: this.$t('title'),
      description: this.$t('description'),
      slug: this.$i18n.locale === 'fr' ? 'experiences' : 'ervaring',
    })
  },
  nuxtI18n: {
    paths: {
      fr: '/experiences',
      nl: '/ervaring',
    },
  },
}
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.experiences {
  background-color: #f3f3f3;
  .wrapper {
    margin: 0 auto;
    max-width: 1500px;
    padding: 0 25px 80px;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: $large) {
      max-width: $mobile;
    }
    @media screen and (max-width: $mobile) {
      padding: 20px 25px 80px;
    }
    .head {
      .title {
        position: relative;
        h1 {
          font-weight: 500;
          font-size: 30px;
          color: #2b2b2b;
          margin: 30px 0 40px;
          &::after {
            content: '';
            position: absolute;
            width: 50px;
            height: 4px;
            background-color: #a45b44;
            left: 0;
            bottom: -13px;
          }
          &::before {
            content: '';
            position: absolute;
            width: 30px;
            height: 4px;
            background-color: #cd6e57;
            left: 0;
            bottom: -5px;
          }
        }
      }
    }
    .projects {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 32px;
      @media screen and (max-width: $large) {
        grid-template-columns: 1fr;
      }
      .item {
        display: flex;
        align-items: stretch;
        position: relative;
        border-radius: 2px;
        background-color: #ffffff;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.24);
        transition: box-shadow 0.25s;
        cursor: pointer;
        text-decoration: none;
        padding: 24px;
        @media screen and (max-width: $mobile) {
          padding: 16px;
        }
        @media only screen and (max-width: $phone) {
          flex-direction: column;
        }
        .logo {
          height: 180px;
          width: 180px;
          min-width: 180px;
          @media screen and (max-width: $mobile) {
            height: 100px;
            width: 100px;
          }
          @media only screen and (max-width: $phone) {
            display: none;
          }
        }
        .content {
          display: flex;
          flex-direction: column;
          padding-left: 24px;
          @media only screen and (max-width: $phone) {
            padding-left: 0;
          }
          .title {
            margin: 0;
            font-size: 22px;
            color: #343434;
            transition: color 0.3s ease-in-out;
          }
          p {
            margin: 6px 0 8px;
            color: #343434;
            font-size: 13px;
            line-height: 20px;
            &.stats {
              margin: 2px 0 8px;
            }
          }
          .tools {
            display: flex;
            align-items: flex-end;
            flex: 1;
            @media only screen and (max-width: $phone) {
              flex-wrap: wrap;
              .icon-tooltip {
                margin-top: 8px;
              }
            }
          }
        }
        &::after {
          content: '';
          height: 0%;
          width: 3px;
          background-color: #cd6e57;
          position: absolute;
          left: 0;
          bottom: 0;
          transition: height 0.3s ease-in-out;
        }
        &:hover {
          .title {
            color: #cd6e57;
          }

          box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
          &::after {
            height: 100%;
          }
        }
      }
    }
  }
}
</style>
