import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Output from '@/components/Output' //①import
import Profile from '@/components/Profile' //①import


Vue.use(Router)
Vue.config.devtools = true

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },

    {
      path: '/outputs',
      name: 'Output',
      component: Output
    },
    {
      path: '/profiles',
      name: 'profile',
      component: Profile
    },
  ],

})
