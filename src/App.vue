<template>
    <div class="h-100">
        <div class="container-fluid">
            <div class="row">
                <main class="col-12 p-0">
                    <!-- Main Navbar -->
                    <app-main-navbar></app-main-navbar>
                    <!-- / .main-navbar -->
                    <div id="main-content-wrapper" class="main-content m-auto">
                        <keep-alive>
                            <transition name="router">
                                <router-view></router-view>
                            </transition>
                        </keep-alive>
                    </div>
                </main>
                <div class="col-12 p-0">
                    <app-footer></app-footer>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import appMainSidebar from './components/main-sidebar';
    import AppFooter from './components/footer';
    import appMainNavbar from './components/main-navbar';
    import Radio from './components/content/audioPlayer'

    import {mapActions, mapGetters} from 'vuex'

    export default {
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
        },
        computed: {
            ...mapGetters('service', {
                documentTitle: "documentTitle"
            }),
            ...mapGetters('player', {
                playerStatus: 'status',
                station: 'station'
            })
        },
        methods:{
            ...mapActions('service', {
                setScrollTop: "setScrollTop",
                setDocumentTitle: "setDocumentTitle"
            })
        },
        watch: {
            playerStatus(){
                switch (this.playerStatus) {
                    case 'play' :this.setDocumentTitle('Play - ' + this.station.name);
                    break;
                    case 'pause' :this.setDocumentTitle('Pause - ' + this.station.name);
                    break;
                }
            }
        },
        mounted(){
            //Инициализируем расчет позиции нижней стороны окна для ленивой загрузки лого станций
          window.addEventListener('scroll', () => {
              this.setScrollTop(window.pageYOffset + window.innerHeight);
          })
        }
    }
</script>

<style>
    @import "/src/assets/styles/animate.css";

    [debug], [debug] *:not(g):not(path) {
        color:                 hsla(210, 100%, 100%, 0.9) !important;
        background:            hsla(210, 100%,  50%, 0.5) !important;
        outline: solid 0.25rem hsla(210, 100%, 100%, 0.5) !important;

        box-shadow: none !important;
        filter:     none !important;
    }

    .router-enter-active{
        /*animation: slideIn 0.5s;*/
        -webkit-animation-duration: 0.75s;
        animation-duration: 0.75s;
        -webkit-animation-name:fadeIn;
        animation-name: fadeIn;
        /*opacity: 1;*/
    }

    .router-enter-to{

    }

    .router-leave{
    }

    .router-leave-active{

        transition: opacity 0.5s cubic-bezier(.25,1,.1,1);
        opacity: 0;

        /*-webkit-animation-duration: 0.5s;*/
        /*animation-duration: 0.5s;*/
        /*-webkit-animation-name: fadeOut;*/
        /*animation-name: fadeOut;*/

        max-width: 1440px;



    }

    .router-leave-to{
        position: absolute;

    }


    .elements-enter-active{
        /*animation: slideIn 0.5s;*/
        -webkit-animation-duration: 0.75s;
        animation-duration: 0.75s;
        -webkit-animation-name: fadeIn;
        animation-name: fadeIn;
        /*opacity: 1;*/
    }

    .elements-leave-active{
        /*animation: slideOut 0.5s;*/
        /*-webkit-animation-duration: 0.5s;*/
        /*animation-duration: 0.5s;*/
        /*-webkit-animation-name: fadeOut;*/
        /*animation-name: fadeOut;*/

        transition: opacity 0.5s cubic-bezier(.25,1,.1,1);
        opacity: 0;

        max-width: 1440px;

    }

    .elements-leave-to{
        position: absolute;

    }


</style>
