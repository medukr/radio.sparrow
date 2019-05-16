<template>
    <div class="main-content-container container-fluid px-4">
        <!-- Page Header -->
        <app-page-header
        :title="title"></app-page-header>
        <!-- End Page Header -->
        <div class="col-lg-9 col-md-9 d-inline-block">
            <app-categories-list></app-categories-list>
            <app-station-list
                    title="Недавно добавлены"
                    :stations="recent"
                    :colLgSize="9"
                    @selectedRadio="onSelect"></app-station-list>
            <app-station-list v-if="getStations('speech')"
                    title="Разговорное и новостное радио"
                    :stations="getStations('speech')"
                    :colLgSize="9"
                    @selectedRadio="onSelect"></app-station-list>
            <app-station-list v-if="getStations('pop')"
                    title="Поп радиостанции"
                    :stations="getStations('pop')"
                    :colLgSize="9"
                    @selectedRadio="onSelect"></app-station-list>
            <app-station-list v-if="getStations('dance')"
                    title="Радио танцевальной музыки"
                    :stations="getStations('dance')"
                    :colLgSize="9"
                    @selectedRadio="onSelect"></app-station-list>
            <app-station-list v-if="getStations('electronic')"
                    title="Радио электронной музыки"
                    :stations="getStations('electronic')"
                    :colLgSize="9"
                    @selectedRadio="onSelect"></app-station-list>
            <app-station-list v-if="getStations('decades')"
                              title="Радио прошлых лет"
                              :stations="getStations('decades')"
                              :colLgSize="9"
                              @selectedRadio="onSelect"></app-station-list>
        </div>
        <div class="col-lg-3 col-md-3 float-right">
            <div>
                <div style="
                border: 1px solid black;
                min-height: 350px;
                width: auto;
                margin-bottom: 2em;
                ">
                    <p class="p-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, delectus dolor ducimus excepturi fugiat illum, magnam magni possimus quod, rem ullam unde veritatis voluptate! Ab adipisci beatae doloremque doloribus eos error excepturi iusto labore modi, nam nostrum quas quibusdam rerum sequi similique sit voluptate voluptatum? Architecto atque ea ratione reprehenderit!</p>
                </div>
            </div>
            <app-station-list
                    title="Часто слушают"
                    :stations="popular"
                    :colLgSize="3"
                    @selectedRadio="onSelect"></app-station-list>
        </div>
    </div>
</template>

<script>
    import AppPageHeader from './content/pageHeader'
    import AppCategoriesList from './content/categoriesList'
    import AppStationList from './content/stationList'

    import {mapGetters, mapActions} from 'vuex'

    export default {
        components: {
            AppPageHeader,
            AppCategoriesList,
            AppStationList,
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
            this.loadPopular();
            this.loadRecent();
            this.loadCountries();
            // Object.defineProperty(this, stationFMP, {})
            // console.log('--->', this.stationsForMainPage);

        },
        mounted() {
            for (let station in this.stationsForMainPage) {
                this.loadStationsFromCategory({
                    title: station,
                    id: this.stationsForMainPage[station].id
                });
            }

        },
    }
</script>

<style scoped>

</style>