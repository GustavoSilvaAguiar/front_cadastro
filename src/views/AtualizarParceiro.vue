<template>
    <div>
        
        <form class="view__form">

            <h1 class="view__titulo">Atualizar Parceiro</h1>

            <div>
                <label for="CNPJ">CNPJ</label>
                <input @change="showOpcaoPesquisa" type="radio" id="CNPJ" name="opcao" checked>
                <label for="ID">ID</label>
                <input @change="showOpcaoPesquisa" type="radio" id="ID" name="opcao">
                <select v-show="mostrar__pesquisaID" id="selectId">
                    <option disabled selected>Escolha um ID</option>
                </select>
                <select v-show="mostrar__pesquisaCNPJ" id="selectCNPJ">
                    <option disabled selected>Escolha um CNPJ</option>
                </select>
                <button class="btn btn__lateral" @click="getParceiroListaId" v-show="mostrar__pesquisaID">Pesquisar Cliente</button>
                <button class="btn btn__lateral" @click="getParceiroListaCNPJ" v-show="mostrar__pesquisaCNPJ">Pesquisar Cliente</button>
            </div>
            
            <div class="view__formDIV">
                <label for="Id">Id</label>
                <input type="text" id="IdResultado" :value="id" name="IdResultado" readonly>
            </div>
            <div class="view__formDIV">
                <label for="razaoSocial">Razão Social</label>
                <input type="text" id="razaoSocial" name="cadastroRazaoSocial" :value="razaoSocial" placeholder="razão social" >
            </div>
            <div class="view__formDIV">
                <label for="nomeFantasia">Nome Fantasia</label>
                <input type="text" id="nomeFantasia" name="cadastroNomeFantasia" :value="nomeFantasia" placeholder="nome fantasia" >
            </div>
            <div class="view__formDIV">
                <label for="cnpj">CNPJ</label>
                <input type="text" id="cnpj" name="cadastroCnpj" :value="cnpj" placeholder="CNPJ" >
                
            </div>
            <div class="view__formDIV">
                <label for="id">ID do cliente relacionado</label>
                <input type="number"  id="id" name="cadastroID" :value="IdCliente" placeholder="ID do cliente">
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
import { http } from '@/main';
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
            id:null,
            IdCliente: null,
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
            this.id = response.data.id
        },
        async getParceiroId(e){
            var id = document.getElementById('IDpesquisa');
           try {
               e.preventDefault();
               
               const response = await axios.get('https://localhost:5001/ContaParceiro/Id/'+id.value);
               this.valoresGet(response)
               
           } catch (error) {
               console.error(error);
               alert("Dados não encontrados!\nDados de pesquisa incorretos\nou\nInexistentes")
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
               alert("Dados não encontrados!\nDados de pesquisa incorretos\nou\nInexistentes")
           }
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
       async getParceiroListaId(e){
           const id = document.querySelector("#selectId")
           try {
               e.preventDefault();
               
               const response = await axios.get('https://localhost:5001/ContaParceiro/Id/'+id.value);
               this.cliente = response.data
               this.razaoSocial = response.data.razaoSocial
               this.nomeFantasia = response.data.nomeFantasia
               this.cnpj = response.data.cnpj
               this.id = response.data.id
               this.IdCliente = response.data.contaClienteId
               
           } catch (error) {
               console.error(error);
               alert("Dados não encontrados!\nDados de pesquisa incorretos\nou\nInexistentes")
           }
       },
       async getParceiroListaCNPJ(e){
           const id = document.querySelector("#selectCNPJ")
           try {
               e.preventDefault();
               
               const response = await axios.get('https://localhost:5001/ContaParceiro/Id/'+id.value);
               this.cliente = response.data
               this.razaoSocial = response.data.razaoSocial
               this.nomeFantasia = response.data.nomeFantasia
               this.cnpj = response.data.cnpj
               this.id = response.data.id
               this.IdCliente = response.data.contaClienteId
               
           } catch (error) {
               console.error(error);
               alert("Dados não encontrados!\nDados de pesquisa incorretos\nou\nInexistentes")
           }
       },
       async putParceiroId(e){
           var id = document.getElementById('IdResultado');
           try{
               e.preventDefault();

               await axios.put('https://localhost:5001/ContaParceiro/id/'+id.value, this.valores());
               alert('Cadastro de parceiro atualizado com sucesso');
           }catch{
               console.error(error);
                alert("Não foi possivel atualizar o cadastro.\nVerificar se oos campos estão preenchidos corretamente")
           }
       },
       async putParceiroCNPJ(e){
           var id = document.getElementById('IdResultado');
           
           try{
               e.preventDefault();

               await axios.put('https://localhost:5001/ContaParceiro/id/'+id.value, this.valores());
               alert('Cadastro de parceiro atualizado com sucesso');
           }catch{
               console.error(error);
                alert("Não foi possivel atualizar o cadastro.\nVerificar se oos campos estão preenchidos corretamente")
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