<template>
  <div>
    <Header class="offsetBoard"/>
    <main>
      <Banner/>
      <Search @search="getSearchValue"/>
      <section id="products" class="offsetBoard">
        <ProductContainer v-for="product in searchFilter" :key="product.id" :product="product"/>
      </section>
    </main>
    <Footer/>
  </div>
</template>

<script>
const Users = require("../assets/services/User")
const user = Users()
const ApiUrl = 'https://raw.githubusercontent.com/owInteractive/desafio-frontend-2020/master/produtos.json'

export default {
  async fetch(){
    const products = await this.$axios.$get(ApiUrl)
    this.products = products
  },
  mounted(){
    user.getStorageUser()
  },

  data () {
    return {
      products: this.products,
      searchValue: '',
    }
  },
  methods: {
    getSearchValue(value){
      this.searchValue = value
    },
  },

  computed: {
    searchFilter () {
      if(this.products){
        return this.products.filter(product => {
          return product.name.toLowerCase().includes(this.searchValue.toLowerCase())
        })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
  #products{
    display: grid;
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;

    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 576px) {
      grid-template-columns: 1fr;
    }
  }
</style>
