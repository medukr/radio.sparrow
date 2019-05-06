<template>
    <div class="main-content-container mb-5">
        <h4>Жанры</h4>
        <div class="col-9">
            <div class="row">
                <template v-if="isLoaded">
                    <a href="#">
                        <span class="badge badge-pill badge-info m-1"
                              v-for="category in primaryCategories">
                            {{category.title}}
                        </span>
                    </a>
                </template>
                <template v-else>
                    <app-css-load></app-css-load>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
    import AppCssLoad from './content/cssLoad'

    import {mapGetters, mapActions} from 'vuex'

    export default {
        components: {
            AppCssLoad
        },
        computed: {
            ...mapGetters('data', {
                primaryCategories:'primaryCategories'
            }),

            isLoaded(){
                return (this.primaryCategories) ? true : false;
            }
        },
        methods: {
          ...mapActions('data',{
              loadPrimaryCategories: 'loadPrimaryCategories'
          })
        },
        created() {
            this.loadPrimaryCategories();
        }
    }
</script>

<style scoped>

</style>