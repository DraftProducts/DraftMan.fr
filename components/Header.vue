<template>
  <header>
    <div class="wrapper" :class="{ active: menu }">
      <router-link to="/" title="DraftMan">
        <img class="logo" alt="Logo DraftMan" src="/images/headerlogo.png" />
      </router-link>
      <div id="mobile-nav-button" @click="menu = !menu" />
      <nav id="nav">
        <router-link to="/" title="Accueil"> Accueil </router-link>
        <router-link to="/a-propos" title="À Propos"> À Propos </router-link>
        <router-link to="/experiences" title="Expreiences">
          Experiences
        </router-link>
        <a href="https://www.draftbot.fr" title="DraftBot">DraftBot</a>
      </nav>
      <div class="overlay" @click="menu = false" />
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      menu: false,
    }
  },
  watch: {
    $route() {
      this.menu = false
    },
  },
}
</script>

<style lang="scss">
header {
  z-index: 1000;
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #fcfcfc;
  box-shadow: 0 2px 10px rgba(109, 122, 139, 0.1);
  backface-visibility: hidden;
  transition-duration: 0.3s;
  padding: 0 24px;
  @media screen and (max-width: $phone) {
    height: 70px;
    text-align: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.35);
  }
  .wrapper {
    width: 100%;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
      display: block;
      width: 250px;
      @media only screen and (max-width: $mobile) {
        margin-top: 20px;
      }
      @media only screen and (max-width: $phone) {
        width: 200px;
        margin: 0;
      }
    }

    #mobile-nav-button {
      display: none;
      width: 27px;
      height: 20px;
      background-image: url(/images/burger.png);
      background-size: 27px 20px;
      -webkit-transition: opacity 0.15s ease-in;
      -moz-transition: opacity 0.15s ease-in;
      -o-transition: opacity 0.15s ease-in;
      transition: opacity 0.15s ease-in;
      cursor: pointer;
      @media only screen and (max-width: $phone) {
        display: flex;
      }
    }
    nav {
      display: flex;

      @media only screen and (max-width: $mobile) {
        width: 100%;
        justify-content: space-around;
      }
      @media screen and(max-width: $phone) {
        position: fixed;
        flex-direction: column;
        justify-content: flex-start;
        top: 70px;
        bottom: 0;
        left: 0;
        width: 210px;
        background: #fcfcfc;
        transition: transform 0.3s;
        transform: translateX(-210px);
        z-index: 1;
      }
      a {
        padding: 40px 15px;
        text-decoration: none;
        font-size: 18px;
        letter-spacing: 1px;
        color: #999999;
        transition-duration: 0.3s;
        white-space: nowrap;
        @media only screen and (max-width: $tablet) {
          padding: 40px 8px;
        }
        @media only screen and (max-width: $phone) {
          font-size: 16px;
          padding: 16px 16px 16px 24px;
          text-align: left;
          border-bottom: 1px solid #d0d0d0;
          color: #6d7a8b;
          transition: color 0.4s, background-color 0.3s, border 0.1s;
          &:first-child {
            border-top: 1px solid #d0d0d0;
          }
          &:focus,
          &:hover {
            color: #cd6e57;
            background-color: #f3f2f2;
          }
        }

        &.active {
          color: #cd6e57;
        }
      }
    }

    .overlay {
      position: fixed;
      top: 70px;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: #000000;
      visibility: hidden;
      opacity: 0;
      transition: opacity 0.3s;
    }

    @media only screen and (max-width: $mobile) {
      flex-direction: column;
    }
    @media only screen and (max-width: $phone) {
      flex-direction: row;
      &.active {
        .overlay {
          opacity: 0.5;
          visibility: visible;
        }
        nav {
          transform: translateX(0);
        }
      }
    }
  }
}
</style>
