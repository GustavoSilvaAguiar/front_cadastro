<template>
    <div>
        
        <form class="view__form">

            <h1 class="view__titulo">Atualizar Parceiro</h1>

            <div>
                <label for="CNPJ">CNPJ</label>
                <input @change="showOpcaoPesquisa" type="radio" id="CNPJ" name="opcao" checked>
                <label for="ID">ID</label>
                <input @change="showOpcaoPesquisa" type="radio" id="ID" name="opcao">
            </div>

            <div class="view__formDIV" v-show="mostrar__pesquisaCNPJ">
                <label for="razaoSocial">CNPJ para pesquisa</label>
                <input type="text" id="CNPJpesquisa" name="CNPJpesquisa"  placeholder="Digite o CNPJ">
                <button @click="getParceiroCNPJ">Pesquisar Parceiro</button>
            </div>
            <div class="view__formDIV" v-show="mostrar__pesquisaID">
                <label for="razaoSocial">Id para pesquisa</label>
                <input type="text" id="IDpesquisa" name="cadastroRazaoSocial"  placeholder="Digite o ID">
                <button @click="getParceiroId">Pesquisar Parceiro</button>
            </div>

            
            <div class="view__formDIV">
                <label for="razaoSocial">Razão Social</label>
                <input type="text" id="razaoSocial" name="cadastroRazaoSocial" :value="razaoSocial" placeholder="Digite a razão social" >
            </div>
            <div class="view__formDIV">
                <label for="nomeFantasia">Nome Fantasia</label>
                <input type="text" id="nomeFantasia" name="cadastroNomeFantasia" :value="nomeFantasia" placeholder="Digite o nome fantasia" >
            </div>
            <div class="view__formDIV">
                <label for="cnpj">CNPJ</label>
                <input type="text" id="cnpj" name="cadastroCnpj" :value="cnpj" placeholder="Digite o CNPJ" >
                
            </div>
            <div class="view__formDIV">
                <label for="id">ID do cliente relacionado</label>
                <input type="number"  id="id" name="cadastroID" :value="IdCliente" placeholder="Digite o ID do cliente">
            </div>
            <div class="view__formDIV"  v-show="mostrar__pesquisaID">
                <button @click="putParceiroId">Atualizar Parceiro</button>
            </div>
            <div class="view__formDIV"  v-show="mostrar__pesquisaCNPJ">
                <button @click="putParceiroCNPJ">Atualizar Parceiro</button>
            </div>
        </form>
    </div>

</template>
<script>

const axios = require('axios').default



export default {
    name:"atualizarParceiro",
    data(){
        return{
            mostrar__pesquisaCNPJ: true,
            mostrar__pesquisaID: false,
            cliente: [],
            razaoSocial: null,
            nomeFantasia: null,
            cnpj: null,
            IdCliente: null
        }
    },
    methods:{
        showOpcaoPesquisa(){
            this.mostrar__pesquisaCNPJ = !this.mostrar__pesquisaCNPJ;
            this.mostrar__pesquisaID = !this.mostrar__pesquisaID
        },
        valores(){
            const payload = {
                razaoSocial: document.getElementById('razaoSocial').value,
                nomeFantasia: document.getElementById('nomeFantasia').value,
                cnpj: document.getElementById('cnpj').value,
                contaClienteId: +document.getElementById('id').value
            }
            return payload;
        },
        valoresGet(response){
            this.razaoSocial = response.data.razaoSocial
            this.nomeFantasia = response.data.nomeFantasia
            this.cnpj = response.data.cnpj
            this.IdCliente = response.data.contaClienteId
        },
        async getParceiroId(e){
            var id = document.getElementById('IDpesquisa');
           try {
               e.preventDefault();
               
               const response = await axios.get('https://localhost:5001/ContaParceiro/Id/'+id.value);
               this.valoresGet(response)
               
           } catch (error) {
               console.error(error);
           }
       },
       async getParceiroCNPJ(e){
            var id = document.getElementById('CNPJpesquisa');
           try {
               e.preventDefault();
               
               const response = await axios.get('https://localhost:5001/ContaParceiro/cnpj/'+id.value);
               this.valoresGet(response);
               
           } catch (error) {
               console.error(error);
               alert("ta errado, arruma")
           }
       },
       async putParceiroId(e){
           var id = document.getElementById('IDpesquisa');
           try{
               e.preventDefault();

               await axios.put('https://localhost:5001/ContaParceiro/id/'+id.value, this.valores());
               alert('Cadastro de parceiro atualizado com sucesso');
           }catch{
               console.error(error);
           }
       },
       async putParceiroCNPJ(e){
           var id = document.getElementById('CNPJpesquisa');
           
           try{
               e.preventDefault();

               await axios.put('https://localhost:5001/ContaParceiro/cnpj/'+id.value, this.valores());
               alert('Cadastro de parceiro atualizado com sucesso');
           }catch{
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