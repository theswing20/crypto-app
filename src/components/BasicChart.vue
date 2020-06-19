<template>
    <div class="chart">
        <GChart
                type="ColumnChart"
                :data="chartData"
        />
    </div>
</template>

<script>
    export default {
        props: {
            chartData: Array
        },
    }
</script>