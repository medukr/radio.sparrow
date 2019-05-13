<template>
    <div class="main-content-container container-fluid px-4">
        <!-- Page Header -->
        <app-page-header
                title="Жанры"></app-page-header>
        <!-- End Page Header -->

            <app-station-list
                    :title="category.title"
                    :stations="stations"
                    @selectedRadio="onSelect"></app-station-list>
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
            AppStationList,
        },
        created() {
            // this.loadCountries();

        },
        data() {
            return {
                title: 'Radio.Sparrow'
            }
        },
        computed: {
            ...mapGetters('data', {
                allCategories: 'allCategories'
            }),
            slug(){
                return this.$route.params.slug
            },
            category(){
                let category = this.allCategories.filter((el) => {
                    return el.slug === this.slug ? true : false;
                });

                return category[0];
            },
            stations(){

            }
        },
        methods : {
            ...mapActions('data', {
            //     loadPopular: 'loadPopular',
            //     loadRecent: 'loadRecent',
            //     loadCountries: 'loadCountries'
                  loadAllCategories:'loadAllCategories'
            }),
            ...mapActions('current', {
                setCurrent: 'setCurrent'
            }),
            onSelect(selectedStation) {
                this.setCurrent(selectedStation);
                this.$router.push({name: 'play'});
            },

        }
    }
</script>

<style scoped>

</style>