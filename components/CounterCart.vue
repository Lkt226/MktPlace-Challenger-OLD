<template>
  <div>
    <button class="r-border" @click="decrement">-</button>
    <h4>{{count}}</h4>
    <button class="l-border" @click="increment">+</button>
  </div>
</template>

<script>
export default {
  name: 'CounterCart',
  props: {
    value: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      count: this.value
    }
  },
  methods: {
    increment() {
      this.count++
      this.$emit('input', this.count)
    },
    decrement() {
      this.count--
      this.$emit('input', this.count)
    }
  }
}
</script>

<style lang="scss" scoped>
  .l-border {
    border-left: 1px solid var(--color-black);
  }
  .r-border {
    border-right: 1px solid var(--color-black);
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid var(--color-black);

    margin: 0.5rem;

    button{
      border: none;
      font-size: 1rem;
      font-weight: bold;
      color: var(--color-black);
      width: 1.3rem;

      background: transparent;
    }

    h4{
      color: var(--color-black);
      font-weight: bold;
      margin: 0 0.5rem;
    }
  }
</style>
