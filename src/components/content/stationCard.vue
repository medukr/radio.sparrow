<template>
    <div class="col-lg-3 col-md-6 col-sm-12 mb-4"
    @click="onClick">
        <div class="card card-small card-post card-post--1">
            <div class="card-post__image"
                 :style="radioStationImage">
                <a href="#" class="card-post__category badge badge-pill badge-dark">{{onAirCategories}}</a>
            </div>
            <div class="card-body">
                <h5 class="card-title">
                    <a class="text-fiord-blue" href="#">{{onAirRadioStationName}}</a>
                </h5>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            onAirRadioStationName: {
                type: String,
                required: true
            },
            onAirRadioStationImage: {
                type: String,
                default: ''  //need default image
            },
            onAirCategories: {
                type: String,
                default: '' //need default category
            }
        },

        computed: {
            radioStationImage(){
                return "background-image: url('" + this.onAirRadioStationImage + "');"
            }
        },
        methods: {
            onClick(){
                this.$emit('checkedRadio')
            }
        }
    }
</script>

<style scoped>

</style>