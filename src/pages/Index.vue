<template>
  <q-page class="items-center justify-evenly bg-dark q-pb-md">
    <div id="carousel" class="">
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
          style="padding: 30px 130px"
          @mouseover.stop="autoplay=0"
          @mouseleave.stop="autoplay='2000'"
        >
          <router-link :to="{ name: 'prodCate', params: { cate: slider.cate } }"
            ><div class="full-width full-height"></div
          ></router-link>
        </q-carousel-slide>
<!-- 
        <template v-slot:control>
          <q-carousel-control
            position="top-right"
            :offset="[18, 18]"
            class="text-white rounded-borders"
            style="background: rgba(0, 0, 0, 0.3); padding: 4px 8px"
          >
            <q-toggle
              dense
              dark
              color="orange"
              v-model="autoplay"
              label="Auto Play"
            />
          </q-carousel-control>

          <q-carousel-control
            position="top-right"
            :offset="[18, 18]"
            class="q-gutter-xs"
          >
            <q-btn
              push
              round
              dense
              color="orange"
              text-color="black"
              icon="arrow_left"
              @click="$refs.topCarousel.previous()"
            />
            <q-btn
              push
              round
              dense
              color="orange"
              text-color="black"
              icon="arrow_right"
              @click="$refs.topCarousel.next()"
              class="q-ml-lg"
            />
          </q-carousel-control>
        </template>
         -->
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
    
    // sliders autoplay set to be false
    const autoplay = ref(0)

    // open sliders autoplay after 5 seconds.
    setTimeout(()=>{
      autoplay.value = 2000;
    }, 5000)
    
    return {
      slide: ref(0),
      autoplay,
      sliders,
    };
  },
});
</script>

<style lang="sass" scoped>
</style>
