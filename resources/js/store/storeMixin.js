import Vuex from 'vuex'

const props = ['state', 'getters', 'actions', 'mutations']

export function applyMixin (rawModule) {
    if (rawModule.mixins) {
        props.forEach(prop => {
            rawModule[prop] = Object.assign(
                {},
                ...rawModule.mixins.map(mixinModule => mixinModule[prop]),
                rawModule[prop]
            )
        })
    }
    if (rawModule.modules) {
        rawModule.modules = Object.keys(rawModule.modules).reduce((ret, name) => {
            ret[name] = applyMixin(rawModule.modules[name])
            return ret
        }, {})
    }
    return rawModule
}

export class Store extends Vuex.Store {
    constructor (options = {}) {
        super(applyMixin(options))
    }

    registerModule (path, rawModule) {
        this.super(path, applyMixin(rawModule))
    }
}

export default Store
