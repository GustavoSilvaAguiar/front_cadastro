<template>
    <div class="corpoDoSite__coluna">
        <button @click="showTopicos" class="corpoDoSite__botaoColuna">{{button1}}</button>
        <router-link v-show="mostrar_cadastro" to="/cadastrarCliente" class="corpoDoSite__botaoColuna"><div class="corpoDoSite__botaoColunaTexto">Cliente</div></router-link>
        <router-link v-show="mostrar_cadastro" to="/cadastrarParceiro" class="corpoDoSite__botaoColuna"><div class="corpoDoSite__botaoColunaTexto">Parceiro</div></router-link>
        
        <button @click="showTopicosConsulta" class="corpoDoSite__botaoColuna">{{button2}}</button>
        <router-link v-show="mostrar_consulta" to="/consultarCliente" class="corpoDoSite__botaoColuna"><div class="corpoDoSite__botaoColunaTexto">Cliente</div></router-link>
        <router-link v-show="mostrar_consulta" to="/consultarParceiro" class="corpoDoSite__botaoColuna"><div class="corpoDoSite__botaoColunaTexto">Parceiro</div></router-link>

        <button @click="showTopicosAtualizar" class="corpoDoSite__botaoColuna">{{button3}}</button>
        <router-link v-show="mostrar_atualizar" to="/atualizarCliente" class="corpoDoSite__botaoColuna"><div class="corpoDoSite__botaoColunaTexto">Cliente</div></router-link>
        <router-link v-show="mostrar_atualizar" to="/atualizarParceiro" class="corpoDoSite__botaoColuna"><div class="corpoDoSite__botaoColunaTexto">Parceiro</div></router-link>

        <button @click="showTopicosExcluir" class="corpoDoSite__botaoColuna">{{button4}}</button>
        <router-link v-show="mostrar_excluir" to="/excluirCliente" class="corpoDoSite__botaoColuna"><div class="corpoDoSite__botaoColunaTexto">Cliente</div></router-link>
        <router-link v-show="mostrar_excluir" to="/excluirParceiro" class="corpoDoSite__botaoColuna"><div class="corpoDoSite__botaoColunaTexto">Parceiro</div></router-link>

        
    </div>
    
</template>
<script>
export default {
    name: "BotaoColuna",
    data(){
        return{
            mostrar_cadastro: false,
            mostrar_consulta: false,
            mostrar_atualizar: false,
            mostrar_excluir: false,
            button1: 'Cadastrar',
            button2: 'Consultar',
            button3: 'Atualizar',
            button4: 'Excluir'
        }
    },
    methods:{
        showTopicos(){
            this.mostrar_cadastro=!this.mostrar_cadastro
            this.mostrar_consulta= false;
            this.mostrar_atualizar= false;
            this.mostrar_excluir= false
        },
        showTopicosConsulta(){
            this.mostrar_consulta = !this.mostrar_consulta
            this.mostrar_atualizar= false;
            this.mostrar_excluir= false;
            this.mostrar_cadastro=false;
        },
        showTopicosAtualizar(){
            this.mostrar_atualizar = !this.mostrar_atualizar
            this.mostrar_excluir= false;
            this.mostrar_cadastro= false;
            this.mostrar_consulta= false;
        },
        showTopicosExcluir(){
            this.mostrar_excluir = !this.mostrar_excluir
            this.mostrar_cadastro= false;
            this.mostrar_consulta= false;
            this.mostrar_atualizar= false;
        }
    }
}
</script>
<style scoped>
.corpoDoSite__botaoColuna{
    height: 8vh;
    margin-bottom: 2vh;
    font-size: 1vw;
    color: #00C3DD;
    background-color: #1C2638;
    border: none;
    border-bottom: 3px solid #00C3DD;
    text-decoration: none;
    
}
.corpoDoSite__botaoColunaTexto{
    text-decoration: none;
    font-size: 1vw;
    background-color: #161E2C;
    height: 8vh;
    text-align: center;
    vertical-align: middle;
    padding-top: 3vh ;
}

.corpoDoSite__botaoColuna:hover{
    cursor: pointer;
    border-left: 3px solid #00C3DD;
}
</style>