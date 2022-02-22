<template>
  <q-page class="items-center justify-evenly">
    <!-- <div class="column"> -->
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
            style="padding: 30px 130px;"
          >
            <router-link :to="slide.path" ><div class="full-width full-height"></div></router-link>
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
    <myfooter />
    <!-- </div> -->
  </q-page>
</template>

<script lang="ts">
import hotProd from 'src/components/hotProd.vue'
import prodCate from 'src/components/prodCate.vue'
import myfooter from 'src/components/footer.vue'
import { defineComponent, ref } from 'vue';

const sliders = [
  {
    img_src:  'https://www.aoi-uw.com/media/wysiwyg/banner/banner-3.jpg',
    path: '/products/camera_housing/index',
  },
  {
    img_src:  'https://www.aoi-uw.com/media/wysiwyg/banner/banner-4.jpg',
    path: '/products/camera_housing/index',
  },
  {
    img_src:  'https://www.aoi-uw.com/media/wysiwyg/Q1_1920X600.jpg',
    path: '/products/camera_housing/index',
  },
  {
    img_src:  'https://www.aoi-uw.com/media/wysiwyg/UWL-03_1920X600_.jpg',
    path: '/products/camera_housing/index',
  },
 ];
export default defineComponent({
  name: 'PageIndex',
  components: {hotProd, prodCate, myfooter},
  methods: { },
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

<style lang="sass" scoped>

</style>
