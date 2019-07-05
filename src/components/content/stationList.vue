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

                        <template v-if="true">
                            <div class="btn col-lg-2 col-md-3 col-sm-4 col-6 mb-4 d-inline-block bg-custom-card m-auto pointer-event"
                                 @click="onClickMore()">
                                <h5 class="navbar-link text-muted">Больше...</h5>
                            </div>
                        </template>

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

    export default {
        components: {
            AppStationCard,
            AppCssLoad,
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