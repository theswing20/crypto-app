<template>
    <div class="home">
        <div class="container">
            <BasicSelect v-model="selectedCrypto" :coins="coins" @changeCrypto="changeCrypto"/>
            <BasicChart :chartData="chartData"/>
        </div>
    </div>
</template>

<script>
    import BasicSelect from '@/components/BasicSelect'
    import BasicChart from '@/components/BasicChart'

    export default {
        name: 'Home',

        components: {
            BasicSelect,
            BasicChart
        },

        data() {
            return {
                selectedCrypto: ''
            }
        },

        computed: {
            coins() {
                return this.$store.state.coins
            },

            chartData() {
                return this.$store.getters.charts
            }
        },

        methods: {
            changeCrypto(event) {
                this.$router.push(`/${event.target.value}`)
                this.$store.dispatch('getSelectedCoin', event.target.value)
            }
        },

        async mounted() {
            this.$store.dispatch('getAllCoins')

            await this.$store.dispatch('calculateIntervalDate')

            this.$store.dispatch('getSelectedCoin', this.$route.params.cryptoName)

            this.selectedCrypto = this.$route.params.cryptoName
        }
    }
</script>

<style>
    .container {
        width: 1200px;

        margin: 0 auto;
    }
</style>
