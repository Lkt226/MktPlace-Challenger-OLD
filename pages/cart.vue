<template>
  <div class="body">
    <Header/>
    <main class="offsetBoard">

      <table class="cart_table" cellpadding="2">
        <thead class="border_bottom">
          <tr>
            <th class="center">Produto</th>
            <th class="center">Quantidade</th>
            <th class="center">Valor unitario</th>
            <th class="start">Total</th>
          </tr>
          <tr>
            <td colspan="5" class="divider"></td>
          </tr>
        </thead>

        <tbody>
          <ItemTableCart v-for="(product, index) in cart" :key="index" :item="product" @refresh="refresh"/>
          <tr>
            <td colspan="5" class="divider"></td>
          </tr>
        </tbody>

        <tfoot class="border_bottom">
          <tr>
            <td colspan="2"></td>
            <td class="end">total a vista</td>
            <td class="start">{{total}}</td>
          </tr>
          <tr>
            <td colspan="2"></td>
            <td class="end">total parcelado</td>
            <td class="start">total valor parcelado</td>
          </tr>
          <tr>
            <td colspan="5" class="divider"></td>
          </tr>
        </tfoot>
      </table>
      <section class="cart_menu">
        <div class="clear_cart" @click="clearCart">
          <Icon name="garbage" color="var(--color-gray)"/>
          <p class="bold">Limpar carrinho</p>
        </div>

        <div class="buttons">
          <NuxtLink to="/"><button> Continuar comprando </button></NuxtLink>
          <button class="diferent-button" @click="goToCheckout"> Concluir compra </button>
        </div>
      </section>


    </main>
    <Footer class="fixed"/>
  </div>
</template>

<script>
const Users = require("../assets/services/User")
const user = Users()

export default {
  data() {
    return {
      cart: user.getCart(),
    }
  },
  mounted(){
    user.getStorageUser()
    this.refresh()
  },
  methods: {
    refresh() {
      this.cart = user.getCart()
    },
    clearCart() {
      user.clearCart()
      this.refresh()
    },
    goToCheckout() {
      if (this.cart.length > 0) {
        this.$router.push("/checkout")
      }else{
        alert("Carrinho vazio")
      }
    }
  },
  computed: {
    total(){
      let total = 0;
      this.cart.forEach(products => {
        total += products.price * products.quantity
      })
      return total
    }
  }

}

</script>

<style lang="scss" scoped>
  .fixed {
    position: fixed;
    bottom: 0;
    width: 100%;

    @media (max-width: 576px) {
      position: relative;
    }
  }

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
  .end {
    text-align: right;
  }

  .divider {
    border-bottom: 2px solid #e0e0e0;
    margin: 1rem 0;
  }

  .body{
    display: grid;
    grid-template-rows: min-content 100% min-content;

    @media (max-width: 576px) {
      display: block;
    }
  }
  .cart_table {
    background-color: #fff;
    width: 100%;

    td {
      padding: 0.5rem;
    }
    * {
      height: 1.5rem;
    }
  }

  .clear_cart{
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 1rem;
  }

  .cart_menu{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;

    @media (max-width: 576px) {
      flex-direction: column;

      *{
        width: 100%;
      }
    }

    .buttons{
      display: flex;

      @media (max-width: 576px) {
        flex-direction: column;
      }
      button{
        background-color: var(--color-gray);
        color: var(--color-black);

        padding: 0.5rem 1rem;
        margin-left: 1rem;

        border: none;
        border-radius: 3px;
        cursor: pointer;

        width: 10rem;
        font-size: 0.8rem;
        font-weight: bold;

        @media (max-width: 576px) {
          width: 100%;
          margin-left: 0;
        }
      }
      .diferent-button{
        background-color: var(--color-purple);
        color: var(--color-white);
      }
    }
  }
</style>
