<template>
  <label>
    <input type="radio" :name="'radio_'+tag" :id="'radio_'+tag" :checked="Checked? true : false" class="radio"/>
    <span>{{name}}</span>
    <div id="newRadio">
      <div id="contentRadio"/>
    </div>
  </label>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'Produto sem nome'
    },
    tag: {
      type: String,
      default: 'banner'
    },
    Checked: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
  label{
    font-size: 0;
    margin: 1rem;

    #newRadio{
      display: flex;
      justify-content: center;
      align-items: center;

      width: 1rem;
      height: 1rem;
      border: 2px solid var(--color-gray);
      border-radius: 50%;
      position: relative;
      cursor: pointer;
      transition: all .3s ease;
    }
    .radio{
      display: none;
    }
  }
  .radio:checked ~ #newRadio{
    border: 2px solid var(--color-purple);
    #contentRadio{
      width: 50%;
      height: 50%;
      border-radius: 50%;
      background-color: var(--color-purple);
    }
  }


</style>
