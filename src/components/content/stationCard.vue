<template>
    <div :class="colClass">
        <a :href="'/play/' + station.id" class="card card-small bg-custom-card card-post card-post--1 " @click.prevent="onClick">
            <div class="card-post__image"
                 :style="radioStationImage">
            </div>
            <div class="text-center p-1 my-auto">
                <p class="text-fiord-blue mb-0">{{station.name}}</p>
                <span class="text-muted">{{country}}</span>
            </div>
        </a>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
    export default {
        props: {
            station: {
                type: Object,
                required: true,
            },
            colSize: {
                type: Number,
                default: 12
            }
        },
        data(){
            return{
                showImage: false
            }
        },

        computed: {
            ...mapGetters('data',{
                countries: 'countries'
            }),
            ...mapGetters('service',{
                scrollTop: 'scrollTop',
                colClasses: 'cardColClasses'
            }),
            radioStationImage(){
                return "background-image: url('" + this.lazyImageUrl + "');"

            },
            lazyImageUrl(){
                if (this.station.image.url !== null) {
                    return this.showImage === true
                        ? this.station.image.url
                        : '/src/assets/images/radio_logo/noimage.png'
                }
                return '/src/assets/images/radio_logo/noimage.png';
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
            colClass(){
                return this.colClasses["col-" + this.colSize.toString() + "-classes"]
            }
        },
        methods: {
            ...mapActions('data', {
                loadCountries: 'loadCountries'
            }),
            onClick(){
                this.$emit('selectedRadio')
            },
            //Расчет момента загрузки лого станции
            checkScroll(){
                if ((this.scrollTop + 200) > this.$el.offsetTop)  this.showImage = true;
            }
        },
        watch: {
            scrollTop(){
               this.checkScroll();
            }
        },
        mounted(){
            // if (this.countries === null) this.loadCountries();
            //вызывается каждый раз при этом хуке, проверка не работает?



            this.checkScroll();
        }
    }
</script>

<style scoped>
    a:hover {
        text-decoration: none;
    }
    .card {
        transition: 0.05s;
    }
    .card:hover {
        box-shadow: 0 3px 25px rgba(0,0,0,0.25), 0 3px 5px rgba(0,0,0,0.22);
    }

    /*.text-white{*/
    /*    color: white;*/
    /*}*/

    /*.text-muted {*/
    /*    color: yellow;*/
    /*}*/

    /*.card-footer {*/
    /*    background: #8445f7;*/
    /*}*/

   span.text-muted{
        font-size: 11px;
    }
    p.text-fiord-blue {
        font-size: 14px;
    }

</style>