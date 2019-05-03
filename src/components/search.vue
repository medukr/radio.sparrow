<template>
    <div class="main-content-container container-fluid px-4">
        <!-- Page Header -->
        <app-page-header
        :subtitle="subtitle"
        :title="title"></app-page-header>
        <!-- End Page Header -->
        <div class="row">
            <app-station-card-aside></app-station-card-aside>
            <app-station-card-aside></app-station-card-aside>
            <app-station-card-aside></app-station-card-aside>
            <app-station-card-aside></app-station-card-aside>
        </div>
    </div>
</template>

<script>
    import AppPageHeader from './content/pageHeader'
    import AppStationCardAside from './content/stationCardAside'

    export default {
        name: "search",
        components:{
            AppPageHeader,
            AppStationCardAside
        },
        computed: {
            subtitle(){
                return 'Поиск'
            },
            title(){
                return 'Найдено ...'
            }
        }
    }
</script>

<style scoped>

</style>