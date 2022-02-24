<template>
  <div class="row q-gutter-x-md showcase q-pa-sm">
    <div class="col column bg-purple-2">
      <div class="col row text-h5 text-bold justify-evenly">
        <div class="col row content-center justify-center ">Explore Splendid Moments!</div>
      </div>
      <div class="col-10 row justify-center content-center ">
        <video 
          src="/demo.mp4" 
          class="full-height full-width"
          autoplay
          :muted="muted"
          controls
          loop
        ></video>
      </div>
    </div>

    <div class="col column bg-orange-1">
      <div class="col row justify-center content-center text-h4 text-bold text-accent">
        Best Stories
      </div>
      <div class="col-10 row  ">
        <q-item clickable to="/gallery/photo/1" class="q-pa-none q-ma-none" >
          <q-img src="~/src/assets/imgs/story1.png" width="120px" height="120px" class="q-ma-md shadow-8" />
        </q-item>
        <q-item clickable to="/gallery/photo/2" class="q-pa-none q-ma-none" >
          <q-img src="~/src/assets/imgs/story2.png" width="120px" height="120px" class="q-ma-md shadow-8" />
        </q-item>
        <q-item clickable to="/gallery/photo/3" class="q-pa-none q-ma-none" >
          <q-img src="~/src/assets/imgs/story3.png" width="120px" height="120px" class="q-ma-md shadow-8" />
        </q-item>
        <q-item clickable to="/gallery/photo/4" class="q-pa-none q-ma-none" >
          <q-img src="~/src/assets/imgs/story4.png" width="120px" height="120px" class="q-ma-md shadow-8" />
        </q-item>
        <q-item clickable to="/gallery/photo/5" class="q-pa-none q-ma-none" >
          <q-img src="~/src/assets/imgs/story5.png" width="120px" height="120px" class="q-ma-md shadow-8" />
        </q-item>
        <q-item clickable to="/gallery/photo/6" class="q-pa-none q-ma-none" >
          <q-img src="~/src/assets/imgs/story6.png" width="120px" height="120px" class="q-ma-md shadow-8" />
        </q-item>
        <q-item clickable to="/gallery/photo/7" class="q-pa-none q-ma-none" >
          <q-img src="~/src/assets/imgs/story7.png" width="120px" height="120px" class="q-ma-md shadow-8" />
        </q-item>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const muted = ref(true);
    return {
      muted,
    }
  }
})

</script>

<style lang="sass" scoped>
.showcase
  min-height: 450px
</style>