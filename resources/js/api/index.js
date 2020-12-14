import createApiStoreCreator from './createApiStoreCreator'
import api from './api'

const createApiStore = createApiStoreCreator(api)

export {
    api as default,
    api,
    createApiStore
}
