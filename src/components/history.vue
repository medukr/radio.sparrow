<template>
    <div class="main-content-container container-fluid px-4">
        <!-- Page Header -->
        <app-page-header
        :title="title"></app-page-header>
        <!-- End Page Header -->
        <h1>History</h1>
    </div>
</template>

<script>

    import AppPageHeader from './content/pageHeader'
    export default {
        name: "history",
        components: {
            AppPageHeader
        },
        data(){
            return {
                title: 'History'
            }
        }
    }
</script>

<style scoped>

</style>