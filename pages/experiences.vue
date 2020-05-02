<template>
  <div class="experiences">
    <div class="wrapper">
      <div class="head">
        <div class="title">
          <h1>Experiences</h1>
        </div>
      </div>
      <div class="projects">
        <a class="item" href="https://www.draftbot.fr">
          <img class="logo" src="/images/projects/draftbot.png" alt="DraftBot" title="DraftBot">
          <div class="content">
            <h2 class="title">
              DRAFTBOT
            </h2>
            <p>
              DraftBot est un bot discord francophone que j’ai imaginé et développé.<br>
              J’en assure son évolution ainsi que sa maintenance quotidienne.<br>
              Il fut l’un de mes plus gros projets personnels.
            </p>
            <p class="stats"><strong>11 000</strong> serveurs - <strong>700 000</strong> prospects</p>
            <div class="socials">
              <icon icon="nodejs" name="Node.Js" />
              <icon icon="expressjs" name="Express.Js" />
              <icon icon="discordjs" name="Discord.Js" />
              <icon icon="nuxtjs" name="Nuxt.Js" />
              <icon icon="sass" name="SASS" />
              <icon icon="figma" name="Figma" />
              <icon icon="sequelize" name="Sequelize" />
              <icon icon="postgresql" name="PostgreSQL" />
              <icon icon="illustrator" name="Illustrator" />
              <icon icon="analytics" name="Analytics" />
            </div>
          </div>
        </a>
        <a class="item" href="https://wolfy.fr/">
          <img class="logo" src="/images/projects/wolfy.png" alt="Wolfy" title="Wolfy">
          <div class="content">
            <h3 class="title">
              WOLFY
            </h3>
            <p>
              Wolfy est une adaptation web du jeu populaire Loups-Garous. Je fais partie de l’équipe et contribue principalement au développement de l’application mobile.
            </p>
            <p class="stats"><strong>1 000 000</strong> joueurs</p>
            <div class="socials">
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
          <img class="logo" src="/images/projects/bio2game.png" alt="Bio2Game" title="Bio2Game">
          <div class="content">
            <h3 class="title">
              BIO2GAME
            </h3>
            <p>
              Bio2Game est un jeu pour challenger ses connaissances en rapport avec la nature. C’est ma première mission de grande envergure en tant qu’autoentreneur mais également ma première expérience de relation client-collaborateur.
            </p>
            <div class="socials">
              <icon icon="nodejs" name="Node.Js" />
              <icon icon="expressjs" name="Express.Js" />
              <icon icon="adonisjs" name="Adonis.Js" />
              <icon icon="vuejs" name="Vue.Js" />
              <icon icon="socketio" name="Socket.io" />
              <icon icon="sass" name="SASS" />
              <icon icon="figma" name="Figma" />
              <icon icon="mariadb" name="Mariadb" />
              <icon icon="illustrator" name="Illustrator" />
              <icon icon="analytics" name="Analytics" />
            </div>
          </div>
        </a>
        <div class="item">
          <img class="logo" src="/images/projects/providence-maths.png" alt="Providence Maths" title="Providence Maths">
          <div class="content">
            <h3 class="title">
              PROVIDENCE MATHS
            </h3>
            <p>
              Providence Maths est un site qui proposes: des cours, exercices et évaluations corrigés gratuitement.
              En colaboration avec mon professeur de maths, je suis en train de concevoir un site ergonomique et morderne.
            </p>
            <div class="socials">
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
        <a class="item" href="https://www.blagues-api.fr">
          <img class="logo" src="/images/projects/blagues-api.png" alt="Blagues API" title="Blagues API">
          <div class="content">
            <h3 class="title">
              BLAGUES-API
            </h3>
            <p>
              Blagues API est une api française et communautaire qui regroupe plus de 200 blagues catégorisés et disponibles gratuitement par token authentification Bearer.
              Crée dans le but d’alimenter la fonctionnalité de blagues de DraftBot
            </p>
            <div class="socials">
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
        <div class="item">
          <img class="logo" src="/images/projects/sfr.png" alt="Saint François Régis" title="Saint François Régis">
          <div class="content">
            <h3 class="title">
              SAINT FRANÇOIS RÉGIS
            </h3>
            <p>
              SFRégis est le site de l’établissement dans lequel j’ai étudié durant toute ma scolarité.
              Afin de les remercier, j’ai réalisé un site qui leur correspondait avant de continuer mon parcours au lycée, j’en ai laissé la maintenance au responsable informatique du collège.
            </p>
            <div class="socials">
              <icon icon="php" name="Php" />
              <icon icon="sass" name="SASS" />
              <icon icon="adobexd" name="Adobe XD" />
              <icon icon="illustrator" name="Illustrator" />
              <icon icon="photoshop" name="Photoshop" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import IconPlaceHolder from '@/components/experiences/IconPlaceHolder.vue'

export default {
    components: {
        icon: IconPlaceHolder
    }
}
</script>

<style lang="scss">
.experiences{
    background-color: #F3F3F3;
    .wrapper{
        margin: 0 auto;
        max-width: 1500px;
        padding: 0px 25px 80px;
        display: flex;
        flex-direction: column;
        @media screen and (max-width: $large){
            max-width: $mobile;
        }
        @media screen and (max-width: $mobile){
            padding: 20px 25px 80px;
        }
        .head{
            .title{
                position: relative;
                h1{
                    font-weight: 500;
                    font-size: 30px;
                    color: #2B2B2B;
                    margin: 30px 0 40px;
                    &:after{
                        content: '';
                        position: absolute;
                        width: 50px;
                        height: 4px;
                        background-color: #A45B44;
                        left: 0;
                        bottom: -13px;
                    }
                    &:before{
                        content: '';
                        position: absolute;
                        width: 30px;
                        height: 4px;
                        background-color: #CD6E57;
                        left: 0;
                        bottom: -5px;
                    }
                }
            }
        }
        .projects{
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 32px;
            @media screen and (max-width: $large){
                grid-template-columns: 1fr;
            }
            .item{
                display: flex;
                align-items: stretch;
                position: relative;
                border-radius: 2px;
                background-color: #ffffff;
                box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.24);
                transition: box-shadow .25s;
                cursor: pointer;
                text-decoration: none;
                padding: 24px;
                @media screen and (max-width: $mobile){
                    padding: 16px;
                }
                @media only screen and (max-width: $phone) {
                    flex-direction: column;
                }
                .logo{
                    // width: 100%;
                    height: 100%;
                    @media screen and (max-width: $mobile){
                        height: 100px;
                    }
                    @media only screen and (max-width: $phone) {
                        display: none;
                    }
                }
                .content{
                    display: flex;
                    flex-direction: column;
                    padding-left: 24px;
                    @media only screen and (max-width: $phone) {
                        padding-left: 0;
                    }
                    .title{
                        margin: 0;
                        font-size: 22px;
                        color: #343434;
                        transition: color .3s ease-in-out;
                    }
                    p {
                        margin: 6px 0 8px;
                        color: #343434;
                        font-size: 13px;
                        line-height: 20px;
                        &.stats{
                            margin: 2px 0 8px;
                        }
                    }
                    .socials{
                        display: flex;
                        align-items: flex-end;
                        flex: 1;
                        @media only screen and (max-width: $phone) {
                            flex-wrap: wrap;
                            .icon-tooltip{
                                margin-top: 8px;
                            }
                        }
                    }
                }
                &:after{
                    content: '';
                    height: 0%;
                    width: 3px;
                    background-color: #cd6e57;
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    transition: height .3s ease-in-out;
                }
                &:hover{
                    .title{
                        color: #cd6e57;
                    }
                    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
                    &:after{
                        height: 100%;
                    }
                }
            }
        }
    }
}
</style>
