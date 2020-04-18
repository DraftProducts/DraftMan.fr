<template>
  <header>
    <div class="wrapper">
      <router-link to="/" title="DraftMan">
        <img
          class="logo"
          alt="Logo DraftMan"
          src="/images/headerlogo.png"
        >
      </router-link>
      <div id="mobile-nav-button" />
      <nav id="nav">
        <router-link to="/" title="Accueil">
          Accueil
        </router-link>
        <router-link to="/a-propos" title="À Propos">
          À Propos
        </router-link>
        <router-link to="/portfolio" title="Portfolio">
          Portfolio
        </router-link>
        <a href="https://www.draftbot.fr" title="DraftBot">DraftBot</a>
        <router-link to="/contact" title="Contact">
          Contact
        </router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style lang="scss">
header {
    z-index: 1000;
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: #FCFCFC;
    box-shadow: 0 2px 10px rgba(109, 122, 139, .1);
    backface-visibility: hidden;
    transition-duration: .3s;
    .wrapper{
        width: 100%;
        max-width: 1250px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .logo{
            display: block;
            width: 250px;
        }
        #mobile-nav-button {
            display: none;
            width: 27px;
            height: 20px;
            background-image: url(/images/burger.png);
            background-size: 27px 20px;
            -webkit-transition: opacity .15s ease-in;
            -moz-transition: opacity .15s ease-in;
            -o-transition: opacity .15s ease-in;
            transition: opacity .15s ease-in;
            cursor: pointer;
        }
        nav {
            display: flex;
            a {
                display: block;
                padding: 40px 15px;
                text-decoration: none;
                font-size: 18px;
                letter-spacing: 1px;
                color: #999;
                transition-duration: .3s;
                white-space: nowrap;
                &.active{
                    color: #cd6e57 !important
                }
            }
        }
    }
}

</style>
