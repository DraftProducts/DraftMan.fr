<template>
  <footer>
    <div class="content">
      <div class="column">
        <h4>DraftMan.fr</h4>
        <router-link to="/" title="Accueil">
          Accueil
        </router-link>
        <router-link to="/a-propos" title="À Propos">
          À Propos
        </router-link>
        <router-link to="/experiences" title="Experiences">
          Experiences
        </router-link>
        <a href="https://www.draftbot.fr" title="DraftBot">DraftBot</a>
      </div>
      <div class="column">
        <h4>Contact</h4>
        <a href="/contact" title="Formulaire">Formulaire</a>
        <a href="/linkedin" target="blank">Linkedin</a>
        <a href="/twitter" target="blank">Twitter</a>
        <a href="/discord" target="blank">Discord</a>
        <a href="/github" target="blank">GitHub</a>
      </div>
      <div class="column">
        <h4>Partenaires</h4>
        <a href="https://www.draftbot.fr" target="blank">DraftBot</a>
        <a href="https://www.blagues-api.fr" target="blank">Blagues API</a>
        <a href="https://bio2game.com" target="blank">Bio2Game</a>
        <a href="https://wolfy.fr" target="blank">Wolfy</a>
      </div>
    </div>
    <div id="copyright">
      <section>Copyright 2016 - 2020 &copy; - All rights reserved</section>
    </div>
  </footer>
</template>

<script>
export default {
    name: 'Footer'
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
    background-color: #2E3133;
    min-height: 265px;
    .content{
        display: flex;
        max-width: 1250px;
        width: 100%;
        @media only screen and (max-width: $phone) {
            flex-direction: column;
        }
        .column{
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
            a{
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
        padding: 20px 0 15px;
        text-align: center;
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
    }
}
</style>
