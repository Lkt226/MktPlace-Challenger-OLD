<template>
  <div class="body">
    <Header/>
    <main>
      <form action="" method="post" class="offsetBoard">
        <label id="name">
          <p>Nome*</p> <input type="text" name="name">
        </label>
        <label id="email">
          <p>E-mail*</p> <input type="email" name="email">
        </label>
        <label id="cpf">
          <p>CPF*</p> <input type="password" name="cpf">
        </label>
        <label id="birthday">
          <p>Data de Nascimento*</p> <input type="date" name="birthday">
        </label>
        <label id="telphone">
          <p>Telefone*</p> <input type="tel" name="telphone">
        </label>

        <label id="cep">
          <p>CEP*</p> <input type="text" name="cep">
        </label>
        <label id="endress">
          <p>Endereço*</p> <input type="text" name="endress">
        </label>
        <label id="num">
          <p>Número*</p> <input type="text" name="num">
        </label>
        <label id="complement">
          <p>Complemento</p> <input type="text" name="complement">
        </label>
        <label id="bairro">
          <p>Bairro*</p> <input type="text" name="bairro">
        </label>
        <label id="city">
          <p>Cidade*</p> <input type="text" name="city">
        </label>
        <label id="state">
          <p>Estado*</p> <input type="text" name="state">
        </label>

        <button id="button_finish" class="diferent-button" type="submit">Concluir compra</button>
      </form>
    </main>
    <Footer class="fixed"/>
  </div>
</template>

<script>
export default {

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
  .body {
    width: 100%;
    height: 100%;
  }

  main {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 80%;

      @media (max-width: 576px) {
        height: 100%;
      }
    }


  form{
    display: grid;
    grid-gap: 1rem;
    grid-row-gap: 0.5rem;

    grid-template:
      "name name cep cep"
      "email email endress num"
      "cpf cpf complement bairro"
      "birthday telphone city state"
      "none none finish finish"/
      1fr 1fr 1fr 1fr;

    @media (max-width: 576px) {
      grid-template:
        "name name"
        "cep cep"
        "email email"
        "endress num"
        "cpf cpf"
        "complement bairro"
        "birthday telphone"
        "city state"
        "finish finish"/
        1fr 1fr;
    }

    label{
      display: block;
    }

    #name, #email, #cpf, #birthday, #telphone, #cep, #endress, #num, #complement, #bairro, #city, #state{
      input{
        width: 100%;
        height: 2rem;

        border: 1px solid var(--color-black);
        border-radius: 2px;
        padding: 5px;
      }
    }
  }

  form{ //Templates de aréa
     #name{
      grid-area: name;
    }
    #email{
      grid-area: email;
    }
    #cpf{
      grid-area: cpf;
    }
    #birthday{
      grid-area: birthday;
    }
    #telphone{
      grid-area: telphone;
    }
    #cep{
      grid-area: cep;
    }
    #endress{
      grid-area: endress;
      width: 130%;
    }
    #num{
      grid-area: num;
      width: 70%;
      justify-self: right;
    }
    #complement{
      grid-area: complement;
      width: 90%;
    }
    #bairro{
      grid-area: bairro;
      width: 110%;
      justify-self: right;
    }
    #city{
      grid-area: city;
      width: 130%;
    }
    #state{
      grid-area: state;
      width: 70%;
      justify-self: right;
    }
    #button_finish{
      grid-area: finish;
      width: 70%;
      justify-self: right;
    }
  }

  .diferent-button{
    background-color: var(--color-gray);
    color: var(--color-black);

    padding: 0.5rem 1rem;

    border: none;
    border-radius: 3px;
    cursor: pointer;

    font-size: 1rem;
    font-weight: bold;
    background-color: var(--color-purple);
    color: var(--color-white);
  }
</style>
