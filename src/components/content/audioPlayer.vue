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
                station: 'station',
                status: "status"
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

            pressSpace(){
                document.addEventListener('keydown', (e) => {

                    if (e.code === 'Space' && this.status !== '' && this.status !== 'loading'){
                        e.preventDefault();
                        this.domAudio.paused ? this.domAudio.play() : this.domAudio.pause();
                    }

                });
            }

        },
        mounted() {
            this.domAudio = this.$vnode.elm;

            this.domAudio.autoplay = true;

            this.domAudio.addEventListener('pause', () => {
                this.setStatus('pause')
            });

            this.domAudio.addEventListener('playing', () => {
                this.setStatus('play');
            });

            this.domAudio.addEventListener('loadstart', () => {
                this.setStatus('loading')
            });

            this.domAudio.addEventListener('error', () => {
                this.setStatus('error')
            });

            this.pressSpace();


            //Есть необходимость отлавливать ошибки соединения плейра, и обрабатывать их
            // window.addEventListener('connect_error', () => {
            //    console.log('--->', 'window.onabort');
            // });
            //
            // this.domAudio.addEventListener('connect_error', () => {
            //     console.log('--->', 222222);
            //     this.setStatus('error')
            // });
            //
            // this.domAudio.addEventListener('stalled', () => {
            //     this.setStatus('loading')
            // });


        },
        updated() {
            this.domAudio.load();
        },


    }
</script>

<style scoped>

</style>