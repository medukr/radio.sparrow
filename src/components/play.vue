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

    import {mapGetters} from 'vuex'

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
            ...mapGetters('current', {
                current: 'current'
            }),
            onAirSongName(){
               return 'no name'
            },
            onAirRadioStationName(){
                return this.current != null ? this.current.name : ''
            },
            onAirTrackImageUrl(){
                return '/src/assets/images/radio_logo/no-track-image.png'
            },
            onAirRadioStationImage(){
                return this.current != null ? this.current.image.url : ''
            },
            onAirCategories(){
                return 'no category'
            }
        }
    }
</script>

<style scoped>

</style>