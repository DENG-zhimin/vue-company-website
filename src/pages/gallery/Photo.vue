<template>
  <div class="row">
    <div class="col-10 row justify-center content-start q-pa-md ">
      <div class="row justify-center text-h4 text-bold q-my-md ">
        Photo{{id}}
      </div>
      <q-img 
        :src="require('/src/assets/imgs/gallery/photo' + id + '.jpg')"
        fit="scale-down"
        style="max-height: 1000px"
        ></q-img>
    </div>
    <div class="col q-pa-md justify-start items-center photo-div">
      <div :class="id === '1'? 'curr-show' : ''">
        <q-item clickable to="/gallery/photo/1" class="q-pa-none q-ma-none" >
          <q-img src="~/src/assets/imgs/story1.png" width="120px" height="120px" class="q-ma-md shadow-8" />
        </q-item>
      </div>
      <div :class="id === '2'? 'curr-show' : ''">
        <q-item clickable to="/gallery/photo/2" class="q-pa-none q-ma-none" >
          <q-img src="~/src/assets/imgs/story2.png" width="120px" height="120px" class="q-ma-md shadow-8" />
        </q-item>
      </div>
      <div :class="id === '3'? 'curr-show' : ''">
        <q-item clickable to="/gallery/photo/3" class="q-pa-none q-ma-none" >
          <q-img src="~/src/assets/imgs/story3.png" width="120px" height="120px" class="q-ma-md shadow-8" />
        </q-item>
      </div>
      <div :class="id === '4'? 'curr-show' : ''">
        <q-item clickable to="/gallery/photo/4" class="q-pa-none q-ma-none" >
          <q-img src="~/src/assets/imgs/story4.png" width="120px" height="120px" class="q-ma-md shadow-8" />
        </q-item>
      </div>
      <div :class="id === '5'? 'curr-show' : ''">
        <q-item clickable to="/gallery/photo/5" class="q-pa-none q-ma-none" >
          <q-img src="~/src/assets/imgs/story5.png" width="120px" height="120px" class="q-ma-md shadow-8" />
        </q-item>
      </div>
      <div :class="id === '6'? 'curr-show' : ''">
        <q-item clickable to="/gallery/photo/6" class="q-pa-none q-ma-none" >
          <q-img src="~/src/assets/imgs/story6.png" width="120px" height="120px" class="q-ma-md shadow-8" />
        </q-item>
      </div>
      <div :class="id === '7'? 'curr-show' : ''">
        <q-item clickable to="/gallery/photo/7" class="q-pa-none q-ma-none" >
          <q-img src="~/src/assets/imgs/story7.png" width="120px" height="120px" class="q-ma-md shadow-8" />
        </q-item>
      </div>
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

<style lang="sass" scoped>
.curr-show
  border: 3px solid $teal-4
.photo-div
  max-height: 1200px
  overflow-y: auto
  
</style>
