<template>
    <audio width="300" height="48" controls="controls" class="nav-item" autoplay>
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
        props: ['current'],
        data() {
            return {
                domAudio: Element
            }
        },
        computed: {
            ...mapGetters('player', {
                paused: 'paused',
            }),
            src(){
                // return (this.current != null) ? this.current.streams[0].stream : '';
                return  '';
            },
            type(){
                // return (this.current != null) ? this.current.streams[0].content_type : '';
                return  '';
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

        },
        updated() {

            this.domAudio.load();
        },


    }
</script>

<style scoped>

</style>