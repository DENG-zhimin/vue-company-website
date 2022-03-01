<template>
  <div class="col column bg-grey-4 q-ma-sm showcase">
    <div
      class="col row justify-center content-center text-h4 text-bold text-red-8 q-my-md"
    >
      {{ $t('wonderful_artworks') }}
    </div>
    <div class="col-10 row justify-center">
      <router-link
        v-for="(num, index) in img_num"
        :key="index"
        tag="li"
        :to="img_path + num"
      >
        <div class="img-box q-ma-sm">
          <q-img :src="require('/src/assets/imgs/story' + num + '.png')" />
          <!-- <q-img :src="require(img.src + num + '.png')" /> 此处不能使用img.src变量，必须使用静态字符。  -->
        </div>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

const img_path = ref('/gallery/photo/');

export default defineComponent({
  setup() {
    return {
      img_path,
      img_num: ['1', '2', '3', '4', '5', '6', '7'],
    };
  },
});
</script>

<style lang="sass" scoped>
.showcase
  border-radius: 5px

.img-box
  height: 120px
  width: 120px

.img-box:hover
  // transform: translate(0, -5px)
  box-shadow: 0px 0px 5px 5px $grey-7
</style>
