<template>
    <main class="main-content col-lg-10 col-md-9 col-sm-12 p-0 offset-lg-2 offset-md-3">
        <div class="main-content-container container-fluid px-4">
            <app-header></app-header>
            <app-content></app-content>
            <app-footer></app-footer>
        </div>
    </main>
</template>

<script>
    import appHeader from './components/header';
    import appFooter from './components/footer';
    import appContent from './components/content';

    export default {
        name: 'app',
        components: {
            appHeader,
            appContent,
            appFooter
        },
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>

<style>

</style>
