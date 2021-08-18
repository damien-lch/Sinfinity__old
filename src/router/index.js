import { createRouter, createWebHistory } from 'vue-router'
import { inject } from "vue"
import Home from '/src/views/Home.vue'
import step1 from '/src/views/Step1.vue'
import step2 from '/src/views/Step2.vue'
import step3 from '/src/views/Step3.vue'

import nodesStore from "../stores/infinitynodes"

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/step1',
        name: 'Step1',
        component: step1,
    },
    {
        path: '/step2',
        name: 'Step2',
        component: step2,
        beforeEnter: (to, from, next) => {
            if (nodesStore.state.nodes.length === 0) {
                next('/step1')
            } else {
                next()
            }
        }
    },
    {
        path: '/step3',
        name: 'Step3',
        component: step3,
        beforeEnter: (to, from, next) => {
            if (nodesStore.state.nodes.length === 0) {
                next('/step1')
            } else {
                next()
            }
        }
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router