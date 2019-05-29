<template>
    <div class="col-lg-4 col-md-6 col-sm-6 m-auto">
        <div class="card card-small bg-custom-card-single card-post card-post--1">
            <div class="card-post__image"
                 :style="trackImage">
                    <div class="m-1">
                <router-link
                        v-for="(onAirCategory, index) in onAirCategories"
                        tag="a"
                        class="badge badge-pill badge-success m-2 float-right text-uppercase "
                        :key="onAirCategory.id + index"
                        :to="{name: 'listFromCategory',
                              params: {
                                  slug: onAirCategory.slug
                }}">
                    {{onAirCategory.title}}
                </router-link>
                    </div>
                <div class="card-post__author d-flex">
                    <div class="card-post__author-avatar"
                       :style="radioStationImage"></div>
                </div>
            </div>
            <div class="card-body">
                <h5 class="card-title d-inline-block">
                    <span class="text-fiord-blue">{{onAirRadioStationName}}</span>
                </h5>
                <p class="card-text d-inline-block mb-1">{{onAirStationCountryName}}</p>
                <div class="progress mb-3" style="transform: rotate(180deg);height: 2em">
                    <div
                            class="progress-bar "
                            :class="statusBar"
                            role="progressbar"
                            style="width: 100%;height: 100%"></div>
                </div>
                <p class="card-text text-muted d-inline-block mb-1">в эфире:</p>
                <p class="card-text">{{onAirSongName}}</p>
                <div class="nav-link nav-link-icon text-center">
                    <div class="nav-link-icon__wrapper">
                        <button href="#" @click="onClick" class="btn btn-accent btn-pill
" :disabled="disabledButton">
                            <i class="material-icons ">{{playButton}}</i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import {mapActions} from 'vuex'

    export default {
        props: {
            onAirSongName: {
                type: String,
                default: ''
            },
            onAirRadioStationName: {
                type: String,
                required: true
            },
            onAirTrackImageUrl: {
                type: String,
                default: ''  //need default image
            },
            onAirRadioStationImage: {
                type: String,
                default: ''  //need default image
            },
            onAirCategories: {
                type: Array,
                default: '' //need default category
            },
            onAirStationCountryName: {
                type: String,
                default: '' //need default category
            }
        },

        data() {
            return {
                statusBarClasses: {
                    playing: 'progress-bar-striped progress-bar-animated bg-success',
                    pause: 'progress-bar-striped progress-bar bg-success',
                    waiting: 'progress-bar-striped progress-bar-animated bg-warning',
                    error: 'bg-danger'
                },
                playButtonStyles: {
                    play: 'play_arrow',
                    pause: 'pause',
                    stop: 'stop',
                },

            }
        },
        computed: {
            ...mapGetters('player', {
                paused: 'paused',
                status: 'status'
            }),
            trackImage() {
                return "background-image: url('" + this.onAirTrackImageUrl + "');"
            },
            radioStationImage() {
                return "background-image: url('" + this.onAirRadioStationImage + "');"
            },
            statusBar() {
                switch (this.status) {
                    case 'play':
                        return this.statusBarClasses.playing;

                    case 'pause':
                        return this.statusBarClasses.pause;

                    case 'loading':
                        return this.statusBarClasses.waiting;

                    case 'error':
                        return this.statusBarClasses.error;

                }

            },
            playButton() {
                switch (this.status) {
                    case 'play':
                        return 'stop';
                    case 'loading':
                        return 'play_arrow';
                    case 'pause':
                        return 'play_arrow';
                }
            },
            disabledButton() {
                // if (this.status === 'loading' || this.status === 'error') return true;
                // return false

                return false;
            },
        },
        methods: {
            ...mapActions('player', {
                setPaused: 'setPaused'
            }),
            onClick() {
                let audioTag = document.getElementsByTagName('audio')[0];

                if (this.status === 'play') audioTag.pause();
                else audioTag.play();
            }
        }
    }
</script>

<style scoped>
.card-post__image {
    min-height: 16rem;
}
</style>