<template>
  <div class="body">
    <Header />
    <main>
      <form action="" name="checkout" method="post" class="offsetBoard" @submit="handleSubmit">
        <label id="name">
          <p>Nome*</p>
          <input type="text" required name="name" id="inputName" :value="myName"/>
        </label>
        <label id="email">
          <p>E-mail*</p>
          <input type="email" required name="email" placeholder="voce@gmail.com" id="inputEmail" :value="myEmail"/>
        </label>
        <label id="cpf">
          <p>CPF*</p>
          <input type="text" inputmode="numeric" minlength="11" maxlength="14" placeholder="111.111.111-99" id="inputCPF"
          pattern="^[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}" :value="myCPF" @input="formatCPF" required name="cpf"/>
        </label>
        <label id="birthday">
          <p>Data de Nascimento*</p>
          <input type="date" required name="birthday" id="inputBirth" :value="myBirth"/>
        </label>
        <label id="telphone">
          <p>Telefone*</p>
          <input type="text" required name="telphone" placeholder="21 98930-6866" minlength="11" maxlength="15"
          inputmode="tel" :value="myTel" @input="formatTel" id="inputTel" pattern="^[0-9]{2} ?[0-9]{5}-?[0-9]{4}"/>
        </label>

        <label id="cep">
          <p>CEP*</p>
          <input type="text" required name="cep" :placeholder="myCEPplace !== '' ? myCEPplace : '24860-148'" minlength="8" maxlength="9"
          :value="myCEP" @input="formatCEP" @change="getCEP" id="inputCEP"/>
        </label>
        <label id="endress">
          <p>Endereço*</p>
          <input type="text" required name="endress" :value="EndressComplete.endress" id="inputEndress"/>
        </label>
        <label id="num">
          <p>Número</p>
          <input type="number" name="num" :value="EndressComplete.num" id="inputNum"/>
        </label>
        <label id="complement">
          <p>Complemento</p>
          <input type="text" name="complement" :value="EndressComplete.complement" id="inputComplement"/>
        </label>
        <label id="bairro">
          <p>Bairro*</p>
          <input type="text" required name="bairro" :value="EndressComplete.bairro" id="inputBairro"/>
        </label>
        <label id="city">
          <p>Cidade*</p>
          <input type="text" required name="city" :value="EndressComplete.city" id="inputCity"/>
        </label>
        <label id="state">
          <p>Estado*</p>
          <input type="text" required name="state" :value="EndressComplete.state" id="inputState" />
        </label>

        <button id="button_finish" class="diferent-button" type="submit">
          Concluir compra
        </button>
      </form>
    </main>
    <Footer class="fixed" />
    <SucessModal :style="modal === true ? '' : 'display: none;'"/>
  </div>
</template>

<script>
const Users = require("../assets/services/User")
const user = Users()

export default {
  mounted() {
    this.getUserInfo()
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault()
      this.setUserInfo()
      //this.modal = true
    },
    setUserInfo() {
      const info = {
        name: document.querySelector("#inputName").value,
        email: document.querySelector("#inputEmail").value,
        cpf: document.querySelector("#inputCPF").value,
        phone: document.querySelector("#inputTel").value,
        birth: document.querySelector("#inputBirth").value,

        cep: document.querySelector("#inputCEP").value,
        address: document.querySelector("#inputEndress").value,
        number: document.querySelector("#inputNum").value,
        complement: document.querySelector("#inputComplement").value,
        bairro: document.querySelector("#inputBairro").value,
        city: document.querySelector("#inputState").value,
        state: document.querySelector("#inputState").value,
      }
      user.setUserInfo(info)
    },
    getUserInfo() {
      this.myName = user.getUserInfo().name
      this.myEmail = user.getUserInfo().email
      this.myTel = user.getUserInfo().phone
      this.myBirth = user.getUserInfo().birth

      this.myCEPplace = user.getUserInfo().cep
    },
    async getCEP(e) {
      let cep = e.target.value
      cep = cep.replace("-", '')
      if (cep.length === 8) {
        let CepEndress = await this.$axios.$get(`https://viacep.com.br/ws/${cep}/json/`)
        if (CepEndress.erro) {
          console.log('CEP não encontrado')
        } else {
           this.EndressComplete = {
            endress: CepEndress.logradouro,
            complement: CepEndress.complemento,
            bairro: CepEndress.bairro,
            city: CepEndress.localidade,
            state: CepEndress.uf
          }
        }
      }
    },

    // Formats
    formatCPF(e) {
      let value = e.target.value
      value = value.replace(/\D/g, '')
      value = value.replace(/(\d{3})(\d)/, '$1.$2')
      value = value.replace(/(\d{3})(\d)/, '$1.$2')
      value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2')
      this.myCPF = value
    },
    formatCEP(e) {
      let value = e.target.value
      value = value.replace(/\D/g, '')
      value = value.replace(/(\d{5})(\d)/, '$1-$2')
      this.myCEP = value
    },
    formatTel(e) {
      let value = e.target.value
      value = value.replace(/\D/g, '')
      value = value.replace(/(\d{2})(\d)/, '($1) $2')
      value = value.replace(/(\d{5})(\d)/, '$1-$2')
      this.myTel = value
    }
  },
  data() {
    return {
      myName: '',
      myBirth: '',
      myEmail: '',
      myCPF: '',
      myCEP: '',
      myCEPplace: '',
      myTel: '',
      EndressComplete: {
        endress: '',
        complement: '',
        bairro: '',
        city: '',
        state: '',
        num: ''
      },
      modal: false,
    }
  },
};
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

form {
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

  label {
    display: block;
  }

  #name,
  #email,
  #cpf,
  #birthday,
  #telphone,
  #cep,
  #endress,
  #num,
  #complement,
  #bairro,
  #city,
  #state {
    input {
      width: 100%;
      height: 2rem;

      border: 1px solid var(--color-black);
      border-radius: 2px;
      padding: 5px;
    }
  }
}

form {
  //Templates de aréa
  #name {
    grid-area: name;
  }
  #email {
    grid-area: email;
  }
  #cpf {
    grid-area: cpf;
  }
  #birthday {
    grid-area: birthday;
  }
  #telphone {
    grid-area: telphone;
  }
  #cep {
    grid-area: cep;
  }
  #endress {
    grid-area: endress;
    width: 130%;
  }
  #num {
    grid-area: num;
    width: 70%;
    justify-self: right;
  }
  #complement {
    grid-area: complement;
    width: 90%;
  }
  #bairro {
    grid-area: bairro;
    width: 110%;
    justify-self: right;
  }
  #city {
    grid-area: city;
    width: 130%;
  }
  #state {
    grid-area: state;
    width: 70%;
    justify-self: right;
  }
  #button_finish {
    grid-area: finish;
    width: 70%;
    justify-self: right;
  }
}

.diferent-button {
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
