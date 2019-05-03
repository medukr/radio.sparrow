<template>
    <nav class="navbar align-items-stretch navbar-light flex-md-nowrap p-0">


        <app-search-form></app-search-form>



        <ul class="navbar-nav border-left flex-row ">
            <li class="nav-item border-right dropdown notifications">
                <a class="nav-link nav-link-icon text-center" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <div class="nav-link-icon__wrapper">
                        <i class="material-icons ">play_arrow</i>
                    </div>
                </a>
                <div class="dropdown-menu dropdown-menu-small" aria-labelledby="dropdownMenuLink">
                    <div class="dropdown-item p-0 m-0">
                        <app-station-single-card
                                :onAirSongName="onAirSongName"
                                :onAirRadioStationName="onAirRadioStationName"
                                :onAirTrackImageUrl="onAirTrackImageUrl"
                                :onAirRadioStationImage="onAirRadioStationImage"
                                :onAirCategories="onAirCategories"></app-station-single-card>
                    </div>
                </div>
            </li>


            <radio :radioSrc="radioSrc"></radio>


        </ul>
    </nav>
</template>

<script>
    import Radio from './content/audioPlayer'
    import AppSearchForm from './content/searchForm'
    import AppStationSingleCard from './content/stationSingleCard'
    export default {
        components: {
            Radio,
            AppSearchForm,
            AppStationSingleCard
        },
        computed: {
            radioSrc(){
                return this.$store.getters['current/radioSrc']
            },
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

        },
        methods: {

        },
        data(){
            return {

            }
        },

    }
</script>

<style scoped>

</style>