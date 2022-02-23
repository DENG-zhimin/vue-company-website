<template>
  <q-page class="items-center justify-evenly">
    <div id="carousel" class="">
      <q-carousel
        swipeable
        animated
        v-model="slide"
        :autoplay="autoplay"
        ref="topCarousel"
        infinite
        height="300px"
      >
        <q-carousel-slide
          v-for="(slide, index) in sliders"
          :key="index"
          :name="index"
          :img-src="slide.img_src"
          style="padding: 30px 130px"
        >
          <router-link :to="slide.path"
            ><div class="full-width full-height"></div
          ></router-link>
        </q-carousel-slide>
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
            position="bottom-right"
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
            />
          </q-carousel-control>
        </template>
      </q-carousel>
    </div>
    <hot-prod />
    <prod-cate />
    <showcase />
  </q-page>
</template>

<script lang="ts">
declare function require(img: string): string; // declare require function
import hotProd from 'src/components/hotProd.vue';
import prodCate from 'src/components/prodCate.vue';
import showcase from 'src/components/Showcase.vue';
import { defineComponent, ref } from 'vue';

const banner1 = require('src/assets/imgs/banner-1.jpg');
const banner2 = require('src/assets/imgs/banner-2.jpg');
const banner3 = require('src/assets/imgs/banner-3.jpg');
const banner4 = require('src/assets/imgs/banner-4.jpg');

const sliders = [
  {
    img_src: banner1,
    path: '/products/camera_housing/index',
  },
  {
    img_src: banner2,
    path: '/products/camera_housing/index',
  },
  {
    img_src: banner3,
    path: '/products/camera_housing/index',
  },
  {
    img_src: banner4,
    path: '/products/camera_housing/index',
  },
];
export default defineComponent({
  name: 'PageIndex',
  components: { hotProd, prodCate, showcase },
  methods: {},
  mounted() {
    // console.log(ba1);
  },
  setup() {
    // const info = msg.info;

    return {
      slide: ref(1),
      autoplay: ref(true),
      sliders,
    };
  },
});
</script>

<style lang="sass" scoped></style>
