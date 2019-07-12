<template>
    <div class="main-navbar sticky-top ">
        <nav class="navbar align-items-stretch bg-custom-navbar flex-md-nowrap p-0">
            <div class="navbar-nav flex-row">
                <div class="nav-item">
                    <router-link
                            :to="{name: 'home'}"
                            tag="a"
                            class="nav-link nav-link-icon text-center">
                        <div class="nav-link-icon__wrapper">
                            <i class="material-icons">radio</i>
                        </div>
                    </router-link>
                </div>
            </div>
            <div class="nav-item">
                <router-link v-if="station !== null"
                             :to="{name: 'play', params: {id: this.station.id}}"
                             class="nav-link nav-link-icon text-center"
                             :class="playButtonClass">
                    <div class="nav-link-icon__wrapper">
                        <i class="material-icons m-0 p-0">{{playButtonIcon}}</i>
                    </div>
                </router-link>
                <div v-else class="nav-link nav-link-icon text-center text-black">
                    <div class="nav-link-icon__wrapper">
                        <i class="material-icons">stop</i>
                    </div>
                </div>
            </div>
            <radio></radio>
            <app-search-form></app-search-form>

        </nav>
        <app-scroll-to-top></app-scroll-to-top>
    </div>
</template>

<script>
    import Radio from './content/audioPlayer'
    import AppSearchForm from './content/searchForm'
    import AppCssLoad from './content/cssLoad'
    import AppScrollToTop from './content/scrollToTop'

    import {mapGetters} from 'vuex'



    export default {
        components: {
            Radio,
            AppSearchForm,
            AppCssLoad,
            AppScrollToTop
        },
        computed: {
            ...mapGetters('player', {
                status: 'status',
                station: 'station'
            }),

            playButtonClass(){
                switch (this.status) {
                    case 'play': return this.playButtonClasses.play;
                    case 'pause': return this.playButtonClasses.pause;
                    case 'loading': return this.playButtonClasses.loading;
                    case 'error': return  this.playButtonClasses.error;
                    default: return ''
                }
            },
            playButtonIcon(){
                switch (this.status) {
                    case 'play': return this.playButtonIcons.play;
                    case 'pause': return this.playButtonIcons.pause;
                    case 'loading': return this.playButtonIcons.loading;
                    case 'error': return  this.playButtonIcons.error;
                    default: return ''
                }
            }

        },

        data(){
            return {
                playButtonClasses:{
                    play: 'text-success',
                    pause: 'text-primary',
                    loading: 'text-warning cssload-speeding-wheel',
                    error: 'text-danger'

                },
                playButtonIcons: {
                    play: 'play_arrow',
                    pause: 'pause',
                    loading: 'data_usage',
                    error: 'clear'
                }
            }
        },

    }
</script>

<style scoped>
    .cssload-speeding-wheel {
        animation: cssload-spin 575ms infinite linear;
    }
    @keyframes cssload-spin {
        100%{ transform: rotate(360deg); transform: rotate(360deg); }
    }

    i.material-icons {
        top: 0;
        font-size: 1.5rem;
    }
</style>