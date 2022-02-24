<template >
  <div>
    <h1 class="row justify-center">{{$t('tMenu_aboutUs')}} </h1>

    <div class="q-my-md">
      {{ $q.lang.getLocale() }}
    </div>
    <div>
      <div v-for="(item, index) in $q.lang" :key="index" class="q-my-md">
        <span class="bg-green-3"> {{index}} :</span> {{item}}
      </div>
    </div>
  </div>
</template>