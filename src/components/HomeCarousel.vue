<template>
    <div class="container--fluid">
        <carousel class="" :perPage="1">
            <slide>
                <img src="../assets/img/home/header.jpg" alt="">
            </slide>
            <slide>
                Slide 2 Content
            </slide>
            <slide>
                Slide 3 Content
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

