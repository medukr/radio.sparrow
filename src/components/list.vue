<template>
    <div class="main-content-container container-fluid px-4">
        <!-- Page Header -->
        <app-page-header
        :title="title"></app-page-header>
        <!-- End Page Header -->
        <div class="col-lg-9 col-md-9 float-left">
            <app-categories-list></app-categories-list>
            <app-station-list
                    title="Недавно добавлены"
                    :stations="recent"
                    @selectedRadio="onSelect"></app-station-list>
            <app-station-list
                    title="Популярное"
                    :stations="popular"
                    @selectedRadio="onSelect"></app-station-list>
        </div>
        <div class="col-lg-3 col-md-3 float-right">
            <div>
                <div style="
                border: 1px solid black;
                min-height: 350px;
                width: auto;
                ">
                    <p class="p-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, delectus dolor ducimus excepturi fugiat illum, magnam magni possimus quod, rem ullam unde veritatis voluptate! Ab adipisci beatae doloremque doloribus eos error excepturi iusto labore modi, nam nostrum quas quibusdam rerum sequi similique sit voluptate voluptatum? Architecto atque ea ratione reprehenderit!</p>
                </div>
            </div>
            <app-station-list
                    title="Часто слушают"
                    :stations="popular"
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
        created() {
            this.loadPopular();
            this.loadRecent();
            this.loadCountries();
        },
        data() {
            return {
                title: 'Radio.Sparrow'
            }
        },
        computed: {
            ...mapGetters('data', {
                popular: 'popular',
                recent: 'recent'
            }),
            ...mapGetters('player', {
                station: 'station'
            })
        },
        methods : {
            ...mapActions('data', {
                loadPopular: 'loadPopular',
                loadRecent: 'loadRecent',
                loadCountries: 'loadCountries'
            }),
            ...mapActions('player', {
                changeStation: 'changeStation'
            }),
            onSelect(selectedStation) {
                this.changeStation(selectedStation.id);
            }
        }
    }
</script>

<style scoped>

</style>