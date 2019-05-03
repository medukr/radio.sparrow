<template>
    <audio width="300" height="48" controls="controls" class="nav-item" autoplay style="display:none">
        <source :src="radioSrc" type="audio/mpeg"/>
        Your browser does not support HTML5 audio. Please update your browser to view this media content.
    </audio>
</template>

<script>
    import {mapGetters} from 'vuex';
    import {mapActions} from 'vuex';

    export default {
        props: ['radioSrc'],
        data() {
            return {
                domAudio: Element
            }
        },
        computed: {
            ...mapGetters('player', {
                paused: 'paused',
            })
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

        },
        updated() {
            this.domAudio.load();
        },


    }
</script>

<style scoped>

</style>