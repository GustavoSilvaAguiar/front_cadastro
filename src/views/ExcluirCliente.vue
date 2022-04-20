<template>
    <div>
        <form class="view__form">

            <h1 class="view__titulo">Excluir Cliente</h1>

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
                <label for="Id">Id</label>
                <input type="text" id="IdResultado" :value="id" name="IdResultado" readonly>
            </div>
            <div class="view__formDIV">
                <label for="razaoSocial">Razão Social</label>
                <input type="text" id="razaoSocial" name="cadastroRazaoSocial" :value="razaoSocial" placeholder="Digite a razão social" readonly>
            </div>
            <div class="view__formDIV">
                <label for="nomeFantasia">Nome Fantasia</label>
                <input type="text" id="nomeFantasia" name="cadastroNomeFantasia" :value="nomeFantasia" placeholder="Digite o nome fantasia" readonly>
            </div>
            <div class="view__formDIV">
                <label for="cnpj">CNPJ</label>
                <input type="text" id="cnpj" name="cadastroCnpj" :value="cnpj" placeholder="Digite o CNPJ" readonly>
                
            </div>
            <button @click="deleteClienteId">Excluir Cliente</button>
        </form>
        
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name:"ExcluirCliente",
    data(){
        return{
            mostrar__pesquisaCNPJ: true,
            mostrar__pesquisaID: false,
            cliente: [],
            razaoSocial: null,
            nomeFantasia: null,
            cnpj: null,
            id: null
        }
    },
    methods:{
        
        async deleteClienteId(e){
            e.preventDefault();
            const id = document.getElementById('IdResultado');
            try{
                await axios.delete('https://localhost:5001/ContaCliente/id/'+id.value)
            }catch(error){
                console.error(error);
            }
        },
        showOpcaoPesquisa(){
            this.mostrar__pesquisaCNPJ = !this.mostrar__pesquisaCNPJ;
            this.mostrar__pesquisaID = !this.mostrar__pesquisaID
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
               this.id = response.data.id
               
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
               this.id = response.data.id
               
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