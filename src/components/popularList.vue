<template>
    <div class="mb-3">
        <div class="col">
        <h5>Часто слушают:</h5>
            <template v-if="isLoaded">
                <app-station-card v-for="station in popular"
                        :station="station"
                                  :key="station.name"
                        @checkedRadio="onCheck($event, station)"></app-station-card>
            </template>
        </div>
    </div>
</template>

<script>
    import AppStationCard from './content/stationCard';
    import {mapGetters, mapActions} from 'vuex'

    export default {
        components: {
            AppStationCard
        },
        computed: {
            ...mapGetters('data', {
                popular: 'popular'
            }),
            isLoaded(){
                if (this.popular !== null) {
                    return true;
                }
                return false;
            }
        },
        methods: {
            ...mapActions('data', {
                loadPopular: 'loadPopular'
            }),
            ...mapActions('current', {
                setCurrent: 'setCurrent'
            }),
            onCheck(event, station) {
                this.setCurrent(station)
            }
        },
        mounted() {
            this.loadPopular();
        }

    }
</script>

<style scoped>

</style>