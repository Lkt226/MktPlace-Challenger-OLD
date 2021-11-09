<template>
  <tr class="border_bottom">
    <td class="center info-section">
      <Icon name="garbage" color="var(--color-gray)" id="trash"/>
      <p id="category" class="bold">Eletrônicos</p>
      <h4 id="product">Notebook Acer</h4>
    </td>

    <td class="center" id="Count">
      <CounterCart/>
    </td>

    <td class="center">Values unitario</td>
    <td></td>
    <td class="start">Values total</td>
  </tr>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
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
    }
    #category{
      grid-area: category;
    }
    #product{
      grid-area: product;
    }
  }

</style>
