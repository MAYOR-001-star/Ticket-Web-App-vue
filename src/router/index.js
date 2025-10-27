import { createRouter, createWebHistory } from 'vue-router'

// Layout
import MainLayout from '@/layouts/MainLayout.vue'

// Pages
import LandingPage from '@/pages/LandingPage.vue'
import LoginPage from '@/pages/LoginPage.vue'
import SignupPage from '@/pages/SignupPage.vue'
import DashboardPage from '@/pages/DashboardPage.vue'
import TicketsPage from '@/pages/TicketsPage.vue'
import NotFound from '@/components/NotFound.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '', name: 'Landing', component: LandingPage },
      { path: 'auth/login', name: 'Login', component: LoginPage },
      { path: 'auth/signup', name: 'Signup', component: SignupPage },
      { path: 'dashboard', name: 'Dashboard', component: DashboardPage },
      { path: 'tickets', name: 'Tickets', component: TicketsPage },
    ],
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
