<template>
        <audio width="300" height="48" controls="controls" class="nav-item">
            <source :src="current_radio_src" type="audio/mpeg"/>
            Your browser does not support HTML5 audio. Please update your browser to view this media content.
        </audio>
</template>

<script>
    export default {
        data(){
            return {
                // current_radio_src: 'http://live.audiospace.co/rdi451',
                current_radio_src: 'http://stream.radioskovoroda.com:8060/skovoroda_music',
                // current_radio_src: '',
            }
        }
    }
</script>

<style scoped>

</style>