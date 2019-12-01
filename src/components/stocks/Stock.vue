<template>
    <div>
    <v-container class="grey lighten-5">
        <v-row no-gutters>
                <v-card
                        class="mx-auto ma-3 ml-5"
                        max-width="400"
                        outlined
                        dark
                >
                    <v-list-item three-line class="color: green">
                        <v-list-item-content>
                            <v-list-item-title class="headline mb-1" >{{stock.name}} <span class="caption">(Price: {{stock.price}} Price)</span>
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-card-actions>
                        <input placeholder="Quantity" type="number" v-model.number="quantity" :class="{danger: insufficientFunds}">
                        <v-btn
                                text
                               @click="buyStock()"
                                :disabled="insufficientFunds || quantity <= 0 || !Number.isInteger(quantity)"
                        >{{insufficientFunds ? 'NOT ENOUGH' : 'BUY'}}
                        </v-btn>
                    </v-card-actions>
                </v-card>
        </v-row>
    </v-container>
    </div>
</template>

<script>
    export default {
        name: "Stock.vue",
        props:[ 'stock' ],
        data(){
            return{
                quantity: 0
            }
        },
        computed:{
            funds(){
                return this.$store.getters.funds;
            },
          insufficientFunds(){
              return this.stock.price * this.quantity > this.funds;
          }
        },
        methods:{
            buyStock(){
                let order = {
                    stockId : this.stock.id,
                    stockPrice : this.stock.price,
                    quantity : this.quantity
                }
                this.$store.dispatch('buyStock', order);
                this.quantity = 0;
            },
        }

    }
</script>

<style scoped>
    .danger{
        border: 2px solid red;
    }
</style>
