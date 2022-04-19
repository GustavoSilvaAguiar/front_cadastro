<template>
    <div class="corpoDoSite__coluna">
        <body-colum-button/>
        
    </div>
</template>
<script>
import BodyColumButton from './BodyColumButton.vue'
export default {
  components: { BodyColumButton },
    name: 'bodyColum'
}
</script>
<style scoped>
.corpoDoSite__coluna{
    background: #1C2638;
    height: 85vh;
    width: 20vw;
    color: #00C3DD;
    display: flex;
    flex-direction: column;
    position: relative;
}
</style>