<template>
    <div class="col-lg-3 col-md-6 col-sm-12 mb-4"
    >
        <div class="card card-small card-post card-post--1">
            <div class="card-post__image"
                 :style="radioStationImage">
                <a href="#" class="card-post__category badge badge-pill badge-dark">Category</a>
            </div>
            <div class="card-body">
                <h5 class="card-title">
                    <a class="text-fiord-blue" href="#" @click.prevent="onClick">{{station.name}}</a>
                </h5>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            station: {
                type: Object,
                required: true,
            }
        },

        computed: {
            radioStationImage(){
                return "background-image: url('" + this.station.image.url + "');"
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