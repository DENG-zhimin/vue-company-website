<template>
  <div class="float-menu shadow-6 radius-5 q-py-sm column items-center justify-center bg-grey-1 " v-if="showGoTop" >
    <q-btn flat dense color="primary" text-color="red" icon="las la-angle-double-up" @click.stop="goTop()" ></q-btn>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted } from 'vue'

  const goTop = () => {
    window.scrollTo(0,0);
    console.log('scrooled top.');
  }

  const myClientHeight = ref(400)
  const showGoTop = ref(false)

    // 当前距离顶部的滚动值
  const getScrollTop = () => {
      let scrollTop = 0
      if (document.documentElement && document.documentElement.scrollTop) {
          scrollTop = document.documentElement.scrollTop
      } else if (document.body) {
          scrollTop = document.body.scrollTop
      }
      return scrollTop
  }
  // 屏幕的高度值
  const getClientHeight = () => {
      let clientHeight = 0
      if (document.body.clientHeight && document.documentElement.clientHeight) {
          clientHeight = Math.min(document.body.clientHeight, document.documentElement.clientHeight)
      } else {
          clientHeight = Math.max(document.body.clientHeight, document.documentElement.clientHeight)
      }
      return clientHeight
  }
  
export default defineComponent({
  setup() {

    onMounted(()=>{
      myClientHeight.value = getClientHeight();
    })
    
    return {
      showGoTop,
      goTop,

    }
    
  },
})

window.addEventListener('scroll', () => {
  let toTop = getScrollTop();
  if (toTop > (myClientHeight.value / 3)) {
    if (showGoTop.value === false ) {
      showGoTop.value = true
    }
  } else {
    if (showGoTop.value === true ) {
      showGoTop.value = false
    }
  }
})
</script>


<style lang="sass" scoped>
.float-menu
  position: fixed
  bottom: 200px
  right: 5px
  // height: 120px
  width: 50px
  opacity: 0.7

.float-menu:hover
  // opacity: 0.9
  right: 5px
</style>