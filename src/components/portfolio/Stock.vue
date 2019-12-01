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
                    <v-list-item three-line class="color: red">
                        <v-list-item-content>
                            <v-list-item-title class="headline mb-1" >{{stock.name}}
                                <span class="caption">
                                (Price: {{stock.price}}) | Quantity: {{ stock.quantity}}
                                </span>
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-card-actions>
                        <input placeholder="Quantity" type="number" v-model.number="quantity" :class="{danger:insufficientQuantity}">
                        <v-btn
                                text
                                @click="sellStock()"
                                :disabled="insufficientQuantity || quantity <= 0 || !Number.isInteger(quantity)"
                        >{{insufficientQuantity ? 'Not enough' : ' SELL'}}
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';
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
            insufficientQuantity(){
              return this.quantity >= this.stock.quantity
            },
        },
        methods:{
            ...mapActions({
                placeSellOrder: 'sellStock'
            }),
            sellStock(){
                const order = {
                    stockId : this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity
                };
                this.placeSellOrder(order);
                this.quantity = 0;
            }

        }

    }
</script>

<style scoped>
    .danger{
        border: 2px solid red;
    }

</style>
