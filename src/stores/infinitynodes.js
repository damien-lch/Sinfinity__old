import { readonly, reactive } from "vue"

const state = reactive({
    nodes: []
})

const addNodes = (nodes) => {
    state.nodes = nodes
}

export default {
    state: readonly(state),
    addNodes
}