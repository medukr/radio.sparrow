<template>
        <button @click="scrollToTop" id="scrollToTop" title="Go to top">
            <i class="fa fa-angle-double-up"></i>
        </button>
</template>

<script>
    export default {
        name: "scrollToTop",
        data(){
            return {
                heightToShow: 1000, //px
                scrollTo: 0, //px
                scrollTime: 100, //ms
                scrollStep: 20, //px
            }
        },
        methods: {
            scrollToTop() {
                let scrollBegin = window.scrollY;

                let iterations = Math.floor(scrollBegin / this.scrollStep);
                let intervalTime = this.scrollTime / iterations; //ms
                let sharpStep = scrollBegin / iterations; //px

                this.animateScrollToTop({interval: intervalTime, step: sharpStep});

            },
            animateScrollToTop(data){
                if (document.body.scrollTop > this.scrollTo || document.documentElement.scrollTop > this.scrollTo)
                    setTimeout(() => {
                        window.scrollTo(0, window.scrollY - data.step);
                        this.animateScrollToTop({interval: data.interval, step:  data.step});
                    }, data.interval)
            }
        },
        mounted(){
            document.addEventListener('scroll', () => {
                if (document.body.scrollTop > this.heightToShow || document.documentElement.scrollTop > this.heightToShow) {
                   this.$el.style.opacity = 1;
                   this.$el.style.right = '1rem';
                } else {
                    this.$el.style.right = '-5rem';
                    this.$el.style.opacity = 0;
                }
            });

        }
    }
</script>

<style scoped>
    #scrollToTop {
        opacity: 0;
        position: fixed;
        z-index: 99;

        bottom: 1rem;
        right: 1rem;

        width: 4rem;
        height: 4rem;

        outline: none;
        cursor: pointer;
        border: 0;
        border-radius: 2rem;
        background: #00b8d8;
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
        box-sizing: border-box;
        font-size: 1.5rem;

        transition: background-color 0.15s, opacity 0.3s cubic-bezier(.25,.8,.25,1), right .5s cubic-bezier(.35,.35,.15,1);
        -webkit-transition: background-color 0.15s, opacity 0.3s cubic-bezier(.25,.8,.25,1), right .5s cubic-bezier(.35,.35,.15,1);

    }

    #scrollToTop:hover {
        background-color: #8445f7;
    }
</style>