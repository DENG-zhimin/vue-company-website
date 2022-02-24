<template>
  <div class="row q-gutter-x-md showcase q-ma-sm bg-blue-2 ">
      <div class="col column justify-center items-center">
          <div class=" row content-center justify-center text-h3 text-bold text-blue-7 q-mb-md">Explore</div>
          <div class=" row content-center justify-center text-h4 text-bold text-blue-7 ">Splendid Moments!</div>
      </div>
      
      <div class="col-8 row justify-center content-center ">
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
  min-height: 400px
</style>