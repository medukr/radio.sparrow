<template>
    <div class="main-content-container container-fluid px-4">
        <!-- Page Header -->
        <app-page-header
        :subtitle="subtitle"
        :title="title"></app-page-header>
        <!-- End Page Header -->
        <template v-if="!!(queryStations)">
            <template v-if="!isEmpty">
                <transition name="elements">
                    <div class="row">
                        <template v-for="station in queryStations">
                            <app-station-card-aside
                                    :station="station"
                                    @selectedRadio="onSelect(station)"
                            ></app-station-card-aside>
                        </template>
                    </div>
                </transition>
            </template>
            <h5 v-else>Ничего не найдено</h5>
        </template>
        <template v-else>
            <transition name="elements">
                <app-css-load></app-css-load>
            </transition>
        </template>
    </div>
</template>

<script>
    import AppPageHeader from './content/pageHeader'
    import AppStationCardAside from './content/stationCardAside'
    import AppCssLoad from './content/cssLoad'

    import {mapGetters, mapActions} from 'vuex'

    export default {
        name: "search",
        components:{
            AppPageHeader,
            AppStationCardAside,
            AppCssLoad
        },
        computed: {
            ...mapGetters('data',{
                queryStations: "queryStations"
            }),
            subtitle(){
                return 'Поиск'
            },
            title(){
                return !!(this.queryStations)
                    ? 'Найдено ' + this.queryStations.length
                    : 'Ищу...'
            },
            isEmpty(){
                return this.queryStations.length === 0;
            }

        },
        methods: {
            ...mapActions('player', {
                changeStation: 'changeStation'
            }),
            onSelect(selectedStation) {
                this.changeStation(selectedStation.id);
            },

        },
        beforeRouteUpdate (to, from, next) {
            this.$store.dispatch('data/loadQuery',{
                query: to.params.query
            });
            next();
        },
    }
</script>

<style scoped>

</style>