<template>
    <div>
        <div class="page-header row no-gutters py-4">
            <div class="col-12 col-sm-6 text-center text-sm-left mb-0">
                <span class="text-uppercase page-subtitle">Title</span>
                <h3 class="page-title">Title2</h3>
            </div>
        </div>
        <app-station-list></app-station-list>
    </div>

</template>

<script>
    import appStationCard from './content/stationCard'
    import appStationList from './content/stantionsList'

    export default {
        components: {
            appStationCard,
            appStationList
        },
    }
</script>

<style scoped>

</style>