<template>
    <div class="page-header row no-gutters py-4">
        <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
            <span class="text-uppercase page-subtitle">{{subtitle}}</span>
            <h3 class="page-title">{{title}}</h3>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            subtitle: {
                type: String,
                default: 'Radio.Sparrow'
            },
            title: {
                type: String,
                required: true
            },
        }
    }
</script>

<style scoped>

</style>