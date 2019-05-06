<template>
    <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
        <div class="card card-small card-post card-post--1 container" @click.prevent="onClick">
                <div class="card-post__image"
                     :style="radioStationImage">
                </div>
                <div class="border-top text-center">
                    <h6 class="">
                        <a class="text-fiord-blue" href="#" >{{station.name}}</a>
                    </h6>
                    <span class="text-muted">{{country}}</span>
                </div>
        </div>
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
                return "background-image: url('" + this.station.image.url + "');"
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


</style>