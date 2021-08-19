import { readonly, reactive } from "vue"

const state = reactive({
    nodes: []
})

const reducer = (accumulator, currentValue) => accumulator + currentValue;
const addNodes = (nodes) => {
    state.nodes = nodes.map(node => {
        return {
            ...node,
            total_rewards: node.history.filter(h => h.type.toLowerCase() === 'mined').map(h => h.amount).reduce(reducer),
            color: Math.floor(Math.random() * 16777215).toString(16)
        }
    })
}

export default {
    state: readonly(state),
    addNodes
}