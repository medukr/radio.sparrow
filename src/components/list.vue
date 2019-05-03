<template>
    <div class="main-content-container container-fluid px-4">
        <!-- Page Header -->
        <app-page-header
        :title="title"></app-page-header>
        <!-- End Page Header -->
        <app-categories-list></app-categories-list>
        <app-popular-list></app-popular-list>
    </div>
</template>

<script>
    import AppPageHeader from './content/pageHeader'
    import AppCategoriesList from './categoriesList'
    import AppPopularList from './popularList'

    import {mapGetters} from 'vuex'

    export default {
        components: {
            AppPageHeader,
            AppCategoriesList,
            AppPopularList
        },
        created(){
          // this.$store.dispatch('current/loadStations');
        },
        data(){
            return {
                title: ' '
            }
        },
        computed: {
            ...mapGetters('current', {
                stations: 'stations'
            })
        }

    }
</script>

<style scoped>

</style>