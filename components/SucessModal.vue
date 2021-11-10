<template>
  <section id="sucess-modal">
    <div class="card">
      <NuxtLink to="/"><p class="close">x</p></NuxtLink>
      <div class="card-header">
        <Icon name="check-sucess" size="5rem" color="var(--color-green)" />
      </div>
      <div class="card-body">
        <h3>Seu cadastro foi concluido com sucesso!</h3>
      </div>
      <div class="card-footer" @click="goToHome">
        <Icon name="left-arrow" size="1rem" color="var(--color-purple)"/>
        <p>VOLTAR PARA HOME</p>
      </div>
    </div>

  </section>
</template>

<script>
export default {
  // Envia para pagina inicial
  methods:{
    goToHome(){
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
  #sucess-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .card{
      align-items: flex-end;
    .close{
      font-size: 1.2rem;
      color: var(--color-black);
      font-weight: normal;
      margin-right: 0.5rem;
      cursor: pointer;
    }
    .card-header{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      background: none;
      border: none;
    }
    .card-body{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
    }
    .card-footer{
      display: flex;
      justify-content: center;
      align-items: center;

      cursor: pointer;

      width: 100%;
      padding-top: 0;
      padding-bottom: 2.5rem;

      background: none;
      border: none;
      p{
        color: var(--color-purple);
        padding-left: 0.3rem;
        font-weight: bold;
      }
    }
  }

</style>
