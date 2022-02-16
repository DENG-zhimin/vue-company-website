<template>
  <q-page class="collumn items-center justify-evenly">
    <div class="q-pa-md">
      <q-carousel
        swipeable
        animated
        v-model="slide"
        :autoplay="autoplay"
        ref="carousel"
        infinite
      >
        <q-carousel-slide
          v-for="(slide, index) in sliders"
          :key="index"
          :name="index"
          :img-src="slide"
        />

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
              @click="$refs.carousel.previous()"
            />
            <q-btn
              push
              round
              dense
              color="orange"
              text-color="black"
              icon="arrow_right"
              @click="$refs.carousel.next()"
            />
          </q-carousel-control>
        </template>
      </q-carousel>
    </div>
  </q-page>
</template>

<script lang="ts">
// import { Todo, Meta } from 'components/models';
import { defineComponent, ref } from 'vue';
// import { info } from 'boot/msg';
const sliders = [
  'https://www.aoi-uw.com/media/wysiwyg/banner/banner-3.jpg',
  'https://www.aoi-uw.com/media/wysiwyg/banner/banner-4.jpg',
  'https://www.aoi-uw.com/media/wysiwyg/Q1_1920X600.jpg',
  'https://www.aoi-uw.com/media/wysiwyg/UWL-03_1920X600_.jpg',
];
export default defineComponent({
  name: 'PageIndex',
  components: {},
  setup() {
    return {
      slide: ref(1),
      autoplay: ref(false),
      sliders,
    };
  },
});
</script>
