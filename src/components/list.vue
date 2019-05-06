<template>
    <div class="main-content-container container-fluid px-4">
        <!-- Page Header -->
        <app-page-header
        :title="title"></app-page-header>
        <!-- End Page Header -->
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
</template>

<script>
    import AppPageHeader from './content/pageHeader'
    import AppCategoriesList from './categoriesList'
    import AppStationList from './content/stationList'

    import {mapGetters, mapActions} from 'vuex'

    export default {
        components: {
            AppPageHeader,
            AppCategoriesList,
            AppStationList,
        },
        created() {
            this.loadCountries();
            this.loadPopular();
            this.loadRecent();

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
            })
        },
        methods : {
            ...mapActions('data', {
                loadPopular: 'loadPopular',
                loadRecent: 'loadRecent',
                loadCountries: 'loadCountries'
            }),
            ...mapActions('current', {
                setCurrent: 'setCurrent'
            }),
            onSelect(selectedStation) {
                this.setCurrent(selectedStation)
            }
        }

    }
</script>

<style scoped>

</style>