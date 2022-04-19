<template>
    <div>
        <div class="cabecalho">
            <h1>
                <a href="index.html"><img class="logo" src="../../assets/logo.png" alt="Aliare Integra"></a>
            </h1>
            <div class="cabecalho__usuario">
                <p class="cabecalho__apresentacao">Bem vindo, Fulano</p>
                <div class="cabecalho__perfil">
                    <div class="cabecalho__imagem"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'CabecalhoPrincipal'
}
</script>
<style scoped>
.cabecalho{
    background-color: #1C2638;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 0 3vw 0 3vw;
    height: 15vh;
    width: calc(100% - 6vw);
    position: relative;
}
.cabecalho__usuario{
    display: flex;
    flex-direction: row;
    align-items: center;
}
.cabecalho__apresentacao{
    color: #00C3DD;
    font-size: 24px;
    margin-right: 2vw;
}
.cabecalho__imagem{
    
    border-radius: 50%;
    height: 14vh;
    width: 14vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url('../../assets/img/img_perfil.jpg');
}
</style>
