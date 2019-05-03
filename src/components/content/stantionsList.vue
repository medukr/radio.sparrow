<template>
    <div class="row">
        <div class="col">
            <h5>Недавно добавленные:</h5>
            <app-station-card v-for="(station,index) in stations"
                              :onAirRadioStationName="station.radioName"
                              :onAirRadioStationImage="station.radioImage"
                              :onAirCategories="station.category"
                              :key="index"
                              @checkedRadio="onCheck($event,station.id)"></app-station-card>
        </div>
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