<template>
    <div :class="colClass">
        <a href="#" @click.prevent="onClick" class="card card-small bg-custom-card card-post">
            <div class="text-center p-1 my-auto">
                <h5 class="navbar-link text-muted">Больше...</h5>
            </div>
        </a>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "app-button",
        props:{
            colSize: {
                type: Number,
                default: 12
            },
        },
        computed: {
            colClass(){
                return this.colClasses["col-" + this.colSize.toString() + "-classes"]
            },
            ...mapGetters('service', {
                colClasses: 'cardColClasses'
            }),

        },
        methods: {
            onClick(){
                this.$emit('click');
            }
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
</style>