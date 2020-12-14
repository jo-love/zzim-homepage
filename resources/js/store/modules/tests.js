import { createApiStore } from '../../api'

const apiStore = createApiStore([
    {
        action: '_test',
        property: 'testState',
        path: 'test',
        method: 'get',
    }
])

export default {
    namespaced: true,
    mixins: [apiStore],
    state: {
    },
    actions: {
        async testAction ({dispatch}, params) {
            await dispatch(`_test`, {params})
        },
    }
}