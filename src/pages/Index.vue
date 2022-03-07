<template>
  <q-page class="items-center justify-evenly bg-dark q-pb-md">
    <div id="carousel" class="my-carousel">
      <q-carousel
        swipeable
        animated
        v-model="slide"
        :autoplay="autoplay"
        ref="topCarousel"
        infinite
        height="500px"
        navigation
        transition-duration="300"
        arrows
        control-color="white"
      >
        <q-carousel-slide
          v-for="(slider, index) in sliders"
          :key="index"
          :name="index"
          :img-src="slider.img_src"
          @mouseover.stop="autoplay=0"
          @mouseleave.stop="autoplay='2000'"
          @click.stop="goCate(slider.cate)"
        >
        </q-carousel-slide>
      </q-carousel>
    </div>
    <hot-prod />
    <prod-cate />
    <videocase />
    <showcase />
    <partners />
  </q-page>
</template>

<script lang="ts">
declare function require(img: string): string; // declare require function
import hotProd from 'src/components/hotProd.vue';
import prodCate from 'src/components/prodCate.vue';
import showcase from 'src/components/Showcase.vue';
import Videocase from 'src/components/Videocase.vue';
import partners from 'src/components/Partners.vue';
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router'

const banner1 = require('src/assets/imgs/banner-1.jpg');
const banner2 = require('src/assets/imgs/banner-2.jpg');
const banner3 = require('src/assets/imgs/banner-3.jpg');
const banner4 = require('src/assets/imgs/banner-4.jpg');

const sliders = [
  {
    img_src: banner1,
    cate: 'strobes'
  },
  {
    img_src: banner2,
    cate: 'lighting'
  },
  {
    img_src: banner3,
    cate: 'lens'
  },
  {
    img_src: banner4,
    cate: 'm_housing'
  },
];
export default defineComponent({
  name: 'PageIndex',
  components: { hotProd, prodCate, showcase, Videocase, partners },
  methods: {},
  mounted() {
    // console.log(ba1);
  },
  setup() {
    const router = useRouter();

    // sliders autoplay set to be false
    const autoplay = ref(0)

    // open sliders autoplay after 5 seconds.
    setTimeout(()=>{
      autoplay.value = 2000;
    }, 5000)
    
    const goCate = (cate: string): void => {
      router.push({
        name: 'prodCate',
        params: {
          cate: cate,
        }
      }).catch(e=>{
        console.log(e)
      })
    };

    return {
      slide: ref(0),
      autoplay,
      sliders,
      goCate,
    };
  },
});
</script>

<style lang="sass" scoped>
.my-carousel .q-carousel__slide:hover
  cursor: pointer

// no effect
// #carousel .q-carousel__navigation-inner div
  // justify-content: end  !important
</style>
