<template>
  <section class="banner">
    <div class="content_banner offsetBoard">
      <h1 class="white bold">Notebooks</h1>
      <h3 class="white">As melhores ofertas</h3>
    </div>
    <div class="radio_list">
      <Radio Checked/>
      <Radio/>
      <Radio/>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.white{
  color: var(--color-white);
}
.content_banner {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  height: 40vh;
  background: linear-gradient(270deg, rgba(253, 253, 253, 0.5) 0%, rgba(78, 78, 78, 0.5) 100%), var(--color-purple);

}
.radio_list {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
