<template>
    <aside class="main-sidebar col-12 col-md-3 col-lg-2 px-0">



        <div class="main-navbar">
            <nav class="navbar align-items-stretch navbar-light bg-white flex-md-nowrap border-bottom p-0">
                <router-link
                        key="playlist_play"
                        :to="{name: 'play'}"
                        tag="a"
                        class="navbar-brand w-100 mr-0"
                        style="line-height: 25px;"
                        >
                    <div class="d-table m-auto">
                        <i id="main-logo" class="material-icons d-inline-block align-top mr-1" style="max-width: 25px;">radio</i>
                        <span class="d-none d-md-inline ml-1">Radio.Sparrow</span>
                    </div>
                </router-link>
                <a class="toggle-sidebar d-sm-inline d-md-none d-lg-none">
                    <i class="material-icons">&#xE5C4;</i>
                </a>
            </nav>
        </div>





        <form action="#" class="main-sidebar__search w-100 border-right d-sm-flex d-md-none d-lg-none">
            <div class="input-group input-group-seamless ml-3">
                <div class="input-group-prepend">
                    <div class="input-group-text">
                        <i class="fas fa-search"></i>
                    </div>
                </div>
                <input class="navbar-search form-control" type="text" placeholder="Search for something..." aria-label="Search"> </div>
        </form>


        <div class="nav-wrapper">
            <ul class="nav flex-column">
                <li class="nav-item">
                    <router-link
                            key="playlist_play"
                            :to="{name: 'play'}"
                            tag="a"
                            class="nav-link"
                            active-class="active">
                            <i class="material-icons">playlist_play</i>
                            <span>Playing Now</span>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link
                            key="stars"
                            :to="{name: 'favorites'}"
                            tag="a"
                            class="nav-link"
                            active-class="active">
                        <i class="material-icons">stars</i>
                        <span>Favorites</span>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link
                            key="library_books"
                            :to="{name: 'categories'}"
                            tag="a"
                            class="nav-link"
                            active-class="active">
                        <i class="material-icons">library_books</i>
                        <span>Categories</span>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link
                            key="queue_music"
                            :to="{name: 'list'}"
                            tag="a"
                            class="nav-link"
                            active-class="active">
                        <i class="material-icons">queue_music</i>
                        <span>All Stations</span>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link
                            key="history"
                            :to="{name: 'history'}"
                            tag="a"
                            class="nav-link"
                            active-class="active">
                        <i class="material-icons">history</i>
                        <span>History</span>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link
                            key="playlist_add"
                            :to="{name: 'playlist_add'}"
                            tag="a"
                            class="nav-link"
                            active-class="active">
                        <i class="material-icons">playlist_add</i>
                        <span>Add New Radio</span>
                    </router-link>
                </li>
            </ul>
        </div>
    </aside>
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