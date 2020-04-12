const vantDemoModule = [
  {
    name: 'cart',
    meta: {
      title: '购物车',
    },
    component: () => import(/* webpackChunkName: "demo" */ '@/views/vant-demo/cart'),
  },
  {
    name: 'goods',
    meta: {
      title: '商品详情',
    },
    component: () => import(/* webpackChunkName: "demo" */ '@/views/vant-demo/goods'),
  },
  {
    name: 'user',
    meta: {
      title: '会员中心',
    },
    component: () => import(/* webpackChunkName: "demo" */ '@/views/vant-demo/user'),
  },
]
export default vantDemoModule
