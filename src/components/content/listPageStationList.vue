<template>
    <div class="main-content-container mb-5">
        <h4 v-if="title">{{title.title}}</h4>
        <div class="row">
            <template v-if="!!(stations)">
                <template v-if="!isEmpty">
                    <app-station-card
                            v-for="(station,index) in stations"
                            :station="station"
                            :colSize="colLgSize"
                            :key="(station.id + randSolt() + index)"
                            @selectedRadio="onSelect(station)"></app-station-card>

                        <app-router-button
                            :title="title"
                            :colSize="colLgSize"></app-router-button>

                </template>
            </template>
            <template v-else>
                <transition name="elements">
                    <app-css-load></app-css-load>
                </transition>
            </template>
        </div>
    </div>
</template>

<script>
    import AppStationCard from './stationCard'
    import AppCssLoad from './cssLoad'
    import AppRouterButton from './routerButton'

    export default {
        components: {
            AppStationCard,
            AppCssLoad,
            AppRouterButton

        },
        props: {
            title: {
                type: Object
            },
            stations: {
                type: Array,
            },
            colLgSize: {
                type: Number,
                default: 12
            }
        },
        data() {
            return {}
        },
        computed: {
            isEmpty() {
                return this.stations.length === 0;
            }
        },
        methods: {
            onSelect(station) {
                this.$emit('selectedRadio', station)
            },
            randSolt() {
                return Math.floor(Math.random() * Math.floor(10000)).toString();
            },
            onClickMore() {
                this.$emit('onClickMore')
            }
        },

    }
</script>

<style scoped>

</style>