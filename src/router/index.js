import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/flow'
    },
    {
      path: '/flow',
      component: () => import('@/views/FlowQuery/index.vue')
    },
    {
      path: '/cost',
      component: () => import('@/views/CostQuery/index.vue')
    },
    {
      path: '/log',
      component: () => import('@/views/OptLog/index.vue')
    },
    {
      path: '/schedule',
      component: () => import('@/views/ScheduleTask/index.vue')
    },
    {
      path: '/trans',
      component: () => import('@/views/HisTrans/index.vue')
    },
    {
      path: '/hispay',
      component: () => import('@/views/HisPay/index.vue')
    }
  ]
})

export default router
