<template>
  <div class="text-grey-1 column items-center">
    <h1>Product Information Page</h1>
    <div class="row justify-center q-pa-sm q-gutter-x-sm">
      <div class="col-5 column bg-teal-2">
        <h2>product image slider</h2>
      </div>
      <div class="col row bg-teal-3">
        <h2>
          product features and specifications and details and manual in tabs
        </h2>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  setup() {
    const route = useRoute();
    onMounted(() => {
      console.log('I got route');
      console.log(route.params);
    });
    return {};
  },
});
</script>
