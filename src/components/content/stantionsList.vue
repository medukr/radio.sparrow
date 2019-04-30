<template>
    <div>
        <div class="row">
            <app-station-card></app-station-card>
            <app-station-card></app-station-card>
            <app-station-card></app-station-card>
            <app-station-card></app-station-card>
        </div>
        <div class="row">
            <app-station-card-aside></app-station-card-aside>
            <app-station-card-aside></app-station-card-aside>
            <app-station-card-aside></app-station-card-aside>
            <app-station-card-aside></app-station-card-aside>
        </div>
    </div>
</template>

<script>
    import AppStationCard from './stationCard'
    import AppStationCardAside from './stationCardAside'

    export default {
        components: {
            AppStationCard,
            AppStationCardAside
        },
        data(){
            return {

            }
        }
    }
</script>

<style scoped>

</style>