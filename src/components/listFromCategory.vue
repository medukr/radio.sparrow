<template>
    <div class="main-content-container container-fluid px-4">
        <!-- Page Header -->
        <app-page-header
                :title="title"></app-page-header>
        <!-- End Page Header -->
        <div class="col-12">
        <app-station-list
                :title="categoryTitle"
                :stations="stationsFromCategory"
                @selectedRadio="onSelect"
        @onClickMore="onMore"></app-station-list>
        </div>
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
                title: 'Жанры',
                page: 1,
                per_page: 18,
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

                    if (category.length > 0) return category[0].title;
                }
                return null;
            },
            slug(){
                   return this.$route.params.slug;
            },
            id(){
                if (this.slug === 'recent' || this.slug === 'popular'){
                    //это такой себе костыль для унификации сейчас, и проблем потом при доработке приложения
                    if (this.slug === 'recent') return -1;
                    else return -2;
                }else if (this.allCategories !== null) {
                    let category = this.allCategories.filter((el) => {
                        return el.slug === this.slug;
                    });
                    if (category.length > 0) return category[0].id;
                }
                else return null
            }
        },
        methods : {
            ...mapActions('data', {
                loadStationsFromCategory: 'loadStationsFromCategory',
                loadAllCategories: 'loadAllCategories',
                loadCountries: 'loadCountries',
                loadMoreStationsFromCategory: 'loadMoreStationsFromCategory'
            }),
            ...mapActions('player', {
                changeStation: 'changeStation'
            }),
            onSelect(selectedStation) {
                this.changeStation(selectedStation.id)
            },
            onMore(){
                this.loadMoreStationsFromCategory({
                    id: this.id,
                    page: ++this.page,
                    per_page: this.per_page
                });
            },
            listInitFunc(){
                if (this.allCategories === null) this.loadAllCategories();
                else this.loadStationsFromCategory({
                    title: 'nothing',
                    id: this.id,
                    // page: this.page,
                    // per_page: this.per_page
                });
                console.log('LCmounted--->', this.id, this.slug);
            }
        },
        watch: {
            allCategories(){
                this.loadStationsFromCategory({
                    title: 'nothing',
                    id: this.id,
                    // page: this.page,
                    // per_page: this.per_page
                });
            }

        },
        created(){
            this.loadCountries();
        },
        activated(){
            this.listInitFunc();
        },
        mounted() {
            this.listInitFunc();
        }
    }
</script>

<style scoped>

</style>