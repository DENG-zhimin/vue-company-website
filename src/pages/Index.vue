<template>
  <q-page class="row items-center justify-evenly"> </q-page>
</template>

<script lang="ts">
// import { Todo, Meta } from 'components/models';
import { defineComponent } from 'vue';
import { info } from 'boot/msg';

function displayMsg(msg: string) {
  info(msg, true);
}

export default defineComponent({
  name: 'PageIndex',
  components: {},
  setup() {
    return { displayMsg };
  },
});
</script>
