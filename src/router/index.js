import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Demo01 from '@/components/demo01/demo01'
import Demo02 from '@/components/demo02/demo02'
import Demo03 from '@/components/demo03/demo03'

Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'demo01',
//       component: Demo01
//     }
//   ]
// })
// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'demo02',
//       component: Demo02
//     }
//   ]
// })
export default new Router({
  routes: [
    {
      path: '/',
      name: 'demo03',
      component: Demo03
    }
  ]
})