<template>
    <div class="row mb-3">
        <div class="col">
        <h5>Жанры</h5>
            <span class="badge badge-pill badge-info m-1" v-for="category in cater">{{category}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            cater(){
                return ['rock','pop', 'chill', 'drum', 'bass', 'indie', 'classic', 'national']
            }
        }
    }
</script>

<style scoped>

</style>