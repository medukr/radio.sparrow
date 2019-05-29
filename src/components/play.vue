<template>
    <div class="main-content-container container-fluid px-4">
        <!-- Page Header -->
        <app-page-header
                :title="title"></app-page-header>
        <!-- End Page Header -->
        <template v-if="!!(station)">
            <div class="mb-5">
                <app-station-single-card
                        :onAirSongName="onAirSongName"
                        :onAirRadioStationName="onAirRadioStationName"
                        :onAirTrackImageUrl="onAirTrackImageUrl"
                        :onAirRadioStationImage="onAirRadioStationImage"
                        :onAirCategories="onAirCategories"
                        :onAirStationCountryName="onAirStationCountryName"></app-station-single-card>
            </div>
            <app-station-list
                    title="Похожее"
                    :stations="similarStations"
                    @selectedRadio="onSelect"
           ></app-station-list>
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

                    //обновляем список треков сразу после возврата пользователя на страницу
                    this.updateSongHistory();
                    console.log('--->', 'focus UpdateSongHistory');

                    //список треков обновлен выше, устанавливаем новый таймер обновления списка треков
                    this.setUpdateSongHistoryTimer(
                        setInterval(() => {
                            console.log('--->', 'focus interval UpdateSongHistory');
                            this.updateSongHistory();
                        }, this.timeInterval)
                    );
                },
                onBlurCallback : () => {
                    this.setUpdateSongHistoryTimer(
                        clearInterval(this.service.updateSongHistoryTimer));
                    console.log('--->', 'blur UpdateSongHistory');
                },
                timeInterval: 120 * 1000,
            }
        },
        computed : {
            ...mapGetters('player', {
                station: 'station',
                songHistory: "songHistory",
                similarStations: "similarStations",
                service: "service"
            }),
            ...mapGetters('data',{
                countries: "countries",

            }),
            onAirSongName(){
                if (this.station !== null && this.songHistory !== null) {
                    return this.songHistory[0].name + ' - ' + this.songHistory[0].title
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
                    ? this.station.categories
                    : 'no category'
            },
            onAirStationCountryName: function () {

                let country = '';
                if (this.station !== null) {
                    country = this.station.country;
                    if (this.countries !== null) {
                        country = this.countries.filter((element) => {
                            return element.country_code === this.station.country
                        })
                    }

                }

                return (country[0].name !== undefined) ? country[0].name : country;

                // return 'country name'

                // if (this.station !== null) {
                //     this.countryService = this.station.country;
                //     if (this.countries !== null) {
                //         this.getCountryName(this.station.country).then(data => {
                //             this.countryService = data;
                //         });
                //
                //     }
                // }
                // // console.log('--->',this.countryService);
                // return this.countryService;
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
            ...mapActions('data',{
                loadCountries: "loadCountries",
                getCountryName: 'getCountryName'

            }),
            onSelect(selectedStation) {
                if (this.station === null || selectedStation.id !== this.station.id) this.loadCurrentStation(selectedStation.id);
            },
            onMore(){

            },
            updateSongHistory(){
                if (this.station !== null) this.loadSongHistory(this.station.id);
            },
            enableUpdatingSongHistory(){

                // в момент срабатывания хука mount запрос на историю треков уже отправлен
                //поэтому только устанавливаем таймер на обновление
                this.setUpdateSongHistoryTimer(
                    setInterval(() => {
                        console.log('--->', 'mount interval UpdateSongHistory');
                        this.updateSongHistory();
                    }, this.timeInterval)
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

            this.loadCountries();
        },

        beforeDestroy() {
            this.disableUpdatingSongHistory();

        }
    }
</script>

<style scoped>

</style>