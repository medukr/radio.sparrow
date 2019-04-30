<template>
    <div class="main-navbar bg-white sticky-top col-lg-6 col-sm-6">
        <div class="main-navbar sticky-top bg-white">
            <!-- Main Navbar -->
            <nav class="navbar align-items-stretch navbar-light flex-md-nowrap p-0">
                <form action="#" class="main-navbar__search w-100 d-none d-md-flex d-lg-flex">
                    <div class="input-group input-group-seamless ml-3">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                <i class="fas fa-search"></i>
                            </div>
                        </div>
                        <input class="navbar-search form-control" type="text" placeholder="Search for something..." aria-label="Search"> </div>
                </form>
                <div class="border-left flex-row navbar-nav">
                <app-audio-player></app-audio-player>
                </div>
            </nav>
        </div>
    </div>

</template>

<script>
    import appAudioPlayer from './content/audioPlayer'
    export default {
            components: {
                appAudioPlayer
            }
    }
</script>

<style scoped>

</style>