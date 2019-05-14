<template>
    <div class="main-content-container container-fluid px-4">
        <!-- Page Header -->
        <app-page-header
                :title="title"></app-page-header>
        <!-- End Page Header -->
        <template v-if="station !== null">
            <div class="mb-5">
                <app-station-single-card
                        :onAirSongName="onAirSongName"
                        :onAirRadioStationName="onAirRadioStationName"
                        :onAirTrackImageUrl="onAirTrackImageUrl"
                        :onAirRadioStationImage="onAirRadioStationImage"
                        :onAirCategories="onAirCategories"></app-station-single-card>
            </div>
            <app-station-list
                    title="Похожее"
                    :stations="similarStations"
                    @selectedRadio="onSelect"></app-station-list>
        </template>
        <app-css-load v-else></app-css-load>
    </div>

</template>

<script>
    import AppPageHeader from './content/pageHeader'
    import AppStationSingleCard from './content/stationSingleCard'
    import AppCssLoad from './content/cssLoad';
    import AppStationList from './content/stationList'

    import {mapGetters, mapActions} from 'vuex'

    export default {
        components: {
            AppStationSingleCard,
            AppPageHeader,
            AppCssLoad,
            AppStationList
        },
        data(){
            return {
                title: 'Сейчас играет',
                onFocusCallback : () => {
                    //Пользователь ранее покинул окно, и отработал ивент blur, который должен был
                    //удалить таймер. Если по какой-либо причине таймер не удалился, повторяем
                    //удаление таймера, так как тот таймер уже не нужен, и будет лишним
                    this.setUpdateSongHistoryTimer(
                        clearInterval(this.service.updateSongHistoryTimer)
                    );

                    //обновляем список треков сразу после возвра
                    this.updateSongHistory();
                    console.log('--->', 'focus UpdateSongHistory');

                    //список треков обновлен, устанавливаем новый таймер обновления списка треков
                    this.setUpdateSongHistoryTimer(
                        setInterval(() => {
                            console.log('--->', 'focus interval UpdateSongHistory');
                            this.updateSongHistory();
                        }, 5000)
                    );
                },
                onBlurCallback : () => {
                    this.setUpdateSongHistoryTimer(
                        clearInterval(this.service.updateSongHistoryTimer));
                    console.log('--->', 'blur UpdateSongHistory');
                }

            }
        },
        computed : {
            ...mapGetters('player', {
                station: 'station',
                songHistory: "songHistory",
                similarStations: "similarStations",
                service: "service"
            }),
            onAirSongName(){
                if (this.station !== null && this.songHistory !== null) {
                    return this.songHistory[0].title + ' : ' + this.songHistory[0].name
                }
               return 'no name'
            },
            onAirRadioStationName(){
                return this.station !== null
                    ? this.station.name
                    : 'no station'
            },
            onAirTrackImageUrl(){
                if (this.station !== null && this.songHistory !== null) {
                    if ( this.songHistory[0].info !== null && this.songHistory[0].info.image.url !== null)
                        return this.songHistory[0].info.image.url
                }
                return '/src/assets/images/radio_logo/no-track-image.png'
            },
            onAirRadioStationImage(){
                return (this.station !== null && this.station.image.url !== null)
                    ? this.station.image.url
                    : '/src/assets/images/radio_logo/noimage.png'
            },
            onAirCategories(){
                return this.station !== null
                    ? this.station.categories[0].title
                    : 'no category'
            },
            id(){
                return this.$route.params.id
            },
        },
        methods: {
            ...mapActions('player',{
                loadCurrentStation: 'loadCurrentStation',
                loadSongHistory: 'loadSongHistory',
                setUpdateSongHistoryTimer: "setUpdateSongHistoryTimer"
            }),
            onSelect(selectedStation) {
                if (this.station === null || selectedStation.id !== this.station.id) this.loadCurrentStation(selectedStation.id);
            },
            updateSongHistory(){
                if (this.station !== null) this.loadSongHistory();
            },
            enableUpdatingSongHistory(){

                // в момент срабатывания хука mount запрос на историю треков уже отправлен
                //поэтому только устанавливаем таймер на обновление
                this.setUpdateSongHistoryTimer(
                    setInterval(() => {
                        console.log('--->', 'mount interval UpdateSongHistory');
                        this.updateSongHistory();
                    }, 5000)
                );

                //Пользователь покинул окно, в обновлении списка треков нет необходимости
                //поэтому, удаляем таймер обновления списка треков
                window.addEventListener('blur', this.onBlurCallback);

                //момент возвращения фокуса на окно
                window.addEventListener('focus', this.onFocusCallback);

            },
            disableUpdatingSongHistory(){

                window.removeEventListener('focus', this.onFocusCallback);
                window.removeEventListener('blur', this.onBlurCallback);

                this.setUpdateSongHistoryTimer(
                    clearInterval(this.service.updateSongHistoryTimer));
            }
        },

        mounted() {
            if (this.station === null || this.id !== this.station.id)
                this.loadCurrentStation(this.id);

            this.enableUpdatingSongHistory();
        },

        beforeDestroy() {
            this.disableUpdatingSongHistory();

        }
    }
</script>

<style scoped>

</style>