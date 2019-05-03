<template>
    <nav class="navbar align-items-stretch navbar-light flex-md-nowrap p-0">

        <radio :station="current"></radio>
        <app-search-form></app-search-form>


        <ul class="navbar-nav border-left flex-row ">
            <li class="nav-item border-right dropdown notifications ">
                <a class="nav-link nav-link-icon text-center" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <div class="nav-link-icon__wrapper">
                        <i class="material-icons ">play_arrow</i>
                    </div>
                </a>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <div class="dropdown-item">
                        <div class="text-center">
                            <router-link
                            :to="{name: 'play'}">
                                <i class="material-icons">play_arrow</i>
                            </router-link>
                        </div>
                    </div>
                </div>

            </li>





        </ul>

    </nav>
</template>

<script>
    import Radio from './content/audioPlayer'
    import AppSearchForm from './content/searchForm'

    import {mapGetters} from 'vuex'



    export default {
        components: {
            Radio,
            AppSearchForm,
        },
        computed: {
            // ...mapGetters('current', {
            //     current: 'current'
            // })
            current(){

                return this.$store.getters['current/current']
            }
        },

        data(){
            return {

            }
        },

    }
</script>

<style scoped>

</style>