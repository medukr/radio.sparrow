<template>
    <div class="main-content-container container-fluid px-4">
        <!-- Page Header -->
        <app-page-header
                :title="title"></app-page-header>
        <!-- End Page Header -->

        <app-station-list
                :title="categoryTitle"
                :stations="stationsFromCategory"
                @selectedRadio="onSelect"></app-station-list>
    </div>
</template>

<script>
    import AppPageHeader from './content/pageHeader'
    import AppStationList from './content/stationList'

    import {mapGetters, mapActions} from 'vuex'

    export default {
        components: {
            AppPageHeader,
            AppStationList,
        },
        data() {
            return {
                title: 'Жанры'
            }
        },
        computed: {
            ...mapGetters('data', {
                allCategories: 'allCategories',
                stationsFromCategory: 'stationsFromCategory'
            }),
            ...mapGetters('player', {
                station: 'station'
            }),
            categoryTitle(){
                if (this.allCategories !== null) {
                    let category = this.allCategories.filter((el) => {
                        return el.slug === this.slug;
                    });

                    return category[0].title;
                }
            },
            slug(){
                return this.$route.params.slug;
            },
            id(){
                if (this.allCategories !== null) {
                    let category = this.allCategories.filter((el) => {
                        return el.slug === this.slug;
                    });

                    return category[0].id;
                }
                else return null
            }
        },
        methods : {
            ...mapActions('data', {
                loadStationsFromCategory: 'loadStationsFromCategory',
                loadAllCategories: 'loadAllCategories',
                loadCountries: 'loadCountries'
            }),
            ...mapActions('player', {
                changeStation: 'changeStation'
            }),
            onSelect(selectedStation) {
                this.changeStation(selectedStation.id)
            },
        },
        watch: {
            id() {
               if (this.id !== null){
                   this.loadStationsFromCategory({
                       title: this.slug,
                       id: this.id
                   })
               }
            }
        },
        created(){
            this.loadCountries();
        },
        mounted() {
            if (this.allCategories === null) this.loadAllCategories();
            else this.loadStationsFromCategory({
                title: 'nothing',
                id: this.id
            });
            console.log('LCmounted--->', this.id, this.slug);

        }
    }
</script>

<style scoped>

</style>