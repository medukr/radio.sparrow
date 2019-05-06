<template>
    <nav class="navbar align-items-stretch navbar-light flex-md-nowrap p-0">
        <div class="navbar-nav">
            <div class="nav-item">
                <a class="nav-link nav-link-icon text-center" href="#">
                    <div class="nav-link-icon__wrapper">
                        <router-link
                                :to="{name: 'home'}">
                            <i class="material-icons">radio</i>
                        </router-link>
                    </div>
                </a>
            </div>
        </div>
        <div class="navbar-nav">
            <div class="nav-item">
                <a class="nav-link nav-link-icon text-center" href="#">
                    <div class="nav-link-icon__wrapper">
                        <router-link
                                :to="{name: 'play'}">
                            <i class="material-icons">play_arrow</i>
                        </router-link>
                    </div>
                </a>
            </div>
        </div>
        <radio :src="src"
        type="audio/mpeg"></radio>
        <app-search-form></app-search-form>
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
            },
            src(){
                return this.current != null ?  this.current.streams[0].stream : '';
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