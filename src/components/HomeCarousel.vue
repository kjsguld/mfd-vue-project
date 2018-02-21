<template>
    <div class="container--fluid">
        <carousel class="" :perPage="1">
            <slide>
                <img src="/static/img/home/header1.jpg" alt="header">
            </slide>
            <slide>
                <img src="/static/img/home/header2.jpg" alt="header">
            </slide>
            <slide>
                <img src="/static/img/home/header3.jpg" alt="header">
            </slide>
        </carousel>    
        <div class="clearfix"></div>
    </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
  name: 'home-carousel',
  components: {
    Carousel,
    Slide
  }
};
</script>

<style lang="scss">
//NOT SCOPED TO AFFECT CAROUSEL

.VueCarousel{
    .VueCarousel-wrapper{
        .VueCarousel-slide img{
            width: 100%;
        }
    }

    .VueCarousel-pagination{
        position: absolute;
        bottom: 1rem; 
    }
    
}
.clearfix{
    content: "";
    clear: both;
}

</style>

