<template>
  <div :style="`fill:${color}; width: ${size}; height: ${size};`" v-html="getIcon"/>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: 'var(--color-black)'
    },
    size: {
      type: String,
      default: '1rem'
    }
  },
  computed: {
    getIcon() {
      return require(`/assets/resources/icons/${this.name}.svg?raw`);
    }
  }
}
</script>

<style lang="scss" scoped>
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin: 0;
  }
</style>
