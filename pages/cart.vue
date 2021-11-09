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
            <th></th>
            <th class="start">Total</th>
          </tr>
          <tr>
            <td colspan="5" class="divider"></td>
          </tr>
        </thead>

        <tbody>
          <ItemTableCart v-for="product in cart" :key="product.id"/>
          <tr>
            <td colspan="5" class="divider"></td>
          </tr>
        </tbody>

        <tfoot class="border_bottom">
          <tr>
            <td colspan="3"></td>
            <td class="end">total a vista</td>
            <td class="start">valor a vista</td>
          </tr>
          <tr>
            <td colspan="3"></td>
            <td class="end">total parcelado</td>
            <td class="start">total valor parcelado</td>
          </tr>
          <tr>
            <td colspan="5" class="divider"></td>
          </tr>
        </tfoot>
      </table>
      <section class="cart_menu">
        <div class="clear_cart">
          <Icon name="garbage" color="var(--color-gray)"/>
          <p class="bold">Limpar carrinho</p>
        </div>
      </section>


    </main>
    <Footer style="display: fixed; bottom: 0;"/>
  </div>
</template>

<script>
const Users = require("../assets/services/User")
const user = new Users()

export default {
  data(){
    return{
      cart: user.getCart()
    }
  }

}

</script>

<style lang="scss" scoped>

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
  }
</style>
