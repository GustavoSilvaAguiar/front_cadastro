<template>
        <form class="view__form">
            <h1 class="view__titulo">Cadastro Cliente</h1>
            <div class="view__formDIV">
                <label for="razaoSocial">Razão Social</label>
                <input type="text" id="razaoSocial" name="cadastroRazaoSocial"  placeholder="Digite a razão social" required>
            </div>
            <div class="view__formDIV">
                <label for="nomeFantasia">Nome Fantasia</label>
                <input type="text" id="nomeFantasia" name="cadastroNomeFantasia"  placeholder="Digite o nome fantasia">
            </div>
            <div class="view__formDIV">
                <label for="cnpj">CNPJ</label>
                <input type="text" id="cnpj" name="cadastroCnpj" placeholder="Digite o CNPJ">
            </div>
            <button @click="postCliente">Cadastrar</button>
        </form>
</template>
<script>
import axios from 'axios';
export default {
    name:"FormsCadastro",
    methods:{
       async postCliente(e){
           var razaoSocial = document.getElementById('razaoSocial');
           var nomeFantasia = document.getElementById('nomeFantasia');
           var cnpj = document.getElementById('cnpj');
           e.preventDefault();
           try{
               await axios.post('https://localhost:5001/ContaCliente',{
                   razaoSocial: razaoSocial.value,
                   nomeFantasia: nomeFantasia.value,
                   cnpj: cnpj.value
               })
           }catch(error){
               console.error(error);
           }
       }
    }
}
</script>
<style scoped>
.view__form{
    display: flex;
    flex-direction: column;
    align-content: space-between;
    justify-content: space-between;
    width: 70vw;
    height: 60vh;
    padding: 5%;
}
.view__formDIV{
    display: flex;
    flex-direction: column;
}
</style>