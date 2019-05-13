<template>
    <audio width="300" height="48" controls="controls" class="nav-item" autoplay style="display: none">
        <source
                :src="src"
                :type="type"/>
        Your browser does not support HTML5 audio. Please update your browser to view this media content.
    </audio>
</template>

<script>
    import {mapGetters} from 'vuex';
    import {mapActions} from 'vuex';

    export default {
        data() {
            return {
                domAudio: null
            }
        },
        computed: {
            ...mapGetters('player', {
                paused: 'paused',
                station: 'station'
            }),
            src(){
                return this.station !== null ?  this.station.streams[0].stream : null;
            },
            type(){
                return this.station !== null ?  this.station.streams[0].content_type : null;
            }

        },
        methods: {
            ...mapActions('player', {
                setStatus: 'setStatus',
                setDomAudio: 'setDomAudio',
                setPaused: 'setPaused'
            }),
        },
        mounted() {
            this.domAudio = this.$vnode.elm;

            this.domAudio.onpause = () => {
                this.setStatus('pause')
            };

            this.domAudio.onplaying = () =>  {
                this.setStatus('play')
            };

            this.domAudio.onloadstart = () => {
                this.setStatus('loading')
            };
            this.domAudio.onerror = () => {
                this.setStatus('error')
            };

            this.domAudio.onstalled = () => {
                this.setStatus('loading')
            };


            this.domAudio.autoplay = true;

        },
        updated() {
            this.domAudio.load();
        },


    }
</script>

<style scoped>

</style>