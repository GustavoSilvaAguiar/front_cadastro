<template>
    <div>
        
        <form class="view__form">

            <h1 class="view__titulo">Consultar Parceiro</h1>

            <label for="CNPJ">CNPJ</label>
            <input @change="showOpcaoPesquisa" type="radio" id="CNPJ" name="opcao" checked>
            <label for="ID">ID</label>
            <input @change="showOpcaoPesquisa" type="radio" id="ID" name="opcao">

            <div v-show="mostrar__pesquisaCNPJ">
                <label for="razaoSocial">CNPJ para pesquisa</label>
                <input type="text" id="CNPJpesquisa" name="CNPJpesquisa"  placeholder="Digite o CNPJ">
                <button @click="getParceiroCNPJ">Pesquisar Cliente</button>
            </div>
            <div v-show="mostrar__pesquisaID">
                <label for="razaoSocial">Id para pesquisa</label>
                <input type="text" id="IDpesquisa" name="cadastroRazaoSocial"  placeholder="Digite o ID">
                <button @click="getParceiroId">Pesquisar Cliente</button>
            </div>

            
            <div>
                <label for="razaoSocial">Razão Social</label>
                <input type="text" id="razaoSocial" name="cadastroRazaoSocial" :value="razaoSocial" placeholder="Digite a razão social" readonly>
            </div>
            <div>
                <label for="nomeFantasia">Nome Fantasia</label>
                <input type="text" id="nomeFantasia" name="cadastroNomeFantasia" :value="nomeFantasia" placeholder="Digite o nome fantasia" readonly>
            </div>
            <div>
                <label for="cnpj">CNPJ</label>
                <input type="text" id="cnpj" name="cadastroCnpj" :value="cnpj" placeholder="Digite o CNPJ" readonly>
                
            </div>
            <div>
                <label for="idCliente">Id Cliente</label>
                <input type="number" id="idCliente" name="idCliente" :value="idCliente" readonly>
            </div>
        </form>
    </div>

</template>
<script>

const axios = require('axios').default

export default {
    name:"PesquisarParceiro",
    data(){
        return{
            mostrar__pesquisaCNPJ: true,
            mostrar__pesquisaID: false,
            cliente: [],
            razaoSocial: null,
            nomeFantasia: null,
            cnpj: null,
            idCliente: null
        }
    },
    methods:{
        showOpcaoPesquisa(){
            this.mostrar__pesquisaCNPJ = !this.mostrar__pesquisaCNPJ;
            this.mostrar__pesquisaID = !this.mostrar__pesquisaID
        },
        async getParceiroId(e){
            var id = document.getElementById('IDpesquisa');
           try {
               e.preventDefault();
               
               const response = await axios.get('https://localhost:5001/ContaParceiro/id/'+id.value);
               console.log(response);
               this.cliente = response.data
               this.razaoSocial = response.data.razaoSocial
               this.nomeFantasia = response.data.nomeFantasia
               this.cnpj = response.data.cnpj
               this.idCliente = response.data.contaClienteId
               
           } catch (error) {
               console.error(error);
           }
       },
       async getParceiroCNPJ(e){
            var id = document.getElementById('CNPJpesquisa');
           try {
               e.preventDefault();
               
               const response = await axios.get('https://localhost:5001/ContaParceiro/cnpj/'+id.value);
               console.log(response);
               console.log('dois');
               this.cliente = response.data
               this.razaoSocial = response.data.razaoSocial
               this.nomeFantasia = response.data.nomeFantasia
               this.cnpj = response.data.cnpj
               this.idCliente = response.data.contaClienteId
               
           } catch (error) {
               console.log('3');
               console.error(error);
               alert("ta errado, arruma")
           }
       }
       
    }
    
}
</script>
<style scoped>

</style>