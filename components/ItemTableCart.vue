<template>
  <tr class="border_bottom">
    <td class="center info-section">
      <div id="trash" @click="removeProduct">
        <Icon name="garbage" color="var(--color-gray)" />
      </div>
      <p id="category" class="bold">{{product.category}}</p>
      <h4 id="product">{{product.name}}</h4>
    </td>

    <td class="center" id="Count">
      <CounterCart :value="product.quantity" :productId="product.id" @refresh="refresh"/>
    </td>

    <td class="center">{{product.price}}</td>
    <td class="md"></td>
    <td class="start">{{totalPrice}}</td>
  </tr>
</template>

<script>
const Users = require("../assets/services/User")
const user = new Users()

export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      product: this.item
    }
  },
  methods: {
    refresh() {
      this.product = user.getUniqueProduct(this.item.id)
      this.$emit("refresh")
    },
    removeProduct() {
      user.removeFromCart(this.product.id)
      this.$emit("refresh")
    }
  },
  computed: {
    totalPrice() {
      return this.product.quantity * this.product.price;
    }
  }
}
</script>

<style lang="scss" scoped>
  .md{
    @media (max-width: 576px) {
      display: none;
    }
  }

  .center {
    text-align: center;
  }
  .start {
    text-align: left;
  }

  .info-section{
    display: grid;
    grid-template-areas:
      "none category"
      "trash product";

    #trash{
      grid-area: trash;
      cursor: pointer;
    }
    #category{
      grid-area: category;
    }
    #product{
      grid-area: product;
    }
  }

</style>
