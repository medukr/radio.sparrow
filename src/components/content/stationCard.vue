<template>
    <div class="col-lg-2 col-md-3 col-sm-4 col-6 mb-4 d-inline-block">
        <a :href="'/play/' + station.id" class="card card-small card-post card-post--1" @click.prevent="onClick">
            <div class="card-post__image"
                 :style="radioStationImage">
            </div>
            <div class="border-top text-center">
                <h6 class="">
                    <span class="text-fiord-blue">{{station.name}}</span>
                </h6>
                <span class="text-muted">{{country}}</span>
            </div>
        </a>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        props: {
            station: {
                type: Object,
                required: true,
            }
        },

        computed: {
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
                        return (element.country_code === this.station.country) ? true : false
                    })
                }

                if (country.length > 0) return  country[0].name;


                return this.station.country;
            }
        },
        methods: {
            onClick(){
                this.$emit('selectedRadio')
            }
        }
    }
</script>

<style scoped>
    a:hover {
        text-decoration: none;
    }
</style>