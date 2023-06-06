<template>
    <div class="m-8">
        <canvas :id="id"></canvas>
    </div>
</template>
<script>
export default {
    name: 'ChartUI',
    props: {
        id: String,
        chartData: {
            type: Object,
            required: true
        },

    },
    methods: {
        createData(){
            
        }
    }
    
}
</script>
<style></style>