import { createRouter, createWebHistory } from 'vue-router'
import PrimeiraQuestao from '../views/PrimeiraQuestao.vue'
import SegundaQuestao from '../views/SegundaQuestao.vue'

const routes = [
  {
    path: '/',
    name: 'fibonacci',
    component: PrimeiraQuestao
  },
  {
    path: '/inversor-de-strings',
    name: 'inversor-de-strings',
    component: SegundaQuestao
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
