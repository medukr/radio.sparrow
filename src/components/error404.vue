<template>
    <div class="error">
        <div class="error__content">
            <h2>404</h2>
            <h3>Что-то пошло не так!</h3>
            <p>There was a problem on our end. Please try again later.</p>
            <button type="button" class="btn btn-accent btn-pill" @click="onClick">&larr; Назад</button>
        </div>
        <!-- / .error_content -->
    </div>
</template>

<script>
    export default {
        methods: {
            onClick(){
                this.$router.back();
            }
        }
    }
</script>

<style scoped>

</style>