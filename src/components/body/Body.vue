<template>
    <div>  
        <div class="corpoDoSite">
            <body-colum/>
            <div class="corpoDoSite__views">
                <div class="corpoDoSite__viewsPadding">
                    <div>
                        <router-view/>
                    </div>
                </div>
                <div class="corpoDoSite__atalhos">
                    Atalhos
                </div>
            </div>
        </div>
    </div>
   
    
</template>
<script>
import BodyColum from './BodyColum.vue'
export default {
  components: { BodyColum},
    name: 'CorpoPrincipal'
}
</script>
<style scoped>
.corpoDoSite{
    display: flex;
    align-items: center;
    
}
.corpoDoSite__viewsPadding{
 padding-top: 4.25vh;
}
.corpoDoSite__views{
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #161E2C;
    color: #00C3DD;
    height: 85vh;
    width: 80vw;
    justify-content: space-between;
    box-shadow: inset 3px 3px 5px black;
    
}
.corpoDoSite__atalhos{
    background-color: #C4C4C4;
    width: 75vw;
    height: 1.5vh;
    border-radius: 5px 5px 0 0;
    border: 2px solid #00C3DD;
    color: black;
    font-size: 0.8vw;
}
</style>