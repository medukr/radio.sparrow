<template>
    <div class="main-content-container mb-5">
        <h4 v-if="title">{{title}}</h4>
        <div class="col-9">
            <div class="row">
                <template v-if="isLoaded">
                    <app-station-card v-for="(station,index) in stations"
                                      :station="station"
                                      :key="(station.id + randSolt() + index)"
                                      @selectedRadio="onSelect(station)"></app-station-card>
                </template>
                <template v-else>
                   <app-css-load></app-css-load>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
    import AppStationCard from './stationCard'
    import AppCssLoad from './cssLoad'

    export default {
        components: {
            AppStationCard,
            AppCssLoad
        },
        props: {
            title: {
                type: String
            },
            stations: {
                type: Array,

            }
        },
        computed: {
            isLoaded(){
                return (this.stations) ? true : false;
            }
        },
        methods: {
            onSelect(station) {
                this.$emit('selectedRadio', station)
            },
            randSolt(){
                return Math.floor(Math.random() * Math.floor(10000)).toString();
            }
        },

    }
</script>

<style scoped>

</style>