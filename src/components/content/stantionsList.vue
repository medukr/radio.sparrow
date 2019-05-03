<template>
        <div class="row">
            <app-station-card v-for="(station,index) in stations"
                    :onAirRadioStationName="station.radioName"
                    :onAirRadioStationImage="station.radioImage"
                    :onAirCategories="station.category"
                              :key="index"
            @checkedRadio="onCheck($event,station.id)"></app-station-card>
        </div>
</template>

<script>
    import AppStationCard from './stationCard'
    import AppStationCardAside from './stationCardAside'

    export default {
        components: {
            AppStationCard,
            AppStationCardAside
        },
        props: {
          stations: {

              required: true
          }
        },
        data(){
            return {

            }
        },
        methods: {
            onCheck(event, id){
                this.$store.dispatch('current/setCurrent', id);

            }
        }
    }
</script>

<style scoped>

</style>