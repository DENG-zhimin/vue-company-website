<template>
  <div class="text-grey-1 column items-center">
    <h1>{{ name }}</h1>
    <div class="row justify-center q-pa-sm q-gutter-x-sm full-width">
      <div class="col-5 column bg-teal-2">
        <q-img
          :src="require('/src/assets/imgs/' + img)"
          height="300px"
          width="95%"
          fit="scale-down"
        />
      </div>
      <div class="col column bg-grey-3 text-grey-8 q-pl-md">
        <div class="col-12">
          <h2>Features</h2>
          <h5>Features</h5>
          <h5>Features</h5>
          <h5>Features</h5>
          <h5>Features</h5>
        </div>
      </div>
    </div>

    <div class="row justify-center q-pa-sm full-width text-grey-8">
      <q-card class="col-12">
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="details" label="Details" />
          <q-tab name="specs" label="Specs" />
          <q-tab name="docs" label="Documents" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="details">
            <div class="text-h3">Details</div>
            <h5>details</h5>
            <h5>details</h5>
            <h5>details</h5>
          </q-tab-panel>

          <q-tab-panel name="specs">
            <div class="text-h3">Specs</div>
            <h5>Specs</h5>
            <h5>Specs</h5>
            <h5>Specs</h5>
          </q-tab-panel>

          <q-tab-panel name="docs">
            <div class="text-h3">Documents</div>
            <h5>Documents (click to download)</h5>
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
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
import { ref, defineComponent, onMounted, onBeforeMount } from 'vue';
import { useRoute /* , useRouter */ } from 'vue-router';

export default defineComponent({
  props: {
    id: {
      type: String,
      require,
    },
    img: {
      type: String,
      require,
    },
    name: {
      type: String,
      require,
    },
  },
  setup() {
    const route = useRoute();
    // const router = useRouter();

    const tab = ref('details');
    const params = route.params;

    onBeforeMount(() => {
      // if (route.params)
      if (typeof params.img === 'undefined') {
        /* router
          .push({
            path: '/',
          })
          .catch((e) => {
            console.log(e);
          }); */
      }
    });
    onMounted(() => {
      // console.log('I got route');
    });
    return {
      tab,
    };
  },
});
</script>
