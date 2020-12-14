import Vapi from 'vuex-rest-api'

export default function createApiStoreCreator (axiosInstance) {
    return function createApiStore (storeDefines) {
        const vapi = new Vapi({
            baseURL: axiosInstance.defaults.baseURL,
            axios: axiosInstance
        })
        storeDefines.forEach(options => {
            options.requestConfig = {
                ...options.requestConfig,
                defaultData: options.defaultData,
                defaultParams: options.defaultParams,
                pathParams: options.pathParams,
                cacheable: options.cacheable,
                cacheMaxAge: options.cacheMaxAge
            }
            options.queryParams = true
            vapi.add(options)
        })
        return vapi.getStore()
    }
}
