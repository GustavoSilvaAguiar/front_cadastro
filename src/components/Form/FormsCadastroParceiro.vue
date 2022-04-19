<template>
        <form class="view__form">
            <h1 class="view__titulo">Cadastro Parceiro</h1>
            <div>
                <label for="razaoSocial">Razão Social</label>
                <input type="text" id="razaoSocial" name="cadastroRazaoSocial" placeholder="Digite a razão social">
            </div>
            <div>
                <label for="nomeFantasia">Nome Fantasia</label>
                <input type="text" id="nomeFantasia" name="cadastroNomeFantasia" placeholder="Digite o nome fantasia">
            </div>
            <div>
                <label for="cnpj">CNPJ</label>
                <input type="text" id="cnpj" name="cadastroCnpj" placeholder="Digite o CNPJ">
            </div>
            <div>
                <label for="id">ID do cliente relacionado</label>
                <input type="number"  id="id" name="cadastroID" placeholder="Digite o ID do cliente">
            </div>
            <button @click="postParceiro">Cadastrar</button>
        </form>
</template>
<script>
import axios from 'axios';
export default {
    name:"CadastroParceiro",
    methods:{
        async postParceiro(e){
            
            try{
                const payload = {
                    razaoSocial: document.getElementById('razaoSocial').value,
                    nomeFantasia: document.getElementById('nomeFantasia').value,
                    cnpj: document.getElementById('cnpj').value,
                    contaClienteId: +document.getElementById('id').value
                }
                
                console.log("payload:", payload)
    
                e.preventDefault();
                //debugger
                await axios.post('https://localhost:5001/ContaParceiro', payload)
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
    width: 64vw;
    height: 65vh;
    background-color: #1F2B40;
    border-radius: 15px;
    padding: 5%;
}
</style>