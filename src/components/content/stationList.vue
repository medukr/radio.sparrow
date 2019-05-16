<template>
    <div class="main-content-container mb-5">
        <h4 v-if="title">{{title}}</h4>
        <div class="row">
            <div class="col">
                <template v-if="isLoaded">
                        <app-station-card
                                v-if="!isEmpty"
                                v-for="(station,index) in stations"
                                          :station="station"
                                            :colSize="colLgSize"
                                          :key="(station.id + randSolt() + index)"
                                          @selectedRadio="onSelect(station)"></app-station-card>
<!--                    <v-pagination v-model="currentPage"-->
<!--                                  :page-count="20"-->
<!--                                  :classes="bootstrapPaginationClasses"-->
<!--                                  :labels="customLabels"-->
<!--                                  @change="onChange"></v-pagination>-->
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
    import vPagination from './vue-plain-pagination'

    export default {
        components: {
            AppStationCard,
            AppCssLoad,
            vPagination
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
        data(){
            return {
                currentPage: 1,
                bootstrapPaginationClasses: { // http://getbootstrap.com/docs/4.1/components/pagination/
                    ul: 'pagination',
                    li: 'page-item',
                    liActive: 'active',
                    liDisable: 'disabled',
                    button: 'page-link'
                },
                customLabels: {
                    first: 'First',
                    prev: 'Previous',
                    next: 'Next',
                    last: 'Last'
                }
            }
        },
        computed: {
            isLoaded(){
                return (this.stations) ? true : false;
            },
            isEmpty(){
                return this.stations.lenght == 0 ? true : false;
            }
        },
        methods: {
            onSelect(station) {
                this.$emit('selectedRadio', station)
            },
            randSolt(){
                return Math.floor(Math.random() * Math.floor(10000)).toString();
            },
            onChange: function () {
                // eslint-disable-next-line no-console
                console.log(`"currentPage" has been changed`)
                console.log('--->', this.currentPage);
            }
        },

    }
</script>

<style scoped>

</style>