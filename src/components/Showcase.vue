<template>
    
    <div class="col column bg-teal-3 q-ma-sm showcase">
      <div class="col row justify-center content-center text-h4 text-bold text-accent q-my-md">
        Best Stories
      </div>
      <div class="col-10 row justify-center ">
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
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {
    }
  }
})

</script>

<style lang="sass" scoped>
.showcase
  border-radius: 5px
</style>