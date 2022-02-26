<template>
  <div class="text-grey-1 column items-center">
    <h1>{{ params.name }}</h1>
    <div class="row justify-center q-pa-sm q-gutter-x-sm full-width">
      <div class="col-5 column bg-teal-2">
        <h2>product image slider</h2>
        <q-img
          :src="require('/src/assets/imgs/' + params.img)"
          height="300px"
          width="95%"
        />
      </div>
      <div class="col row bg-teal-3">
        <h2>
          product features and specifications and details and manual in tabs
        </h2>
      </div>
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
import { defineComponent, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  setup() {
    const route = useRoute();

    const params = ref(route.params);

    onMounted(() => {
      // console.log('I got route');
    });
    return {
      params,
    };
  },
});
</script>
