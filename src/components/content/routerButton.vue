<template>
    <div :class="colClass">
        <router-link
                tag="a"
                class="card card-small bg-custom-card card-post"
                :key="title.slug + randSolt()"
                :to="{name: 'listFromCategory',
                                                 params: {
                                                    slug: title.slug
                                                 }}">
            <div class="text-center p-1 my-auto">
                <h5 class="navbar-link text-muted">Больше...</h5>
            </div>
        </router-link>
    </div>
</template>

<script>

    import {mapGetters} from 'vuex'
    export default {
        name: "routerButton",
        props:{
            colSize: {
                type: Number,
                default: 12
            },
            title: {
                type: Object,
                required: true
            }
        },

        computed: {
            ...mapGetters('service', {
               colClasses: 'cardColClasses'
            }),
            colClass(){
                return this.colClasses["col-" + this.colSize.toString() + "-classes"]
            }
        },
        methods :{
            randSolt() {
                return Math.floor(Math.random() * Math.floor(10000)).toString();
            },
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