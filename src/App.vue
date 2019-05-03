<template>
    <div>

        <div class="container-fluid">
            <div class="row">
                <!-- Main Sidebar -->
                <app-main-sidebar></app-main-sidebar>
                <!-- End Main Sidebar -->
                <main class="main-content col-lg-10 col-md-9 col-sm-12 p-0 offset-lg-2 offset-md-3">
                    <div class="main-navbar sticky-top bg-white">
                        <!-- Main Navbar -->
                        <app-main-navbar></app-main-navbar>
                    </div>
                    <!-- / .main-navbar -->
                    <router-view></router-view>
                    <app-footer></app-footer>
                </main>
            </div>
        </div>
    </div>

</template>

<script>
    import appMainSidebar from './components/main-sidebar';
    import appContent from './components/content';
    import AppFooter from './components/footer';
    import appMainNavbar from './components/main-navbar';
    import Radio from './components/content/audioPlayer'

    export default {
        name: 'app',
        components: {
            appMainSidebar,
            appContent,
            AppFooter,
            appMainNavbar,
            Radio
        },
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>

<style>
    [debug], [debug] *:not(g):not(path) {
        color:                 hsla(210, 100%, 100%, 0.9) !important;
        background:            hsla(210, 100%,  50%, 0.5) !important;
        outline: solid 0.25rem hsla(210, 100%, 100%, 0.5) !important;

        box-shadow: none !important;
        filter:     none !important;
    }

    .card-post__image {
        min-height: 10em;
    }

    .card-post--aside .card-post__image {
        min-width: 10em;
    }
</style>
