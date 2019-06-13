<template>
    <div class="main-content-container mb-5">
        <h4>Жанры</h4>
        <div class="row">
                <template v-if="isLoaded">
                    <div v-for="category in allCategories">
<!--                         class="col-lg-2 col-md-4 col-sm-6 d-flex justify-content-center"-->

                        <router-link
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
                    </div>
                </template>
            <template v-else>
                <app-css-load></app-css-load>
            </template>
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
                return !!(this.allCategories);
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
    .badge {
        transition: 0.1s;
    }
    .badge:hover {
        box-shadow:   0 2px 8px rgba(0,0,0,0.25), 0 2px 4px rgba(0,0,0,0.22);
        /*background: #8445f7;*/
        background: #7a36f6;
    }
</style>