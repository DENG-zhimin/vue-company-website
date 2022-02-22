<template>
  <div class="row justify-evenly q-mt-xl q-pa-xl text-grey-8 bg-grey-4">
    <div 
      class="col"
      style="max-width: 350px"
      v-for="(fMenu, index) in footMenu"
      :key="index"
   >
      <div class="text-h6 text-bold text-center q-my-md">{{fMenu.title}}</div>
      <q-tabs
        v-for="(item, indexc) in fMenu.children"
        :key="indexc"
        
      >
        <q-route-tab 
          :to="item.path"
         >
          <q-item>
            <q-item-section v-if="item.avatar" avatar>
              <q-icon :color="item.avatar_color" :name="item.avatar" />
            </q-item-section>
            <q-item-section>{{item.title}}</q-item-section>
          </q-item>
         </q-route-tab>
      </q-tabs>
    </div>
  </div>
</template>
.<script lang="ts">
import { defineComponent, reactive } from 'vue'

const footMenu = reactive([
  {
    title: 'Company',
    avatar: '',
    children: [
      {
        title: 'About Us',
        path: '/company/aboutus',
      },
      {
        title: 'Awards',
        path: '/company/awards',
      },
      {
        title: 'Job Optunities',
        path: '/company/jobs',
      },
    ]
  },
  {
    title: 'Buy',
    avatar: '',
    children: [
      {
        title: 'Camere Housing',
        path: '/company/aboutus',
      },
      {
        title: 'Lens',
        path: '/company/awards',
      },
      {
        title: 'Job Optunities',
        path: '/company/jobs',
      },
    ]
  },
  {
    title: 'Supports',
    avatar: '',
    children: [
      {
        title: 'Manuals and software',
        path: '/company/downloads',
      },
      {
        title: 'Contact Us',
        path: '/support/contactus',
      },
      {
        title: 'Distributors',
        path: '/company/distributors',
      },
      {
        title: 'maintainence',
        path: '/company/maintainence',
      },
      {
        title: 'User Agreement',
        path: '/company/UA',
      },
      {
        title: 'Privacy Policy',
        path: '/company/privacyPolicy',
      },
    ]
  },
 
  {
    title: 'News and Stories',
    avatar: '',
    children: [
      {
        title: 'Company Updates',
        path: '/company/awards',
      },
      {
        title: 'Industrial News',
        path: '/company/aboutus',
      },
      {
        title: 'Job Optunities',
        path: '/company/jobs',
      },
    ]
  },
  {
    title: 'Keep Informed',
    avatar: '',
    children: [
      {
        title: 'WeChat',
        avatar: 'fab fa-weixin',
        avatar_color: 'green',
        path: '/contact/wechat',
      },
      {
        title: 'tiktok',
        avatar: 'fab fa-tiktok',
        avatar_color: 'red',
        path: '/contact/tiktok',
      },
      {
        title: 'weibo',
        avatar: 'fab fa-weibo',
        avatar_color: 'blue',
        path: '/contact/weibo',
      },
      {
        title: 'facebook',
        avatar: 'fab fa-facebook',
        avatar_color: 'blue',
        path: '/contact/facebook',
      },
      {
        title: 'twitter',
        avatar: 'fab fa-twitter',
        avatar_color: 'blue',
        path: '/contact/twitter',
      },
    ]
  },
  
]);
export default defineComponent({
  setup() {
    return {
      footMenu
    }
  },
})
</script>

<style lang="sass" scoped>
.foot-menu
  margin-left: 5px
</style>
