const FETCH_DATA_START = 'FETCH_DATA_START'
const FETCH_DATA_END = 'FETCH_DATA_END'
const FETCH_DATA_ERROR = 'FETCH_DATA_ERROR'

function genFetchDataAction (action) {
    return (context, payload) => {
        context.commit(FETCH_DATA_START)
        action(context, payload)
            .then(() => context.commit(FETCH_DATA_END))
            .catch((error) => {
                context.commit(FETCH_DATA_ERROR, error)
                return Promise.reject(error)
            })
    }
}

const state = {
    initDataFetching: false,
    error: null
}

const actions = {
    Test: genFetchDataAction(({ dispatch }, {to, from}) => (
        Promise.all([
            dispatch('tests/testAction', to.query)
        ])
    )),

}

const mutations = {
    [FETCH_DATA_START] (state) {
        state.initDataFetching = true
    },
    [FETCH_DATA_END] (state) {
        state.initDataFetching = false
    },
    [FETCH_DATA_ERROR] (state, payload) {
        state.initDataFetching = false
        state.error = payload
    }
}

export default {
    state,
    actions: Object.keys(actions).reduce((obj, rawActionName) => {
        obj[`beforeEnter${rawActionName}`] = actions[rawActionName]
        return obj
    }, {}),
    mutations
}