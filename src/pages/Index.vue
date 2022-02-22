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
        height="200px"
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
    <div id="hot-prod" class="q-pa-sm">
      <q-card class="prod-card bg-teal-5" flat bordered rounded>
        <q-card-section horizontal class="row justify-center">
          <q-card-section
            class="q-pt-xs col column justify-center items-center"
          >
            <div style="width: 55%">
              <div class="text-h3 text-bold text-yellow-6">Octopus Housing</div>
              <div class="text-h4 text-bold q-mt-sm q-mb-xs">
                Intact Protection
              </div>
              <q-badge label="Unique style" color="orange" rounded />
              <div class="text-caption text-h6 text-bold text-grey-3">
                Your ideal and special underwater photography equipment! Sound
                protection, Leaking warning and Handy operations.
              </div>
            </div>
            <q-btn
              bordered
              class="shadow-8 q-mt-lg"
              @click.stop="add2Cart('A Camera Housing')"
            >
              Add to Cart
            </q-btn>
          </q-card-section>

          <q-card-section class="col-5">
            <router-link to="/products/camera_housing/index">
              <q-img
                class="rounded-borders prod-img"
                src="~src/assets/imgs/aoi_housing_octopus.png"
              />
            </router-link>
          </q-card-section>
        </q-card-section>
      </q-card>
    </div>
    <div class="q-pa-sm">
      <div class="row q-gutter-x-md cate-block " >
        <div class="col row bg-green-2 ">
          <div class="col column justify-center text-h4 text-bold items-center cate-desc">
            Camera Housing
          </div>
          <div class="col-6">
            <router-link to="/products/camera_housing/index">
              <q-img src="~src/assets/imgs/aoi_uh-epl10-gry.png" />
            </router-link>
          </div>
        </div>
        <div class="col column q-gutter-y-md">
          <div class="col bg-cyan-2 ">
            <div class="row col-6 ">
              <div class="col-5 column justify-center text-h4 text-bold items-center cate-desc">
                Strobe
              </div>
              <div class="col-7">
                <router-link to="/products/camera_housing/index">
                  <q-img src="~src/assets/imgs/aoi_strobe.png"
                    height="150px"
                    fit="scale-down"
                  />
                </router-link>
              </div>
            </div>
          </div>
          <div class="col row q-gutter-x-md">
            <div class="col bg-cyan-2 column justify-center">
              <div class="row col-6 content-center">
                <div class="col-6 column justify-center text-h4 text-bold items-center cate-desc">
                  Strobe
                </div>
                <div class="col-6">
                  <router-link to="/products/camera_housing/index">
                    <q-img src="~src/assets/imgs/aoi_port.png"
                      height="150px"
                      fit="scale-down"
                    />
                  </router-link>
                </div>
              </div>
            </div>
            <div class="col bg-cyan-2 column justify-center ">
              <div class="row contents-center ">
                <div class="col-6 row  content-center  text-h4 text-bold  cate-desc">
                  Accessories
                </div>
                <div class="col-6 q-pa-sm">
                  <router-link to="/products/camera_housing/index">
                    <q-img src="~src/assets/imgs/aoi_bracket.png" />
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- </div> -->
  </q-page>
</template>

<script lang="ts">
// import { Todo, Meta } from 'components/models';
import { defineComponent, ref } from 'vue';
import * as msg from 'src/boot/msg';
const sliders = [
  'https://www.aoi-uw.com/media/wysiwyg/banner/banner-3.jpg',
  'https://www.aoi-uw.com/media/wysiwyg/banner/banner-4.jpg',
  'https://www.aoi-uw.com/media/wysiwyg/Q1_1920X600.jpg',
  'https://www.aoi-uw.com/media/wysiwyg/UWL-03_1920X600_.jpg',
];
export default defineComponent({
  name: 'PageIndex',
  components: {},
  methods: {
    /* topCarouselAct(slide: string) {
      if (slide === 'previous') {
        (this: any).$refs.topCarousel.previous();
      } else {
        (this: any).$refs.topCarousel.next();
      }
    }, */
  },
  setup() {
    // const info = msg.info;
    const add2Cart = (prod: string) => {
      msg.info(prod, true);
    };
    return {
      slide: ref(1),
      autoplay: ref(true),
      sliders,
      add2Cart,
    };
  },
});
</script>

<style lang="sass">
$hot_prod_ht: 400px
.prod-img
  // max-height: 100%
  max-height: $hot_prod_ht
  max-width: 100%
  margin: Auto
#hot-prod
  // max-height: $hot_prod_ht
  height: fit-content

.cate-block
  height: 350px

.cate-desc
  padding-left: 10px 
  word-wrap: break-word
  word-break: break-all
</style>
