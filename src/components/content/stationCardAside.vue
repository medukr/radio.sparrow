<template>
    <div class="col-lg-6 col-sm-12 mb-4">
        <a :href="'/play/' + station.id" class="card card-small card-post card-post--aside card-post--1" @click.prevent="onClick">
            <div class="card-post__image"
                 :style="radioStationImage">
            </div>
            <div class="card-body">
                <h5 class="card-title">
                    <p class="text-fiord-blue">{{station.name}}</p>
                </h5>
                <span class="text-muted">{{country}}</span>
            </div>
        </a>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "stationCardAside",
        props : {
            station: Object
        },
        computed : {
            ...mapGetters('data',{
                countries: 'countries'
            }),
            radioStationImage(){
                return this.station.image.url !== null
                    ? "background-image: url('" + this.station.image.url + "');"
                    : "background-image: url('/src/assets/images/radio_logo/noimage.png');"
            },
            country(){
                let country = '';

                if (this.countries !== null) {
                    country = this.countries.filter((element)=>{
                        return element.country_code === this.station.country
                    })
                }

                if (country.length > 0) return  country[0].name;

                return this.station.country;
            },
        },
        methods: {
            onClick(){
                this.$emit('selectedRadio')
            }
        }
    }
</script>

<style scoped>
    .card {
        min-height: 5rem;
        transition: 0.05s;
    }
    a:hover {
        text-decoration: none;
    }
    .card:hover {
        box-shadow: 0 3px 25px rgba(0,0,0,0.25), 0 3px 5px rgba(0,0,0,0.22);
    }
</style>