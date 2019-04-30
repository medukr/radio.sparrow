<template>
    <div>
        <div class="row">
            <app-station-card></app-station-card>
            <app-station-card></app-station-card>
        </div>
        <div class="row">
            <app-station-card></app-station-card>
            <app-station-card></app-station-card>
        </div>
        <div class="row">
            <app-station-card></app-station-card>
            <app-station-card></app-station-card>
        </div>
    </div>
</template>

<script>
    import AppStationCard from './stationCard'

    export default {
        components: {
            AppStationCard
        },
        data(){
            return {
                cnt : [1,2]
            }
        }
    }
</script>

<style scoped>

</style>