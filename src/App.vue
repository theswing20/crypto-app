<template>
    <div id="app">
        <TheHeading/>
        <router-view/>
    </div>
</template>

<script>
    import TheHeading from '@/components/TheHeading'

    export default {
        components: {
            TheHeading
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
