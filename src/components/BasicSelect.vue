<template>
    <select :value="selectedCrypto" @change="$emit('changeCrypto', $event)">
        <option v-for="coin in coins.data" :key="coin.id">{{ coin.id }}</option>
    </select>
</template>

<script>
    export default {
        props: {
            selectedCrypto: String,
            coins: Array
        },
    }
</script>