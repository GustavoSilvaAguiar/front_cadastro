<template>
    <canvas id="myChart" width="600" height="400"></canvas>
</template>
<script>
import { Pie } from 'vue-chartjs/legacy'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
export default {
    name: "GraficoDePizza",
    type:'bar',
    data(){
        
    }
}
</script>
<style>

</style>