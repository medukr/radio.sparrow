<template>
    <div class="main-content-container container-fluid px-4">
        <!-- Page Header -->
        <app-page-header
        :title="title"></app-page-header>
        <!-- End Page Header -->

        <app-station-single-card v-if="station !== null"
        :onAirSongName="onAirSongName"
        :onAirRadioStationName="onAirRadioStationName"
        :onAirTrackImageUrl="onAirTrackImageUrl"
        :onAirRadioStationImage="onAirRadioStationImage"
        :onAirCategories="onAirCategories"></app-station-single-card>
        <app-css-load v-else></app-css-load>
    </div>

</template>

<script>
    import AppPageHeader from './content/pageHeader'
    import AppStationSingleCard from './content/stationSingleCard'
    import AppCssLoad from './content/cssLoad';

    import {mapGetters, mapActions} from 'vuex'

    export default {
        components: {
            AppStationSingleCard,
            AppPageHeader,
            AppCssLoad
        },
        data(){
            return {
                title: 'Playing Now'
            }
        },
        computed : {
            ...mapGetters('player', {
                station: 'station',
                songHistory: "songHistory"
            }),
            onAirSongName(){
                if (this.station !== null && this.songHistory !== null) {
                    return this.songHistory[0].title + ' : ' + this.songHistory[0].name
                    // console.log('--->', this.songHistory);
                }
               return 'no name'
            },
            onAirRadioStationName(){
                return this.station !== null
                    ? this.station.name
                    : 'no station'
            },
            onAirTrackImageUrl(){
                return '/src/assets/images/radio_logo/no-track-image.png'
            },
            onAirRadioStationImage(){
                return this.station !== null
                    ? this.station.image.url
                    : '/src/assets/images/radio_logo/noimage.png'
            },
            onAirCategories(){
                return this.station !== null
                    ? this.station.categories[0].title
                    : 'no category'
            },
            id(){
                return this.$route.params.id
            }
        },
        methods: {
            ...mapActions('player',{
                loadCurrentStation: 'loadCurrentStation',
                loadSongHistory: 'loadSongHistory'
            })
        },
        watch: {
          loadSong(){

          }
        },
        mounted() {
            if (this.station === null || this.id !== this.station.id) this.loadCurrentStation(this.id);
        }
    }
</script>

<style scoped>

</style>