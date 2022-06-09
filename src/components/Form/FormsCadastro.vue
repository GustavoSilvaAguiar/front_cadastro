<template>
  <form class="view__form">
    <h1 class="view__titulo">Cadastro Cliente</h1>
    <div class="view__formDIV">
      <label for="razaoSocial">Razão Social</label>
      <input
        type="text"
        id="razaoSocial"
        v-model="razaoSocial"
        name="cadastroRazaoSocial"
        placeholder="Digite a razão social"
        required
      />
    </div>
    <div class="view__formDIV">
      <label for="nomeFantasia">Nome Fantasia</label>
      <input
        type="text"
        id="nomeFantasia"
        name="cadastroNomeFantasia"
        placeholder="Digite o nome fantasia"
      />
    </div>
    <div class="view__formDIV">
      <label for="cnpj">CNPJ</label>
      <input
        type="text"
        id="cnpj"
        name="cadastroCnpj"
        placeholder="Digite o CNPJ"
      />
    </div>
    <button id="btn" class="btn" @click="postCliente">Cadastrar</button>
  </form>
</template>
<script>
import axios from "axios";
export default {
  name: "FormsCadastro",
  data() {
    return {
      razaoSocial: "",
    };
  },
  methods: {
    async postCliente(e) {
      console.log("1", this.razaoSocial);
      var razaoSocial = this.razaoSocial;
      var nomeFantasia = document.getElementById("nomeFantasia");
      var cnpj = document.getElementById("cnpj");
      if (!this.razaoSocial) {
        document.getElementById("razaoSocial").style.borderColor = "red";
      }
      if (!this.nomeFantasia) {
        document.getElementById("nomeFantasia").style.borderColor = "red";
      }
      if (!this.cnpj) {
        document.getElementById("cnpj").style.borderColor = "red";
      }
      e.preventDefault();
      try {
        await axios.post("https://localhost:5001/ContaCliente", {
          razaoSocial: razaoSocial.value,
          nomeFantasia: nomeFantasia.value,
          cnpj: cnpj.value,
        });
        alert("Cadastro realizado com sucesso");
      } catch (error) {
        console.error(error);
        alert(
          "Não foi possivel cadastrar o parceiro\nVerifique se os dados marcados com (*) estão todos preenchidos"
        );
      }
    },
  },
};
</script>
<style >
.view__form {
  display: flex;
  flex-direction: column;
  align-content: space-between;
  justify-content: space-between;
  width: 70vw;
  height: 60vh;
  padding: 5%;
}
.view__formDIV {
  display: flex;
  flex-direction: column;
}
.btn:hover {
  cursor: pointer;
}
</style>