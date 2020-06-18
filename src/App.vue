<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>

<script>
  import Header from '@/components/Header'

  export default {
    components: {
      Header
    }
  }
</script>

<style lang="scss">
    * {
        padding: 0;
        margin: 0;
        font-family: 'Helvetica', 'Arial', sans-serif;
    }
</style>
