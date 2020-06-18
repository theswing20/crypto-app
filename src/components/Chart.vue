<template>
    <div class="chart">
        <GChart
                type="ColumnChart"
                :data="charts"
                :options="chartOptions"
        />
    </div>
</template>

<script>
    export default {
        data() {
            return {
                chartOptions: {
                    chart: {
                        title: 'Company Performance',
                        subtitle: 'Sales, Expenses, and Profit: 2014-2017',
                    }
                }
            }
        },


        computed: {
            coins() {
                return this.$store.state.coins
            },

            charts() {
                return this.$store.getters.charts
            }
        }
    }
</script>