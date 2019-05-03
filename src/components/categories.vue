<template>
    <div class="main-content-container container-fluid px-4">
        <!-- Page Header -->
        <app-page-header
        :title="title"></app-page-header>
        <!-- End Page Header -->
        <h1>Categories</h1>
    </div>
</template>

<script>

    import AppPageHeader from './content/pageHeader'
    export default {
        name: "categories",
        components: {
            AppPageHeader
        },
        data(){
            return {
                title : 'Categories'
            }
        }
    }
</script>

<style scoped>

</style>