import { createRouter, createWebHistory } from 'vue-router'
import { inject } from "vue"
import Home from '/src/views/Home.vue'
import Decoder from '/src/views/Decoder.vue'
import Step1 from '/src/views/Step1.vue'
import Step2 from '/src/views/Step2.vue'

import nodesStore from "../stores/infinitynodes"

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/decoder',
        name: 'Decoder',
        component: Decoder,
        children: [
            {
                path: 'step1',
                name: 'Step1',
                component: Step1
            },
            {
                path: 'step2',
                name: 'Step2',
                component: Step2,
                beforeEnter: (to, from, next) => {
                    if (nodesStore.state.nodes.length === 0) {
                        next('/decoder/step1')
                    } else {
                        next()
                    }
                }
            },

        ]
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router