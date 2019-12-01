<template>
    <div>
        <v-container>
            <v-row align-content="center">
                <app-stock v-for="stock in stocks" :key="stock.id" :stock = "stock" ></app-stock>
            </v-row>
        </v-container>
    </div>
</template>
<script>
    import Stock from './Stock.vue';
    export default {
        name: "Stocks.vue",
        components: {
          appStock: Stock
        },
        computed: {
            stocks(){
                return this.$store.getters.stocks;
            }
        }
    }
</script>

<style scoped>

</style>
