<template>
  <section id="prestations">
    <div class="wrapper">
      <div class="head">
        <div class="title">
          <h3>
            Prestations
          </h3>
        </div>
        <div :class="['button', developer ? 'developer' : '']" @click="developer = !developer">
          <span>DÉVELOPPEUR ?</span>
        </div>
      </div>
      <div class="elements">
        <div class="prestation">
          <div class="icon-wrapper">
            <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M30.8578 59.2645C15.0582 59.2645 2.25 46.4563 2.25 30.6567C2.25 14.857 15.0582 2.04883 30.8578 2.04883C46.6575 2.04883 59.4657 14.857 59.4657 30.6567C59.4657 46.4563 46.6575 59.2645 30.8578 59.2645ZM0.25 30.6567C0.25 13.7524 13.9536 0.0488281 30.8578 0.0488281C47.7621 0.0488281 61.4657 13.7524 61.4657 30.6567C61.4657 47.5609 47.7621 61.2645 30.8578 61.2645C13.9536 61.2645 0.25 47.5609 0.25 30.6567ZM50.2897 16.5166V44.6817H38.0739V46.9627H40.3538V49.2399H21.362V46.9627H23.6421V44.6817H11.426V16.5166H50.2897ZM48.0125 36.3274V18.7938H13.7032V36.3274H48.0125ZM48.0125 42.4046V38.6045H13.7032V42.4046H48.0125ZM25.9193 44.6817V46.9627H35.7965H35.7968V44.6817H25.9193ZM31.9973 26.1592H45.7327V28.4363H31.9973V26.1592ZM29.7183 26.1592H15.9829V28.4363H29.7183V26.1592ZM22.8203 21.6011H38.8957V23.8782H22.8203V21.6011ZM20.5411 21.6011H15.9829V23.8782H20.5411V21.6011ZM41.1746 21.6011H45.7328V23.8782H41.1746V21.6011ZM38.8957 30.7173H22.8203V32.9945H38.8957V30.7173ZM15.9829 30.7173H20.5411V32.9945H15.9829V30.7173ZM45.7328 30.7173H41.1746V32.9945H45.7328V30.7173Z" fill="#CD6E57" />
            </svg>
          </div>
          <h4>CRÉATION DE SITES WEB</h4>
          <div v-show="developer" class="content">
            Sites vitrines, sites de news, boutiques e-commerce, etc.<br>
            Retrouvez un large éventail de services de création<br>
            de sites web sur-mesure. test<br>
            BIG TEXT
          </div>
          <div v-show="!developer" class="content">
            Offrez à votre projet la visibilité qu’il mérite grace à un site ergonomique et à votre image.
          </div>
        </div>
        <div class="prestation">
          <div class="icon-wrapper">
            <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M2.06372 31.3089C2.06372 47.1086 14.8719 59.9167 30.6716 59.9167C46.4712 59.9167 59.2794 47.1086 59.2794 31.3089C59.2794 15.5092 46.4712 2.70105 30.6716 2.70105C14.8719 2.70105 2.06372 15.5092 2.06372 31.3089ZM30.6716 0.70105C13.7673 0.70105 0.0637207 14.4046 0.0637207 31.3089C0.0637207 48.2131 13.7673 61.9167 30.6716 61.9167C47.5758 61.9167 61.2794 48.2131 61.2794 31.3089C61.2794 14.4046 47.5758 0.70105 30.6716 0.70105ZM37.8453 47.7059H23.4979C21.425 47.7059 19.7402 46.0211 19.7402 43.9482V18.6694C19.7402 16.5965 21.425 14.9117 23.4979 14.9117H37.8453C39.9182 14.9117 41.603 16.5965 41.603 18.6694V43.9482C41.603 46.0211 39.9182 47.7059 37.8453 47.7059ZM23.4979 16.9614C22.5564 16.9614 21.7899 17.7279 21.7899 18.6694V43.9482C21.7899 44.8897 22.5564 45.6562 23.4979 45.6562H37.8453C38.7868 45.6562 39.5533 44.8897 39.5533 43.9482V18.6694C39.5533 17.7279 38.7868 16.9614 37.8453 16.9614H23.4979ZM28.6221 41.5568C28.6221 42.6869 29.5417 43.6065 30.6717 43.6065C31.8017 43.6065 32.7213 42.6869 32.7213 41.5568C32.7213 40.4268 31.8017 39.5072 30.6717 39.5072C29.5417 39.5072 28.6221 40.4268 28.6221 41.5568Z" fill="#CD6E57" />
            </svg>
          </div>
          <h4>CRÉATION D’APPLICATIONS</h4>
          <div v-show="developer" class="content">
            Sites vitrines, sites de news, boutiques e-commerce, etc.<br>
            Retrouvez un large éventail de services de création<br>
            de sites web sur-mesure. test<br>
            BIG TEXT
          </div>
          <div v-show="!developer" class="content">
            Optimisons ensemble le référencement de votre projet afin de votre projet soit n°1 sur Google !
          </div>
        </div>
        <div class="prestation">
          <div class="icon-wrapper">
            <svg width="63" height="62" viewBox="0 0 63 62" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M31.4853 59.9169C15.6856 59.9169 2.87744 47.1087 2.87744 31.309C2.87744 15.5093 15.6856 2.70117 31.4853 2.70117C47.285 2.70117 60.0931 15.5093 60.0931 31.309C60.0931 47.1087 47.285 59.9169 31.4853 59.9169ZM0.877441 31.309C0.877441 14.4048 14.581 0.701172 31.4853 0.701172C48.3895 0.701172 62.0931 14.4048 62.0931 31.309C62.0931 48.2133 48.3895 61.9169 31.4853 61.9169C14.581 61.9169 0.877441 48.2133 0.877441 31.309ZM41.312 15.0668C41.4198 15.0438 43.9776 14.528 46.2248 16.7752C48.4721 19.0226 47.9562 21.5802 47.9332 21.688L47.8733 21.9673L23.4531 46.3876L15 48L16.6124 39.5469L41.0327 15.1266L41.312 15.0668ZM39.0448 25.3225L21.6103 42.757L22.9797 44.1264L40.4143 26.692L39.0448 25.3225ZM36.3081 22.5858L18.8736 40.0203L20.243 41.3897L37.6775 23.9552L36.3081 22.5858ZM39.0448 19.8491L37.6753 21.2185L41.7815 25.3246L43.151 23.9552L39.0448 19.8491ZM21.005 44.8861L18.1139 41.995L17.4325 45.5676L21.005 44.8861ZM44.5182 22.588L46.0669 21.0393C46.0927 20.5198 46.0094 19.2943 44.8575 18.1425C43.7093 16.9944 42.4726 16.9105 41.9601 16.9338L40.412 18.4818L44.5182 22.588Z" fill="#CD6E57" />
            </svg>
          </div>
          <h4>CRÉATION D’IDENTITÉ</h4>
          <div v-show="developer" class="content">
            Sites vitrines, sites de news, boutiques e-commerce, etc.<br>
            Retrouvez un large éventail de services de création<br>
            de sites web sur-mesure. test<br>
            BIG TEXT
          </div>
          <div v-show="!developer" class="content">
            Votre identité visuelle est l’élément le plus important.<br>
            Il vous représente et vous rend unique.
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
    name: 'Prestations',
    data () {
        return {
            developer: false
        }
    }
}
</script>

<style lang="scss">
#prestations{
    display: flex;
    flex-direction: column;
    padding: 64px 24px 72px;
    background-color: #F3F3F3;
    @media only screen and (max-width: $tablet) {
        padding: 64px 24px 48px;
    }
    .wrapper{
        margin: 0 auto;
        max-width: 1200px;
        width: 100%;
        .head{
            position: relative;
            height: 100px;
            padding-bottom: 24px;
            @media only screen and (max-width: $phone) {
                height: 80px;
            }
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
            .button{
                display: flex;
                align-items: center;
                justify-content: center;
                position: absolute;
                padding: 0 16px;
                height: 40px;
                background: #FFFFFF;
                bottom: 24px;
                right: 0;
                font-size: 16px;
                font-weight: 700;
                overflow: hidden;
                cursor: pointer;
                width: 180px;
                box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.25);
                transition: box-shadow .3s ease-in-out;
                @media only screen and (max-width: $phone) {
                    display: none;
                }
                span{
                    display: none;
                }
                &:after{
                    content: 'DÉVELOPPEUR ?';
                    color: #cd6e57;
                    transition: .1s color ease-in;
                    position: relative;

                }
                &.developer:after{
                    content: 'UTILISTATEUR ?';
                }
                &:before{
                    position: absolute;
                    content: '';
                    height: 60px;
                    width: 60px;
                    bottom: -20px;
                    left: -20px;
                    background: linear-gradient(-135deg, transparent 0%, transparent 50%, #cd6e57 50%, #cd6e57 100%);
                    transition: .3s width, .3s height;
                }
                &:hover{
                    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
                    &:before{
                        width: 300px;
                        height: 300px;
                    }
                    &:after{
                        content: 'Je te comprends !';
                        color: #ffffff;
                        transition: .3s color ease-in-out;
                    }
                    span{
                        position: relative;
                        z-index: 1;
                        color: white;
                    }
                }
            }
        }
        .elements{
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-gap: 32px;
            @media only screen and (max-width: $tablet) {
                grid-template-columns: 1fr 1fr;
                grid-gap: 24px;
            }
            @media only screen and (max-width: $phone) {
                grid-template-columns: 1fr;
            }
            .prestation{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                background-color: #FFFFFF;
                padding: 24px 16px 32px;
                position: relative;
                box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.25);
                transition: box-shadow .3s ease-in-out;
                cursor: pointer;
                h4{
                    font-weight: 700;
                    text-align: center;
                    font-size: 20px;
                    margin: 16px 0 16px;
                    transition: color .3s ease-in-out;
                }
                .content{
                    text-align: center;
                    font-size: 13px;
                    animation: popText .5s ease-in-out;
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
                    h4{
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
</style>
