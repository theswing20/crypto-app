<template>
    <div>
        <select v-model="selectedCrypto" @change="changeCrypto">
            <option v-for="coin in coins.data" :key="coin">{{ coin.id }}</option>
        </select>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                selectedCrypto: '',
            }
        },

        computed: {
            coins() {
                return this.$store.state.coins
            }
        },


            methods: {
                changeCrypto(event) {
                    this.$router.push(`/${event.target.value}`)
                    this.$store.dispatch('getSelectedCoin', event.target.value)
                }
            },

        mounted() {
            this.selectedCrypto = this.$route.params.cryptoName
        }
    }
</script>