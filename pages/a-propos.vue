<template>
  <div class="a-propos">
    <div class="wrapper">
      <div class="informations">
        <div ref="paralax" class="image-zone" data-relative-input="true">
          <img src="/images/profile.png" class="me" alt="Me" data-depth="0.08">
          <img src="/images/background2.png" class="background" alt="Background" data-depth="0.04">
        </div>
        <div class="content">
          <vue-typed-js :strings="['Développeur', 'WebDesigner', 'Passionné', 'Freelance']" :typeSpeed="100" :backSpeed="50" :loop="true" :cursorChar="'|'">
            <h2>Je suis DraftMan mais aussi <span class="typing" /></h2>
          </vue-typed-js>
          <p>Plop! Je m’appelle Nicolas Van Aarsen, vous me connaissez sûrement sous le nom DraftMan.</p>
          <p>Je suis un développeur passionné depuis mon plus jeune âge. </p>
          <p>Toujours étudiant, je me dédie pleinement aux différents projets qui me sont confiés durant mon temps libre.</p>
          <p>Je me forme en continue afin d’être toujours à la pointe de la technologie.</p>
          <p>J'apprécie chaque étape de l’évolution d’un projet, de la discussion à la collaboration.</p>
          <div class="socials">
            <a href="https://github.com/DraftProducts"><github class="icon" /></a>
            <a href="https://www.linkedin.com/in/draftman/"><linkedin class="icon" /></a>
            <a href="https://discord.gg/E2Fm3Vr"><discord class="icon" /></a>
            <a href="https://twitter.com/DraftMan_Dev"><twitter class="icon" /></a>
            <a href="https://open.spotify.com/user/nicovanaarsen"><spotify class="icon" /></a>
            <a href="https://www.instagram.com/nicolas.vanaarsen"><instagram class="icon" /></a>
            <a href="https://www.facebook.com/nicovanaarsen"><facebook class="icon" /></a>
          </div>
        </div>
      </div>
      <div class="competences">
        <div class="head">
          <div class="title">
            <h3>Compétences</h3>
          </div>
        </div>
        <div class="content">
          <a class="item" href="https://developer.mozilla.org/fr/docs/Web/JavaScript">
            <img src="/images/competences/js.png" alt="Javascript" title="Javascript">
            <h3 class="title">
              JAVASCRIPT
            </h3>
            <p>Langage de prédilection, qu’il soit coté client où serveur je suis passionné par toutes les technologies l’incluant.</p>
          </a>
          <a class="item" href="https://sass-lang.com/">
            <img src="/images/competences/sass.png" alt="Sass" title="Sass">
            <h3 class="title">
              SASS
            </h3>
            <p>Passionné par le design et continuellement à la recherche de design uniques, les preprocesseurs me permettent de garder cette créativité en restant productif.</p>
          </a>
          <a class="item" href="">
            <img src="/images/competences/seo.png" alt="SEO" title="SEO">
            <h3 class="title">
              SEO
            </h3>
            <p>Le SEO est un domaine incontournable lorsque l’on parle de markéting. Il passe par la structuration même du travail sans oublier son optimisation.</p>
          </a>
          <a class="item" href="">
            <img src="/images/competences/nuxtjs.png" alt="Nuxt.js" title="Nuxt.js">
            <h3 class="title">
              NUXT.JS
            </h3>
            <p>NuxtJs offre la possibilité de faire des applications web VueJs en server side rendering afin de ne pas impacter le référencement du projet.</p>
          </a>
          <a class="item" href="">
            <img src="/images/competences/vuejs.png" alt="Vue.js" title="Vue.js">
            <h3 class="title">
              VUE.JS
            </h3>
            <p>VueJs est le framework js frontend client side rendering que j’utilises lorsque j’ai besoin de réaliser une application puissante et que le SEO n’entre pas en jeu.</p>
          </a>
          <a class="item" href="">
            <img src="/images/competences/expressjs.png" alt="Express.js" title="Express.js">
            <h3 class="title">
              EXPRESS.JS
            </h3>
            <p>Après être passé par de nombreux framework backend Js, je suis finalement revenu aux sources. Express.Js me permet d’avoir un backend minimaliste et puissant.</p>
          </a>
          <a class="item" href="">
            <img src="/images/competences/figma.png" alt="Figma" title="Figma">
            <h3 class="title">
              FIGMA
            </h3>
            <p>Figma est mon outil de prototypage principal, il m’a convaincu tant par ses fonctionnalités collaborative que par son utilisation ergonomique.</p>
          </a>
          <a class="item" href="">
            <img src="/images/competences/xd.png" alt="Adobe XD" title="Adobe XD">
            <h3 class="title">
              ADOBE XD
            </h3>
            <p>Premier outil de prototypage, Adobe XD me permet de travailler sur des projets existants et de rester dans l’écosystème Adobe.</p>
          </a>
          <a class="item" href="">
            <img src="/images/competences/git.png" alt="Git" title="Git">
            <h3 class="title">
              GIT
            </h3>
            <p>Outil le plus important pour le développeur, j’utilise Git pour le versionning de mes projets et suis principalement fan du workflow Gitflow.</p>
          </a>
          <a class="item" href="">
            <img src="/images/competences/illustrator.png" alt="Illustrator" title="Illustrator">
            <h3 class="title">
              ADOBE ILLUSTRATOR
            </h3>
            <p>A l’origine passionné par la création de logo vectoriels, je continue la création de logo ou d’icones lorsque c’est necessaire pour les différents projets.</p>
          </a>
          <a class="item" href="">
            <img src="/images/competences/photoshop.png" alt="Photoshop" title="Photoshop">
            <h3 class="title">
              ADOBE PHOTOSHOP
            </h3>
            <p>J’utilises souvent photoshop pour du traitement d’image ou bien pour la création de visuels matriciels ne pouvant pas être vectorisés.</p>
          </a>
          <a class="item" href="">
            <img src="/images/competences/linux.png" alt="Linux" title="Linux">
            <h3 class="title">
              LINUX
            </h3>
            <p>Depuis mes débuts j’ai toujours été un grand fan des distributions linux. J’ai d’ailleurs pu utiliser la plus connus comme OS principal.</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Parallax from 'parallax-js'

import discord from '@/assets/icons/socials/discord.svg'
import facebook from '@/assets/icons/socials/facebook.svg'
import github from '@/assets/icons/socials/github.svg'
import spotify from '@/assets/icons/socials/spotify.svg'
import twitter from '@/assets/icons/socials/twitter.svg'
import linkedin from '@/assets/icons/socials/linkedin.svg'
import instagram from '@/assets/icons/socials/instagram.svg'

export default {
    components: {
        discord,
        facebook,
        github,
        spotify,
        twitter,
        linkedin,
        instagram
    },
    data () {
        return {
            animation: null
        }
    },
    mounted () {
        this.animation = new Parallax(this.$refs.paralax, {
            relativeInput: true
        })
    }
}
</script>

<style lang="scss">
.a-propos{
    background-color: #F3F3F3;
    padding-right: 24px;
    padding-left: 24px;
    .wrapper{
        margin: 0 auto;
        max-width: 1200px;
        .informations{
            display: grid;
            grid-template-columns: 1fr 2fr;
            grid-gap: 32px;
            padding: 60px 0 30px;
            @media screen and (max-width: $mobile){
                padding: 30px 0;
            }
            .image-zone{
                grid-column: 1;
                position: relative;
                display: flex;
                align-items: center;
                @media screen and (max-width: $mobile){
                    display: none;
                }
                img{
                    width: 100%;
                    max-width: 300px;
                    margin: auto;
                    &.me{
                        z-index: 2;
                    }
                    &.background{
                        position: absolute;
                        z-index: 1;
                        right: -16px!important;
                        bottom: -16px!important;
                        left: calc(50% - 200px);
                        top: calc(50% - 150px);
                    }
                }
            }
            .content{
                display: flex;
                flex-direction: column;
                justify-content: center;
                grid-column: 2;
                @media screen and (max-width: $mobile){
                    grid-column: 1 / 3;
                }
                h2{
                    font-weight: 600;
                    font-size: 20px;
                    color: #000000;
                    margin-bottom: 24px;
                    .typing{
                        color: #cd6e57
                    }
                }
                p{
                    margin: 0 0 10px;
                    font-size: 15px;
                    color: #505050;
                }
                .socials{
                    display: flex;
                    a{
                        margin: 16px 20px 0 0;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 24px;
                        @media screen and (max-width: $phone){
                            margin: 16px 16px 0 0;
                        }
                        .icon{
                            cursor: pointer;
                            transition: color .3s ease-in-out;
                            color: #202225;
                            &:hover{
                                color: #cd6e57
                            }
                        }
                    }
                }
            }
        }
        .competences {
            display: flex;
            flex-direction: column;
            padding: 60px 0 80px;
            @media screen and (max-width: $mobile){
                padding: 20px 0 60px;
            }
            .head{
                padding-bottom: 24px;
                height: 80px;
                .title{
                    position: relative;
                    h3{
                        font-weight: 500;
                        font-size: 30px;
                        color: #2B2B2B;
                        margin: 0;
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
            .content{
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                grid-gap: 32px;
                @media screen and (max-width: $tablet){
                    grid-template-columns: 1fr 1fr;

                }
                @media screen and (max-width: $mobile){
                    grid-gap: 24px;

                }
                @media screen and (max-width: $phone){
                    grid-template-columns: 1fr;
                }
                .item{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    position: relative;
                    border-radius: 2px;
                    background-color: #ffffff;
                    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.24);
                    transition: box-shadow .25s;
                    cursor: pointer;
                    text-decoration: none;
                    img{
                        width: 100%;
                    }
                    .title{
                        margin: 14px 0 0;
                        font-size: 20px;
                        color: #343434;
                        transition: color .3s ease-in-out;
                    }
                    p {
                        display: flex;
                        align-items: center;
                        text-align: center;
                        margin: 10px 16px 16px;
                        color: #343434;
                        font-size: 12px;
                        line-height: 16px;
                        flex: 1;
                        @media screen and (max-width: $tablet){
                            font-size: 14px;
                        }
                    }
                    &:after{
                        content: '';
                        width: 0%;
                        height: 2px;
                        background-color: #cd6e57;
                        position: absolute;
                        bottom: 0;
                        margin: 0 auto;
                        transition: width .3s ease-in-out;
                    }
                    &:hover{
                        .title{
                            color: #cd6e57;
                        }
                        box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
                        &:after{
                            width: 100%;
                        }
                    }
                }
            }
        }
    }
}
</style>
