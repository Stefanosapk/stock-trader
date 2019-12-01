<template>
    <div>
        <div style="margin: 15px">
            <h1>Trade or View your Portfolio</h1>
            <h6>You may Save & Load your Data</h6>
            <h6>Click on 'End Day' to begin a New Day!</h6>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Home.vue",
        computed:{
            funds(){
                return this.$store.getters.funds;
            }
        }
    }
</script>

<style scoped>

</style>
