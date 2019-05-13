<template>
    <div class="h-100">
        <div class="container-fluid">
            <div class="row">
                <main class="main-content col-lg-12 col-md-12 col-sm-12 p-0">
                        <!-- Main Navbar -->
                        <app-main-navbar></app-main-navbar>
                    <!-- / .main-navbar -->
                    <keep-alive>
                        <transition name="router">
                            <router-view></router-view>
                        </transition>
                    </keep-alive>
                </main>
                <main class="main-content col-lg-12 col-md-12 col-sm-12 p-0">
                    <app-footer></app-footer>
                </main>
            </div>
        </div>
    </div>
</template>

<script>
    import appMainSidebar from './components/main-sidebar';
    import AppFooter from './components/footer';
    import appMainNavbar from './components/main-navbar';
    import Radio from './components/content/audioPlayer'

    export default {
        name: 'app',
        components: {
            appMainSidebar,
            AppFooter,
            appMainNavbar,
            Radio
        },
        data() {
            return {
                enterActiveClass: 'animated bounceLeft ',
                leaveActiveClass: 'animated bounceOutLeft'
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

    /*.card-post__image {*/
    /*    min-height: 8em;*/
    /*}*/

    /*.card-post--aside .card-post__image {*/
    /*    min-width: 8em;*/
    /*}*/

    .router-enter-active{
        /*animation: slideIn 0.5s;*/
        -webkit-animation-duration: 0.75s;
        animation-duration: 0.75s;
        -webkit-animation-name: bounceInUp;
        animation-name: bounceInUp;
    }

    .router-enter-to{

    }

    .router-leave{

    }

    .router-leave-active{

        animation: slideOut 0.5s;
        position: absolute;
    }

    .router-leave-to{

    }


    @keyframes slideIn {
        from{transform: translateX(-2000px)}
        to{transform: translateX(0px)}
    }
    @keyframes slideOut {
        from{transform: translateX(0px)}
        to{transform: translateX(-2000px)}
    }
</style>
