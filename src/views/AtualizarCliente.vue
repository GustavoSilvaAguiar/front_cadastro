<template>
    <div>
        
        <form class="view__form">

            <h1 class="view__titulo">Atualizar Cliente</h1>

            <div>
                <label for="CNPJ">CNPJ</label>
                <input @change="showOpcaoPesquisa" type="radio" id="CNPJ" name="opcao" checked>
                <label for="ID">ID</label>
                <input @change="showOpcaoPesquisa" type="radio" id="ID" name="opcao">
            </div>
            

            <div class="view__formDIV" v-show="mostrar__pesquisaCNPJ">
                <label for="razaoSocial">CNPJ para pesquisa</label>
                <input type="text" id="CNPJpesquisa" name="CNPJpesquisa"  placeholder="Digite o CNPJ">
                <button @click="getClienteCNPJ">Pesquisar Cliente</button>
            </div>
            <div class="view__formDIV" v-show="mostrar__pesquisaID">
                <label for="razaoSocial">Id para pesquisa</label>
                <input type="text" id="IDpesquisa" name="cadastroRazaoSocial"  placeholder="Digite o ID">
                <button @click="getClienteId">Pesquisar Cliente</button>
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
            <div class="view__formDIV"  v-show="mostrar__pesquisaID">
                <button @click="putClienteId">Atualizar Cliente</button>
            </div>
            <div class="view__formDIV"  v-show="mostrar__pesquisaCNPJ">
                <button @click="putClienteCNPJ">Atualizar Cliente</button>
            </div>
        </form>
    </div>

</template>
<script>

const axios = require('axios').default



export default {
    name:"atualizarCliente",
    data(){
        return{
            mostrar__pesquisaCNPJ: true,
            mostrar__pesquisaID: false,
            cliente: [],
            razaoSocial: null,
            nomeFantasia: null,
            cnpj: null
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
                cnpj: document.getElementById('cnpj').value
            }
            return payload;
        },
        async getClienteId(e){
            var id = document.getElementById('IDpesquisa');
           try {
               e.preventDefault();
               
               const response = await axios.get('https://localhost:5001/ContaCliente/Id/'+id.value);
               console.log(response);
               console.log('dois');
               this.cliente = response.data
               this.razaoSocial = response.data.razaoSocial
               this.nomeFantasia = response.data.nomeFantasia
               this.cnpj = response.data.cnpj
               
           } catch (error) {
               console.error(error);
           }
       },
       async getClienteCNPJ(e){
            var id = document.getElementById('CNPJpesquisa');
           try {
               e.preventDefault();
               
               const response = await axios.get('https://localhost:5001/ContaCliente/cnpj/'+id.value);
               console.log(response);
               console.log('dois');
               this.cliente = response.data
               this.razaoSocial = response.data.razaoSocial
               this.nomeFantasia = response.data.nomeFantasia
               this.cnpj = response.data.cnpj
               
           } catch (error) {
               console.log('3');
               console.error(error);
               alert("ta errado, arruma")
           }
       },
       async putClienteId(e){
           var id = document.getElementById('IDpesquisa');
           try{
               e.preventDefault();

               await axios.put('https://localhost:5001/ContaCliente/id/'+id.value, this.valores());
               alert('Cadastro de cliente atualizado com sucesso');
           }catch{
               console.error(error);
           }
       },
       async putClienteCNPJ(e){
           var id = document.getElementById('CNPJpesquisa');
           
           try{
               e.preventDefault();

               await axios.put('https://localhost:5001/ContaCliente/cnpj/'+id.value, this.valores());
               alert('Cadastro de cliente atualizado com sucesso');
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