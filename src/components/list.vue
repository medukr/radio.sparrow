<template>
    <div class="main-content-container container-fluid px-4">
        <!-- Page Header -->
        <app-page-header
        :title="title"></app-page-header>
        <!-- End Page Header -->

        <app-station-list
        :stations="stations"></app-station-list>
    </div>
</template>

<script>
    import AppPageHeader from './content/pageHeader'
    import AppStationList from './content/stantionsList'

    import {mapGetters} from 'vuex'

    export default {
        components: {
            AppPageHeader,
            AppStationList
        },
        created(){
          this.$store.dispatch('current/loadStations');
        },
        data(){
            return {
                title: 'All stations'
            }
        },
        computed: {
            ...mapGetters('current', {
                stations: 'stations'
            })
        }

    }
</script>

<style scoped>

</style>