<template>
  <div class="row video-case q-ma-sm bg-blue-2">
    <div class="col-md-4 col-xs-12 column justify-center q-pa-md">
      <div
        class="row content-center justify-center text-h3 text-bold text-blue-7 q-mb-md"
      >
        Explore
      </div>
      <div
        class="row content-center justify-center text-h4 text-bold text-blue-7"
      >
        The Splendid World!
      </div>
    </div>

    <div class="col-md-8 col-xs-12 row justify-center content-center">
      <video
        src="/demo.mp4"
        class="full-width showcase"
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
    };
  },
});
</script>

<style lang="sass" scoped>
.showcase
  min-height: 400px
  border-top-right-radius: 5px
  border-bottom-right-radius: 5px

.video-case
  border-radius: 5px
</style>
