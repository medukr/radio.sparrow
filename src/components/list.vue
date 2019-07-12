<template>
    <div class="main-content-container container-fluid px-4">
        <!-- Page Header -->
        <app-page-header
        :title="title"></app-page-header>
        <!-- End Page Header -->
        <div class="col-lg-8 col-md-8 d-inline-block">
            <app-categories-list></app-categories-list>
            <app-list-page-station-list
                    :title="{
                        title: 'Недавно добавлены',
                        slug: 'recent'
                    }"
                    :stations="recent"
                    :colLgSize="8"
                    @selectedRadio="onSelect"></app-list-page-station-list>
            <app-list-page-station-list v-if="getStations('speech')"
                    :title="{
                        title: 'Разговорное и новостное радио',
                        slug: 'talk-speech'
                        }"
                    :stations="getStations('speech')"
                    :colLgSize="8"
                    @selectedRadio="onSelect"></app-list-page-station-list>
            <app-list-page-station-list v-if="getStations('pop')"
                    :title="{
                        title: 'Поп радиостанции',
                        slug: 'pop'
                    }"
                    :stations="getStations('pop')"
                    :colLgSize="8"
                    @selectedRadio="onSelect"></app-list-page-station-list>
            <app-list-page-station-list v-if="getStations('dance')"
                    :title="{
                        title: 'Радио танцевальной музыки',
                        slug: 'dance'
                    }"
                    :stations="getStations('dance')"
                    :colLgSize="8"
                    @selectedRadio="onSelect"></app-list-page-station-list>
            <app-list-page-station-list v-if="getStations('electronic')"
                    :title="{
                        title: 'Радио электронной музыки',
                        slug: 'electronic'
                    }"
                    :stations="getStations('electronic')"
                    :colLgSize="8"
                    @selectedRadio="onSelect"></app-list-page-station-list>
            <app-list-page-station-list v-if="getStations('decades')"
                              :title="{
                              title: 'Радио прошлых лет',
                              slug: 'decades'
                              }"
                              :stations="getStations('decades')"
                              :colLgSize="8"
                              @selectedRadio="onSelect"></app-list-page-station-list>
        </div>
        <div class="col-lg-4 col-md-4 float-right">
            <app-list-page-station-list
                    :title="{
                        title: 'Часто слушают',
                        slug: 'popular'
                    }"
                    :stations="popular"
                    :colLgSize="4"
                    @selectedRadio="onSelect"></app-list-page-station-list>
        </div>
    </div>
</template>

<script>
    import AppPageHeader from './content/pageHeader'
    import AppCategoriesList from './content/categoriesList'
    import AppListPageStationList from './content/listPageStationList'

    import {mapGetters, mapActions} from 'vuex'

    export default {
        components: {
            AppPageHeader,
            AppCategoriesList,
            AppListPageStationList,
        },
        data() {
            return {
                title: 'Radio.Sparrow',
                stationsForMainPage: {
                    pop: {
                        id: 5,
                        propName: 'popStations',
                    },
                    dance: {
                        id: 3,
                        propName: 'danceStations',
                    },
                    electronic: {
                        id: 14,
                        propName: 'electronicStations',
                    },
                    speech: {
                        id: 4,
                        propName: 'speechStations',
                    },
                    decades: {
                        id: 40,
                        propName: 'decadesStations',
                    }
                }
            }
        },
        computed: {
            ...mapGetters('data', {
                popular: 'popular',
                recent: 'recent',
                popStations: 'popStations',
                danceStations: 'danceStations',
                speechStations: 'speechStations',
                electronicStations: 'electronicStations',
                decadesStations: 'decadesStations',
                allCategories: 'allCategories'
            }),
            ...mapGetters('player', {
                station: 'station'
            }),

        },
        methods : {
            ...mapActions('data', {
                loadPopular: 'loadPopular',
                loadRecent: 'loadRecent',
                loadCountries: 'loadCountries',
                loadStationsFromCategory: 'loadStationsFromCategory'
            }),
            ...mapActions('player', {
                changeStation: 'changeStation'
            }),
            onSelect(selectedStation) {
                this.changeStation(selectedStation.id);
            },
            getStations(name){
                if (typeof this.stationsForMainPage[name].propName !== 'undefined'){
                    let propName = this.stationsForMainPage[name].propName;
                    return this[propName] !== null && this[propName].length > 0
                        ? this[propName]
                        : false;
                }
                return  false;
            }
        },
        created() {

            if (this.popular === null) this.loadPopular();
            if (this.recent  === null) this.loadRecent();
            if (this.allCategories  === null) this.loadCountries();

        },
        mounted() {
            for (let station in this.stationsForMainPage) {
                if (this[this.stationsForMainPage[station].propName] === null) {
                    this.loadStationsFromCategory({
                        title: station,
                        id: this.stationsForMainPage[station].id
                    });
                }
            }
        }
    }
</script>

<style scoped>

</style>