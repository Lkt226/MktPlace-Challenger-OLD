<template>
  <header class="header offsetBoard">
    <NuxtLink to="/"><MktPlaceLogo class="bold"/></NuxtLink>
    <nav class="header-nav">
      <NuxtLink to="/">Produtos</NuxtLink>
      <NuxtLink to="/cart">
        <Icon name="shopping-cart" color="var(--color-purple)" size="1.5rem"/>
      </NuxtLink>
    </nav>
  </header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4rem;
    background-color: #fff;
    box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.05);
    z-index: 10;
  }

  .header-nav {
    display: flex;
    align-items: center;
    a{
      margin-left: 1rem;
      font-size: 1rem;
      text-decoration: none;
      font-weight: bold;
      &:first-child{
        margin-left: 0;
      }
    }
  }

</style>
