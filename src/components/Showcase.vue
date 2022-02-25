<template>
    
    <div class="col column bg-grey-4 q-ma-sm showcase">
      <div class="col row justify-center content-center text-h4 text-bold text-accent q-my-md">
        Best Stories
      </div>
      <div class="col-10 row justify-center ">
        <router-link v-for="(num, index) in img_num" :key="index" tag="li" :to="img.path + num">
          <div class="img-box q-ma-sm">
            <q-img :src="require('/src/assets/imgs/story' + num + '.png')"></q-img>
          </div>
        </router-link>
        
      </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

const img={
  src: '/src/assets/imgs/story',
  path: '/gallery/photo/'
}

export default defineComponent({
  setup() {
    return {
      img,
      img_num: ['1','2','3','4','5','6','7']
    }
  }
})

</script>

<style lang="sass" scoped>
.showcase
  border-radius: 5px

.img-box
  height: 120px
  width: 120px

.img-box:hover
  transform: translate(0, -5px)
  box-shadow: 10px 8px 10px $grey-7

</style>