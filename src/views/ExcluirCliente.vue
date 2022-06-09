<template>
    <div>
        <form class="view__form">

            <h1 class="view__titulo">Excluir Cliente</h1>

            <div>
                <label for="CNPJ">CNPJ</label>
                <input @change="showOpcaoPesquisa" type="radio" id="CNPJ" name="opcao" checked>
                <label for="ID">ID</label>
                <input @change="showOpcaoPesquisa" type="radio" id="ID" name="opcao">
                <datalist v-show="mostrar__pesquisaID" id="selectId">
                    <option disabled selected>Escolha um ID</option>
                </datalist>
                <datalist v-show="mostrar__pesquisaCNPJ" id="selectCNPJ">
                    <option disabled selected>Escolha um CNPJ</option>
                </datalist>
                <input v-show="mostrar__pesquisaID" type="search" id="pesquisaDinamicaID" list="selectId" placeholder="ID ou Razão Social">
                <input v-show="mostrar__pesquisaCNPJ" type="search" id="pesquisaDinamicaCNPJ" list="selectCNPJ" placeholder="CNPJ ou Razão Social">

                <button class="btn btn__lateral" @click="getClienteListaId" v-show="mostrar__pesquisaID">Pesquisar Cliente</button>
                <button class="btn btn__lateral" @click="getClienteListaCNPJ" v-show="mostrar__pesquisaCNPJ">Pesquisar Cliente</button>
            </div>


            <div class="view__formDIV">
                <label for="Id">Id</label>
                <input type="text" id="IdResultado" :value="id" name="IdResultado" readonly>
            </div>
            <div class="view__formDIV">
                <label for="razaoSocial">Razão Social</label>
                <input type="text" id="razaoSocial" name="cadastroRazaoSocial" :value="razaoSocial" placeholder="razão social" readonly>
            </div>
            <div class="view__formDIV">
                <label for="nomeFantasia">Nome Fantasia</label>
                <input type="text" id="nomeFantasia" name="cadastroNomeFantasia" :value="nomeFantasia" placeholder="nome fantasia" readonly>
            </div>
            <div class="view__formDIV">
                <label for="cnpj">CNPJ</label>
                <input type="text" id="cnpj" name="cadastroCnpj" :value="cnpj" placeholder="CNPJ" readonly>
                
            </div>
            <button @click="deleteClienteId">Excluir Cliente</button>
        </form>
        
    </div>
</template>
<script>
import { http } from '@/main';
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
            id: null,
            idSelect: null
        }
    },
    created(){
        this.getId()
        this.getCNPJ()
    },
    methods:{
        mudarCampo(){
            const res = document.querySelector('#selectId');
            this.idSelect = res.value
        },
        showOpcaoPesquisa(){
            this.mostrar__pesquisaCNPJ = !this.mostrar__pesquisaCNPJ;
            this.mostrar__pesquisaID = !this.mostrar__pesquisaID
        },
        async getId(){
           try{
               const {data} = await http.get("https://localhost:5001/ContaCliente");
                const select = document.querySelector('#selectId')
                data.forEach(selec => {
                    select.appendChild(new Option((selec.id + " - " + selec.razaoSocial), selec.id));
                    
                });
           }catch{
               console.error(error)
           }
       },
       async getCNPJ(){
           try{
               const {data} = await http.get("https://localhost:5001/ContaCliente");
                const select = document.querySelector('#selectCNPJ')
                data.forEach(selec => {
                    select.appendChild(new Option((selec.cnpj + " - " + selec.razaoSocial), selec.id));
                });
                
           }catch{
               console.error(error)
           }
       },
        async deleteClienteId(e){
            e.preventDefault();
            const id = document.getElementById('IdResultado');
            try{
                await axios.delete('https://localhost:5001/ContaCliente/id/'+id.value)
                alert("Exclusão realizada com sucesso")
            }catch(error){
                console.error(error);
                alert("Dados não encontrados para serem excluídos")
            }
        },
        showOpcaoPesquisa(){
            this.mostrar__pesquisaCNPJ = !this.mostrar__pesquisaCNPJ;
            this.mostrar__pesquisaID = !this.mostrar__pesquisaID
        },
        async getClienteListaId(e){
           const id = document.querySelector("#pesquisaDinamicaID")
           try {
               e.preventDefault();
               
               const response = await axios.get('https://localhost:5001/ContaCliente/Id/'+id.value);
               this.cliente = response.data
               this.razaoSocial = response.data.razaoSocial
               this.nomeFantasia = response.data.nomeFantasia
               this.cnpj = response.data.cnpj
               this.id = response.data.id
               
           } catch (error) {
               console.error(error);
               alert("Dados não encontrados!\nDados de pesquisa incorretos\nou\nInexistentes")
           }
       },
       async getClienteListaCNPJ(e){
           const id = document.querySelector("#pesquisaDinamicaCNPJ")
           try {
               e.preventDefault();
               
               const response = await axios.get('https://localhost:5001/ContaCliente/Id/'+id.value);
               this.cliente = response.data
               this.razaoSocial = response.data.razaoSocial
               this.nomeFantasia = response.data.nomeFantasia
               this.cnpj = response.data.cnpj
               this.id = response.data.id
               
           } catch (error) {
               console.error(error);
               alert("Dados não encontrados!\nDados de pesquisa incorretos\nou\nInexistentes")
           }
       }
    }
}
</script>
<style>
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