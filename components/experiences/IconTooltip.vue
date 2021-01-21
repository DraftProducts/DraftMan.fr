<template>
  <div class="icon-tooltip">
    <img :src="path" :alt="name" />
    <div class="tooltip">
      {{ name }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'IconTooltip',
  props: {
    name: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
  },
  computed: {
    path() {
      return `/images/icons/${this.icon}.png`
    },
  },
}
</script>

<style lang="scss">
.icon-tooltip {
  height: 32px;
  position: relative;
  display: flex;
  justify-content: center;
  margin-right: 8px;
  &:last-child {
    margin-right: 0;
  }
  @media screen and (max-width: 780px) {
    height: 24px;
  }
  img {
    box-shadow: 0 0 4px hsla(0, 0%, 0%, 0.5);
    border-radius: 16px;
    height: 100%;
  }
  .tooltip {
    position: absolute;
    visibility: hidden;
    background-color: #ffffff;
    color: #cd6e57;
    text-align: center;
    padding: 4px 8px;
    border-radius: 16px;
    top: 80%;
    z-index: 1;
    opacity: 0;
    font-size: 14px;
    transition: opacity 0.6s, top 0.3s;
    box-shadow: 0 1px 3px hsla(0, 0%, 19%, 0.5);
    font-weight: 500;
  }
  &:hover .tooltip,
  .tooltip:hover {
    visibility: visible;
    opacity: 0.8;
    top: 110%;
  }
}
</style>
