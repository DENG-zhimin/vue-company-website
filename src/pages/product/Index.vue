<template>
  <div class="text-grey-1 column items-center">
    <h1 >Product Index Page</h1>
    <h2>{{ $t(params.cate) }}</h2>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { useRoute } from 'vue-router'


export default defineComponent({
  setup() {
    const route = useRoute();
    onMounted( () => {
      console.log('I got route of index.')
      console.log(route.params)
    })
    return {
      params: route.params
    }
  },
})
</script>
