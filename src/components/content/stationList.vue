<template>
    <div class="main-content-container mb-5">
        <h4 v-if="title">{{title}}</h4>
        <div class="row">
                <template v-if="!!(stations)">
                    <template v-if="!isEmpty">

                        <app-station-card
                                v-for="(station,index) in stations"
                                :station="station"
                                :colSize="colLgSize"
                                :key="(station.id + randSolt() + index)"
                                @selectedRadio="onSelect(station)">
                        </app-station-card>

                        <app-more-button
                                :colSize="colLgSize"
                                @click="onClickMore()"></app-more-button>
                    </template>
                    <h5 v-else>Ничего не найдено</h5>
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
    import AppMoreButton from './moreButton'

    export default {
        components: {
            AppStationCard,
            AppCssLoad,
            AppMoreButton
        },
        props: {
            title: {
                type: String
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