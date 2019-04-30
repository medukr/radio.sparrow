<template>
    <div class="main-content-container container-fluid px-4">
        <!-- Page Header -->
        <div class="page-header row no-gutters py-4">
            <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
                <span class="text-uppercase page-subtitle">Components</span>
                <h3 class="page-title">Blog Posts</h3>
            </div>
        </div>
        <!-- End Page Header -->
        <app-station-list></app-station-list>
        <app-error></app-error>
    </div>
</template>

<script>
    import appStationCard from './content/stationCard'
    import appStationList from './content/stantionsList'
    import appError from './error404'


    export default {
        components: {
            appStationCard,
            appStationList,
            appError
        },
    }
</script>

<style scoped>

</style>