<template>
  <div>
    <h1 class="text-grey-1">Product Index Page</h1>
    <h2>{{ $t('success') }}</h2>
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
    return {}
  },
})
</script>
