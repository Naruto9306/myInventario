import LoginApp from '@/components/LoginApp.vue'
import MenuApp from '@/views/MenuApp.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: MenuApp,
            redirect: '/login'
        },
        {
            path: '/inicio',
            component: MenuApp
        },
        {
            path: '/pedidos',
            component: MenuApp,
        },
        {
            path: '/login',
            component: LoginApp,
        },
        {
            path: '/inventario',
            component: MenuApp,
        },
    ]
})

export default router
