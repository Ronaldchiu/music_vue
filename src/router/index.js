import Vue from 'vue'
import VueRouter from 'vue-router'
// 注意点: 通过 improt xxx from xxx的方式加载组件, 无论组件有没有被用到, 都会被加载进来，影响性能
// import Recommend from '../views/Recommend'
// import Singer from '../views/Singer'
// import Rank from '../views/Rank'
// import Search from '../views/Search'
// 以下是vue组件的按需加载，通过import异步加载
const Recommend = (resolve) => {
  import('../views/Recommend').then((module) => {
    resolve(module)
  })
}
const Detail = (resolve) => {
  import('../views/Detail').then((module) => {
    resolve(module)
  })
}
const Search = (resolve) => {
  import('../views/Search.vue').then((module) => {
    resolve(module)
  })
}
const Rank = (resolve) => {
  import('../views/Rank.vue').then((module) => {
    resolve(module)
  })
}
const Singer = (resolve) => {
  import('../views/Singer.vue').then((module) => {
    resolve(module)
  })
}
Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/recommend' }, // 默认为/recommend，导入Recommend组件
  { path: '/rank', component: Rank },
  {
    path: '/recommend',
    component: Recommend,
    children: [
      {
        path: 'detail/:id/:type',
        component: Detail
      }
    ]
  },
  { path: '/search', component: Search },
  { path: '/singer', component: Singer }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
