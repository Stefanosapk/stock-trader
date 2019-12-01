<template>
    <div>
        <v-toolbar dark>
            <v-toolbar-title @click="homeView">Stock Trader</v-toolbar-title>
            <v-toolbar-items>
                <v-btn text @click="portfolioView">Portfolio</v-btn>
                <v-btn text @click="stocksView">Stocks</v-btn>
            </v-toolbar-items>
            <v-spacer></v-spacer>
            <template v-if="$vuetify.breakpoint.smAndUp">
                <v-btn text @click="endDay"> End Day</v-btn>
                    <b-dropdown id="dropdown-1" text="Save & Load" class="m-md-2">
                        <b-dropdown-item @click="saveData">Save</b-dropdown-item>
                        <b-dropdown-item @click="loadData()">Load</b-dropdown-item>
                    </b-dropdown>
            </template>
            <h5 style="margin-top: 3px">{{stocks}}</h5>
        </v-toolbar>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';
    import axios from 'axios';
    export default {
        name: "Header.vue",
        data: () => ({
            items: [
                { title: 'Save' },
                { title: 'Load' },
            ],
        }),
        methods:{
            ...mapActions({
                randomizeStocks: 'randomizeStocks',
                fetchData: 'loadData'
            }),
            portfolioView(){
                this.$router.push('/portfolio', () => {})
            },
            stocksView(){
                this.$router.push('/stocks'   , () => {})
            },
            homeView(){
                this.$router.push('/'          ,() =>{})
            },
            endDay(){
                this.randomizeStocks();
            },
            saveData(){
                const data = {
                    funds: this.$store.getters.funds,
                    stockPortfolio: this.$store.getters.stockPortfolio,
                    stocks: this.$store.getters.stocks
                };
              axios.put("data.json", data)
                  .then(res => {
                      console.log(res,'res')
                  })
            },
            loadData(){
                this.fetchData();
            },
        },
        computed:{
            stocks(){
                return this.$store.getters.funds;
            }
        }
    }
</script>

<style scoped>

</style>
