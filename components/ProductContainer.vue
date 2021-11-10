<template>
  <div class="container_product">
    <img
      :src="product.imageUrl"
      alt="product1"
      class="product_img"
    />
    <div class="product_texts">
      <p class="bold purple">{{product.category}}</p>
      <h4 class="bold">{{product.name}}</h4>
      <p class="description">
        {{product.description}}
      </p>
      <div class="product_price">
        <span>R$</span>
        <span>{{product.price}}</span>
      </div>
    </div>
    <button type="button" @click="addToCart" class="product_button bold">Adicionar ao carrinho</button>
  </div>
</template>

<script>
const Users = require("../assets/services/User")
const user = new Users()

export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    addToCart() {
      user.addToCart(this.product)
    }
  }
}
</script>

<style lang="scss" scoped>
  .purple{
    color: var(--color-purple);
  }
  .container_product {
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.10);

    .product_texts {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      padding: 1rem;
      height: min-content;

      .description {
        overflow-y: auto;
        max-height: 5rem;
        margin-bottom: 1rem;

        &::-webkit-scrollbar {
          width: 1rem;
        }
      }
    }
    .product_img {
      width: 100%;
      padding: 0 2rem;

      background-size: cover;
      background-position: center;
    }
  }

  .product_button {
      width: 100%;
      height: 2.5rem;

      border: 0;
      border-top: 1px solid #ccc;
      background: var(--color-white);
      color: var(--color-purple);

      &:hover{
        background: var(--color-purple);
        color: var(--color-white);
      }
    }
</style>
