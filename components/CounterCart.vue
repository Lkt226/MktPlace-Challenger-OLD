<template>
  <div>
    <button class="r-border" @click="decrement">-</button>
    <h4>{{count}}</h4>
    <button class="l-border" @click="increment">+</button>
  </div>
</template>

<script>
const Users = require("../assets/services/User")
const user = new Users()

export default {
  created() {
    this.$emit('refresh', '')
  },
  props: {
    value: {
      type: Number,
      default: 0
    },
    productId: {
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
      user.addQuantity(this.productId)
      this.$emit('refresh', '')
    },
    decrement() {
      this.count--
      user.removeQuantity(this.productId)
      this.$emit('refresh', '')
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
