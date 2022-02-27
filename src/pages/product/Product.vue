<template>
  <div class="text-grey-1 column items-center">
    <h1>{{ name }}</h1>
    <div class="row justify-center q-pa-sm q-gutter-x-sm full-width">
      <div class="col-5 row bg-teal-2">
        <!-- <q-img :src="require('/src/assets/imgs/' + img)" fit="fill" /> -->
        <div class="col-12 column bg-green-2 small-pic">
          <q-img :src="showImg" fit="scale-down" no-transition></q-img>
          <div
            class="super-mask full-height full-width"
            :style="'left: ' + -imgWidth + 'px'"
            @mousemove.stop="enlarge($event)"
            @mouseover.stop="showPic"
            @mouseleave.stop="hidePic"
          ></div>
          <div
            v-show="showMark"
            class="mask bg-grey-5"
            :style="'top: ' + markY + 'px; left: ' + (markX - imgWidth) + 'px'"
          ></div>
          <!-- <div
            class="full-height full-width big-pic"
            v-show="showMark"
            :style="'left: -' + (imgWidth + 110) + 'px;'"
          >
            <img :src="showImg" alt="Product Image" :style="bigImgStyle" />
          </div> -->
          <div
            class="big-pic full-height full-width"
            v-show="showMark"
            :style="'left: -' + (imgWidth + 94) + 'px;'"
          >
            <q-img
              :src="showImg"
              v-model:position="imgPos"
              height="400px"
              width="400px"
              fit="none"
            />
          </div>
        </div>
        <div class="row justify-center q-pa-sm bg-green-3 nav-box">
          <div
            v-for="(num, index) in img_num"
            :key="index"
            class="img-box q-ma-sm"
            @mouseover.stop="changePic(num)"
            @click="changePic(num)"
          >
            <q-img :src="require('/src/assets/imgs/story' + num + '.png')" />
          </div>
        </div>
      </div>
      <div class="col column bg-grey-3 text-grey-8 q-pl-md">
        <div class="col-12">
          <h2>Features</h2>
          <h5>Features</h5>
          <h5>Features</h5>
          <h5>Features</h5>
          <h5>Features</h5>
        </div>
      </div>
    </div>

    <div class="row justify-center q-pa-sm full-width text-grey-8">
      <q-card class="col-12">
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="details" label="Details" />
          <q-tab name="specs" label="Specs" />
          <q-tab name="docs" label="Documents" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="details">
            <div class="text-h3">Details</div>
            <h5>details</h5>
            <h5>details</h5>
            <h5>details</h5>
          </q-tab-panel>

          <q-tab-panel name="specs">
            <div class="text-h3">Specs</div>
            <h5>Specs</h5>
            <h5>Specs</h5>
            <h5>Specs</h5>
          </q-tab-panel>

          <q-tab-panel name="docs">
            <div class="text-h3">Documents</div>
            <h5>Documents (click to download)</h5>
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
    <div class="row justify-center q-pa-sm full-width bg-green-3 q-ma-md">
      <div class="row">
        <h2>related parts</h2>
      </div>
    </div>
    <div class="row justify-center q-pa-sm full-width bg-green-2">
      <div class="row">
        <h2>other intrested products</h2>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
declare function require(img: string): string; // declare require function
import { ref, defineComponent /* , onMounted, onBeforeMount  */ } from 'vue';
// import { useRoute /* , useRouter */ } from 'vue-router';

export default defineComponent({
  props: {
    id: {
      type: String,
      require,
    },
    img: {
      type: String,
      require,
    },
    name: {
      type: String,
      require,
    },
  },
  setup() {
    // const route = useRoute();
    // const router = useRouter();
    const tab = ref('details');
    const showImg = ref(require('/src/assets/imgs/gallery/photo1.jpg'));
    const img_num = ['1', '2', '3', '4', '5', '6' /* , '7' */];

    const imgPos = ref('');

    // mark box x position
    const markX = ref(0);
    const markY = ref(0);

    const showMark = ref(false);

    // small img width
    const imgWidth = ref(0);
    type ImgIf = HTMLImageElement;

    // extends Event type to access pointer position
    type mouseEvent = Event & {
      offsetX: number;
      offsetY: number;
      target: ImgIf;
    };

    // show up the large pic and mark box
    const showPic = () => {
      showMark.value = true;
    };

    // hide the large pic and mark box
    const hidePic = () => {
      showMark.value = false;
    };

    // enlarge pic
    const enlarge = (e: mouseEvent) => {
      // used to determain the left position of the large img.
      // the size of small pic box (super mask)
      imgWidth.value = e.target.offsetWidth;
      const imgheight = ref(e.target.offsetHeight);

      // get mask position, mask length = 100, offset 50
      markX.value = e.offsetX - imgWidth.value - 50;
      if (markX.value < -imgWidth.value) markX.value = -imgWidth.value;
      markY.value = e.offsetY - 50;
      if (markY.value < 0) markY.value = 0;

      // get position percent ratio
      imgPos.value =
        ((e.offsetX / imgWidth.value) * 100).toFixed().toString() +
        '% ' +
        ((e.offsetY / imgheight.value) * 100).toFixed().toString() +
        '%';

      // console.log(imgPos.value);
    };
    // change the display img
    const changePic = (num: string) => {
      showImg.value = require('/src/assets/imgs/gallery/photo' + num + '.jpg');
    };
    return {
      showImg,
      tab,
      img_num,
      changePic,
      enlarge,
      showPic,
      hidePic,
      showMark,
      markX,
      markY,
      imgWidth,
      imgPos,
    };
  },
});
</script>
<style lang="sass" scoped>
.img-box
  height: 60px
  width: 60px

.nav-box
  overflow: scroll

.nav-box .q-img:hover
  cursor: pointer

.small-pic
  min-height: 300px
  height: 400px

.big-pic
  // max-height: 400px
  z-index: 999
  position: relative
  top: 0px

.mask
  width: 100px
  height: 100px
  z-index: 9900
  position: relative
  opacity: 0.5
  float: left

.super-mask
  top: 0px
  z-index: 9999
  position: relative
</style>
