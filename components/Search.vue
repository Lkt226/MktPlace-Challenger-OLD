<template>
  <div action="" class="seach_area offsetBoard-m">
    <label for="search_product" class="bold gray">Encontre seu produto</label>
    <input
      type="text"
      placeholder="Pesquisar ... "
      name="search_product"
      id="search_product"
      @input="searchProduct"
    />
    <button>
      <Icon name="magnifying-glass" color="var(--color-white)"/>
    </button>
  </div>
</template>

<script>
export default {
  created() {
    this.$emit('search', '')
  },
  methods: {
    searchProduct(e) {
      this.$emit('search', e.target.value)
    },
  }
}
</script>

<style lang="scss" scoped>
  .gray {
    color: var(--color-dkgray);
  }
 .seach_area {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 1rem 2rem;
    margin: 2rem;

    background-color: #fff;
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.05);

    *{
      margin: 0;
      padding: 0;
      height: 2rem;
    }

    input{
      width: 100%;
      border: 1px solid var(--color-black);
      border-right: none;
      border-radius: 0.25rem 0 0 0.25rem;
      font-size: 1rem;
      padding: 0.5rem;

    }
    label{
      font-size: 1rem;
      margin-right: 1rem;
      min-width: fit-content;

      @media (max-width: 576px) {
        font-size: 0rem;
        display: none;
      }
    }
    button{
      width: 2.5rem;

      display: flex;
      justify-content: center;
      align-items: center;

      border-radius: 0 0.25rem 0.25rem 0;
      border: 1px solid var(--color-purple);
      background: var(--color-purple);
    }
  }

</style>
