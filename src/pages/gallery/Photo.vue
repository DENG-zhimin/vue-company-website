<template>
  <div class="row justify-center text-h4 text-bold q-my-md">
    Photo{{id}}
  </div>
  <div class="row">
    <div class="col-10 row justify-center content-start q-pa-md">
      <q-img :src="require('/src/assets/imgs/gallery/photo' + id + '.jpg')" fit="fill"></q-img>
    </div>
    <div class="col q-pa-md column justify-start items-center">
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
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    id: {
      type: String
    },
  },
  setup() {
    return {
      
    }
  },
})
</script>
