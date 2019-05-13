<template>
    <div class="main-content-container mb-5">
        <h4>Жанры</h4>
        <div class="row">
        <div class="col">
                <template v-if="isLoaded">
                    <router-link
                            v-for="category in allCategories"
                            tag="a"
                            :to="{
                                  name:'listFromCategory',
                                  params: {
                                      slug: category.slug
                                          }
                                  }"
                            :key="category.id">
                                <span class="badge badge-pill badge-info m-1">
                                    {{category.title}}
                                </span>
                    </router-link>
                </template>
                <template v-else>
                    <app-css-load></app-css-load>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
    import AppCssLoad from './cssLoad'

    import {mapGetters, mapActions} from 'vuex'

    export default {
        components: {
            AppCssLoad
        },
        computed: {
            ...mapGetters('data', {
                primaryCategories:'primaryCategories',
                allCategories: 'allCategories'
            }),

            isLoaded(){
                return (this.allCategories) ? true : false;
            }
        },
        methods: {
          ...mapActions('data',{
              loadPrimaryCategories: 'loadPrimaryCategories',
              loadAllCategories: 'loadAllCategories'
          })
        },
        created() {
            this.loadAllCategories();
        }
    }
</script>

<style scoped>

</style>