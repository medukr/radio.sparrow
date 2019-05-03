<template>
    <div class="main-content-container container-fluid px-4">
        <!-- Page Header -->
        <app-page-header
        :title="title"></app-page-header>
        <!-- End Page Header -->

        <app-station-single-card
        :onAirSongName="onAirSongName"
        :onAirRadioStationName="onAirRadioStationName"
        :onAirTrackImageUrl="onAirTrackImageUrl"
        :onAirRadioStationImage="onAirRadioStationImage"
        :onAirCategories="onAirCategories"></app-station-single-card>

    </div>
</template>

<script>
    import AppPageHeader from './content/pageHeader'
    import AppStationSingleCard from './content/stationSingleCard'

    export default {
        components: {
            AppStationSingleCard,
            AppPageHeader
        },
        data(){
            return {
                title: 'Playing Now'
            }
        },
        computed : {
            onAirSongName(){
               return this.$store.getters['current/trackName']
            },
            onAirRadioStationName(){
                return this.$store.getters['current/radioName']
            },
            onAirTrackImageUrl(){
                return this.$store.getters['current/trackImage']
            },
            onAirRadioStationImage(){
                return this.$store.getters['current/radioImage']
            },
            onAirCategories(){
                return this.$store.getters['current/category']
            }
        }
    }
</script>

<style scoped>

</style>