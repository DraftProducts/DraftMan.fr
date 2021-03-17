<template>
  <section id="prestations">
    <div class="wrapper">
      <div class="head">
        <div class="title">
          <h3>Prestations</h3>
        </div>
        <div
          :class="['button', developer ? 'developer' : '']"
          @click="developer = !developer"
        >
          <span>DÉVELOPPEUR ?</span>
        </div>
      </div>
      <div class="elements">
        <div class="prestation">
          <div class="icon-wrapper">
            <svg
              width="62"
              height="62"
              viewBox="0 0 62 62"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M30.8578 59.2645C15.0582 59.2645 2.25 46.4563 2.25 30.6567C2.25 14.857 15.0582 2.04883 30.8578 2.04883C46.6575 2.04883 59.4657 14.857 59.4657 30.6567C59.4657 46.4563 46.6575 59.2645 30.8578 59.2645ZM0.25 30.6567C0.25 13.7524 13.9536 0.0488281 30.8578 0.0488281C47.7621 0.0488281 61.4657 13.7524 61.4657 30.6567C61.4657 47.5609 47.7621 61.2645 30.8578 61.2645C13.9536 61.2645 0.25 47.5609 0.25 30.6567ZM50.2897 16.5166V44.6817H38.0739V46.9627H40.3538V49.2399H21.362V46.9627H23.6421V44.6817H11.426V16.5166H50.2897ZM48.0125 36.3274V18.7938H13.7032V36.3274H48.0125ZM48.0125 42.4046V38.6045H13.7032V42.4046H48.0125ZM25.9193 44.6817V46.9627H35.7965H35.7968V44.6817H25.9193ZM31.9973 26.1592H45.7327V28.4363H31.9973V26.1592ZM29.7183 26.1592H15.9829V28.4363H29.7183V26.1592ZM22.8203 21.6011H38.8957V23.8782H22.8203V21.6011ZM20.5411 21.6011H15.9829V23.8782H20.5411V21.6011ZM41.1746 21.6011H45.7328V23.8782H41.1746V21.6011ZM38.8957 30.7173H22.8203V32.9945H38.8957V30.7173ZM15.9829 30.7173H20.5411V32.9945H15.9829V30.7173ZM45.7328 30.7173H41.1746V32.9945H45.7328V30.7173Z"
                fill="#CD6E57"
              />
            </svg>
          </div>
          <h4>CRÉATION DE SITES WEB</h4>
          <div v-show="developer" class="content">
            Avec l'évolution du web, la rapidité et l'ergonomie sont deux points
            essanciels pour ne pas perdre l'utilisateur. Les technologies tel
            que <strong>VueJS</strong> ou <strong>NuxtJS</strong> me permettent
            notament de vous proposer des sites
            <strong title="Client Side Rendering">CSR</strong> ou
            <strong title="Server Side Rendering">SSR</strong> en fonction de
            vos besoins en terme de référencement.
          </div>
          <div v-show="!developer" class="content">
            Offrez à votre projet la visibilité qu’il mérite grâce à un site
            ergonomique et à votre image.
          </div>
        </div>
        <div class="prestation">
          <div class="icon-wrapper">
            <svg
              width="62"
              height="62"
              viewBox="0 0 62 62"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M30.6716 59.9169C14.8719 59.9169 2.06372 47.1087 2.06372 31.309C2.06372 15.5093 14.8719 2.70117 30.6716 2.70117C46.4712 2.70117 59.2794 15.5093 59.2794 31.309C59.2794 47.1087 46.4712 59.9169 30.6716 59.9169ZM0.0637207 31.309C0.0637207 14.4048 13.7673 0.701172 30.6716 0.701172C47.5758 0.701172 61.2794 14.4048 61.2794 31.309C61.2794 48.2133 47.5758 61.9169 30.6716 61.9169C13.7673 61.9169 0.0637207 48.2133 0.0637207 31.309ZM19.7787 44.9998C19.4565 45.0032 19.1351 44.9647 18.8227 44.8852C16.8212 44.3758 15.6088 42.3301 16.115 40.3158C16.6211 38.3014 18.654 37.0815 20.6556 37.5908L24.5338 30.902C23.8768 30.2 23.5128 29.2707 23.5171 28.3063C23.5262 26.2286 25.2072 24.5518 27.2718 24.561C29.3364 24.5702 31.0027 26.2619 30.9935 28.3396C30.9897 28.9611 30.8307 29.5717 30.531 30.1152L32.9684 32.5681C33.6982 32.1466 34.5545 32.0043 35.3801 32.1671L39.6524 23.5457C38.8911 22.8234 38.4628 21.8149 38.4702 20.7619C38.4849 18.6695 40.1825 16.9853 42.2618 17.0001C44.341 17.0149 46.0146 18.7233 45.9999 20.8158C45.9852 22.9082 44.2876 24.5924 42.2083 24.5776C41.9907 24.575 41.7737 24.553 41.56 24.512L37.2877 33.1334C38.0458 33.8483 38.4742 34.8484 38.47 35.8938C38.4617 37.9715 36.7813 39.649 34.7167 39.6406C32.6521 39.6323 30.9852 37.9412 30.9935 35.8635C30.9977 35.2419 31.1571 34.6313 31.4571 34.0879L29.0197 31.6351C28.2185 32.0945 27.2707 32.2207 26.3784 31.9866L22.5002 38.6754C23.1559 39.3744 23.5199 40.3001 23.5169 41.2613C23.5105 43.3325 21.8368 45.0062 19.7787 44.9998ZM43.8104 20.8156C43.8104 19.9252 43.0931 19.2033 42.2083 19.2033C41.3235 19.2033 40.6062 19.9252 40.6062 20.8156C40.6062 21.7061 41.3235 22.4279 42.2083 22.4279C43.0931 22.4279 43.8104 21.7061 43.8104 20.8156ZM36.3339 35.8635C36.3339 34.9731 35.6166 34.2513 34.7318 34.2513C33.8469 34.2513 33.1297 34.9731 33.1297 35.8635C33.1297 36.754 33.8469 37.4758 34.7318 37.4758C35.6166 37.4758 36.3339 36.754 36.3339 35.8635ZM28.8574 28.3396C28.8574 27.4491 28.1401 26.7273 27.2552 26.7273C26.3704 26.7273 25.6531 27.4491 25.6531 28.3396C25.6531 29.23 26.3704 29.9519 27.2552 29.9519C28.1401 29.9519 28.8574 29.23 28.8574 28.3396ZM21.3808 41.2378C21.3808 40.3474 20.6636 39.6255 19.7787 39.6255C18.8939 39.6255 18.1766 40.3474 18.1766 41.2378C18.1766 42.1283 18.8939 42.8501 19.7787 42.8501C20.6636 42.8501 21.3808 42.1283 21.3808 41.2378Z"
                fill="#CD6E57"
              />
            </svg>
          </div>
          <h4>OPTIMISATION SEO</h4>
          <div v-show="developer" class="content">
            L'optimisation de votre site pour le référencement naturel est une
            étape inévitable si vous souhaitez faire parti du
            <strong>carré d'or</strong> lors des recherches Google, cela passe
            par une optimisation du chargement de votre site, mais également la
            selection des <strong>mots clés précis</strong> qui seront
            interessants et judicieux de cibler.
          </div>
          <div v-show="!developer" class="content">
            Optimisons ensemble le référencement de votre projet afin de votre
            projet soit n°1 sur Google !
          </div>
        </div>
        <div class="prestation">
          <div class="icon-wrapper">
            <svg
              width="63"
              height="62"
              viewBox="0 0 63 62"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M31.4853 59.9169C15.6856 59.9169 2.87744 47.1087 2.87744 31.309C2.87744 15.5093 15.6856 2.70117 31.4853 2.70117C47.285 2.70117 60.0931 15.5093 60.0931 31.309C60.0931 47.1087 47.285 59.9169 31.4853 59.9169ZM0.877441 31.309C0.877441 14.4048 14.581 0.701172 31.4853 0.701172C48.3895 0.701172 62.0931 14.4048 62.0931 31.309C62.0931 48.2133 48.3895 61.9169 31.4853 61.9169C14.581 61.9169 0.877441 48.2133 0.877441 31.309ZM41.312 15.0668C41.4198 15.0438 43.9776 14.528 46.2248 16.7752C48.4721 19.0226 47.9562 21.5802 47.9332 21.688L47.8733 21.9673L23.4531 46.3876L15 48L16.6124 39.5469L41.0327 15.1266L41.312 15.0668ZM39.0448 25.3225L21.6103 42.757L22.9797 44.1264L40.4143 26.692L39.0448 25.3225ZM36.3081 22.5858L18.8736 40.0203L20.243 41.3897L37.6775 23.9552L36.3081 22.5858ZM39.0448 19.8491L37.6753 21.2185L41.7815 25.3246L43.151 23.9552L39.0448 19.8491ZM21.005 44.8861L18.1139 41.995L17.4325 45.5676L21.005 44.8861ZM44.5182 22.588L46.0669 21.0393C46.0927 20.5198 46.0094 19.2943 44.8575 18.1425C43.7093 16.9944 42.4726 16.9105 41.9601 16.9338L40.412 18.4818L44.5182 22.588Z"
                fill="#CD6E57"
              />
            </svg>
          </div>
          <h4>CRÉATION D’IDENTITÉ</h4>
          <div v-show="developer" class="content">
            L'identité visuelle de votre projet doit être scalable et rester de
            bonne qualité, peut importe l'appareil sur lequel elle apparait et
            pour cela rien de mieux qu'un travail <strong>vectoriel</strong>,
            peu importe le processus de création, en fin projet votre identité
            vous sera :proposé sous tous <strong>les formats actuels</strong> en
            plus des <strong>sources</strong>.
          </div>
          <div v-show="!developer" class="content">
            Votre identité visuelle est l’élément le plus important.<br />
            Il vous représente et vous rend unique.
          </div>
        </div>
      </div>
    </div>
    :
  </section>
</template>

<script>
export default {
  name: 'Prestations',
  data() {
    return {
      developer: false,
    }
  },
}
</script>

<style lang="scss">
#prestations {
  display: flex;
  flex-direction: column;
  padding: 64px 24px 72px;
  background-color: #f3f3f3;
  @media only screen and (max-width: $tablet) {
    padding: 64px 24px 48px;
  }
  .wrapper {
    margin: 0 auto;
    max-width: 1200px;
    width: 100%;
    .head {
      position: relative;
      height: 100px;
      padding-bottom: 24px;
      @media only screen and (max-width: $phone) {
        height: 80px;
      }
      .title {
        position: relative;
        h3 {
          font-weight: 500;
          font-size: 30px;
          color: #2b2b2b;
          margin: 0;
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
      .button {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        padding: 0 16px;
        height: 40px;
        background: #ffffff;
        bottom: 24px;
        right: 0;
        font-size: 16px;
        font-weight: 700;
        overflow: hidden;
        cursor: pointer;
        width: 180px;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
        transition: box-shadow 0.3s ease-in-out;
        @media only screen and (max-width: $phone) {
          display: none;
        }
        span {
          display: none;
        }
        &::after {
          content: 'DÉVELOPPEUR ?';
          color: #cd6e57;
          transition: 0.1s color ease-in;
          position: relative;
        }
        &.developer::after {
          content: 'UTILISATEUR ?';
        }
        &::before {
          position: absolute;
          content: '';
          height: 60px;
          width: 60px;
          bottom: -20px;
          left: -20px;
          background: linear-gradient(
            -135deg,
            transparent 0%,
            transparent 50%,
            #cd6e57 50%,
            #cd6e57 100%
          );
          transition: 0.3s width, 0.3s height;
        }
        &:hover {
          box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
          &::before {
            width: 300px;
            height: 300px;
          }
          &::after {
            content: 'Je te comprends !';
            color: #ffffff;
            transition: 0.3s color ease-in-out;
          }
          span {
            position: relative;
            z-index: 1;
            color: white;
          }
        }
      }
    }
    .elements {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 32px;
      @media only screen and(max-width: $tablet) {
        grid-template-columns: 1fr 1fr;
        gap: 24px;
      }
      @media only screen and (max-width: $phone) {
        grid-template-columns: 1fr;
      }
      .prestation {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #ffffff;
        padding: 24px 16px 32px;
        position: relative;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
        transition: box-shadow 0.3s ease-in-out;
        cursor: pointer;
        h4 {
          font-weight: 700;
          text-align: center;
          font-size: 20px;
          margin: 16px 0 16px;
          transition: color 0.3s ease-in-out;
        }
        .content {
          text-align: center;
          font-size: 13px;
          line-height: 16px;
          animation: popText 0.5s ease-in-out;
          color: #505050;
          @keyframes popText {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
        }
        &::after {
          content: '';
          width: 0%;
          height: 2px;
          background-color: #cd6e57;
          position: absolute;
          bottom: 0;
          margin: 0 auto;
          transition: width 0.3s ease-in-out;
        }
        &:hover {
          h4 {
            color: #cd6e57;
          }

          box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
          &::after {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>
