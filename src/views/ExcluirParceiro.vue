<template>
    <div>
        
        <form class="view__form">

            <h1 class="view__titulo">Excluir Parceiro</h1>

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
                <button class="btn btn__lateral" @click="getParceiroListaId" v-show="mostrar__pesquisaID">Pesquisar Cliente</button>
                <button class="btn btn__lateral" @click="getParceiroListaCNPJ" v-show="mostrar__pesquisaCNPJ">Pesquisar Cliente</button>
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
            <div class="view__formDIV">
                <label for="idCliente">Id Cliente</label>
                <input type="number" id="idCliente" name="idCliente" :value="idCliente" readonly>
            </div>
            <button @click="deleteParceiroId">Excluir Parceiro</button>
        </form>
    </div>

</template>
<script>

const axios = require('axios').default
import { http } from '@/main';
export default {
    name:"ExcluirParceiro",
    data(){
        return{
            mostrar__pesquisaCNPJ: true,
            mostrar__pesquisaID: false,
            cliente: [],
            razaoSocial: null,
            nomeFantasia: null,
            cnpj: null,
            idCliente: null,
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
               const {data} = await http.get("https://localhost:5001/ContaParceiro");
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
               const {data} = await http.get("https://localhost:5001/ContaParceiro");
                const select = document.querySelector('#selectCNPJ')
                data.forEach(selec => {
                    select.appendChild(new Option((selec.cnpj + " - " + selec.razaoSocial), selec.id));
                });
                
           }catch{
               console.error(error)
           }
       },
        async deleteParceiroId(e){
            e.preventDefault();
            const id = document.getElementById('IdResultado');
            try{
                await axios.delete('https://localhost:5001/ContaParceiro/id/'+id.value)
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
        async getParceiroListaId(e){
           const id = document.querySelector("#pesquisaDinamicaID")
           try {
               e.preventDefault();
               
               const response = await axios.get('https://localhost:5001/ContaParceiro/Id/'+id.value);
               this.razaoSocial = response.data.razaoSocial
               this.nomeFantasia = response.data.nomeFantasia
               this.cnpj = response.data.cnpj
               this.id = response.data.id
               this.idCliente = response.data.contaClienteId
               
           } catch (error) {
               console.error(error);
               alert("Dados não encontrados!\nDados de pesquisa incorretos\nou\nInexistentes")
           }
       },
       async getParceiroListaCNPJ(e){
           const id = document.querySelector("#pesquisaDinamicaCNPJ")
           try {
               e.preventDefault();
               
               const response = await axios.get('https://localhost:5001/ContaParceiro/Id/'+id.value);
               this.razaoSocial = response.data.razaoSocial
               this.nomeFantasia = response.data.nomeFantasia
               this.cnpj = response.data.cnpj
               this.id = response.data.id
               this.idCliente = response.data.contaClienteId
               
               
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