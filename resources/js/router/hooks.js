import api from "../api/api";
import store from '../store'

export function checkAppToken (to, from, next) {
    next()
}

export function auth(to, from, next) {
    next()
}

export function dispatchAction (to, from, next) {
    if (to.meta.action) {
        store.dispatch(`beforeEnter${to.name}`, { to, from })
    }
    next()
}
