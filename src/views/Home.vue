<template>
  <div class="home">
    <div class="container">
      <Input />
    </div>

    <Chart />
  </div>
</template>

<script>
  import Input from '@/components/Input'
  import Chart from '@/components/Chart'

  export default {
  name: 'Home',
  components: {
    Input,
    Chart
  },

    async mounted() {
      this.$store.dispatch('getAllCoins')
      await this.$store.dispatch('calculateIntervalDate')
      this.$store.dispatch('getSelectedCoin', this.$route.params.cryptoName)
    }
  }
</script>

<style>
  .container {
    width: 1200px;

    margin: 0 auto;
  }
</style>
