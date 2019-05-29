<template>
    <form action="#" class="main-navbar__search w-100 d-inline-block d-md-flex d-lg-flex"
    @submit.prevent>
        <div class="input-group input-group-seamless">
            <div class="input-group-prepend">
                <div class="input-group-text">
                    <i class="fa fa-search"></i>
                </div>
            </div>
            <input
                    class="navbar-search form-control bg-transparent"
                    type="text" placeholder="Search..."
                    aria-label="Search"
                    @input="onInput"
            v-model="searchQuery">
        </div>
    </form>
</template>

<script>
    export default {
        name: "searchForm",
        data(){
            return{
                timer: undefined,
                timerTimeout: 500,
                searchQuery: ''
            }
        },
        methods: {
            onInput(event){

                if (this.timer !== undefined) clearInterval(this.timer);

                if (event.target.value !== ''){
                    this.timer = setTimeout(()=>{
                        this.$store.commit('data/loadSpecialStations', {
                            title: 'queryStations',
                            data: null
                        });
                        this.$router.push({name: 'search',
                        params: {
                            query: this.searchQuery
                        }})
                    }, this.timerTimeout)
                }
            }
        },
        mounted() {
            this.searchQuery = this.$route.params.query;
        }
    }
</script>

<style scoped>

/*    .navbar-search {*/
/*        background: #8445f7;*/
/*        color: yellow;*/
/*    }*/
</style>