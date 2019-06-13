<template>
    <div class="main-content-container mb-5">
        <h4 v-if="title">{{title.title}}</h4>
        <div class="row">
                <template v-if="!!(stations)">
                    {{stations.categories}}
                    <template  v-if="!isEmpty">
                        <app-station-card
                                v-for="(station,index) in stations"
                                :station="station"
                                :colSize="colLgSize"
                                :key="(station.id + randSolt() + index)"
                                @selectedRadio="onSelect(station)"></app-station-card>
                        <template v-if="true">
                            <div class="row">
                                <router-link
                                        tag="a"
                                        class="btn col d-inline-block bg-custom-card pointer-event mx-4"
                                        :key="title.slug + randSolt()"
                                        :to="{name: 'listFromCategory',
                                                 params: {
                                                    slug: title.slug
                                                 }}"><h5
                                        class="navbar-link text-muted">Больше...</h5></router-link>
                            </div>
                        </template>
                    </template>
                </template>
                <template v-else>
                   <app-css-load></app-css-load>
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
        data(){
            return {
            }
        },
        computed: {
            isEmpty(){
                return this.stations.length === 0;
            }
        },
        methods: {
            onSelect(station) {
                this.$emit('selectedRadio', station)
            },
            randSolt(){
                return Math.floor(Math.random() * Math.floor(10000)).toString();
            },
            onClickMore(){
                this.$emit('onClickMore')
            }
        },

    }
</script>

<style scoped>

</style>