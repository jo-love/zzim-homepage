export function asyncComponent (componentName) {
    return () => import(`../components/${componentName}`)
}

export function scrollBehavior (to, from, savedPosition) {
    if (to.meta.keepScroll && from.meta.keepScroll) {
        return null
    }
    if (savedPosition) {
        return savedPosition
    }
    if (to.hash) {
        const position = {}
        position.selector = to.hash
        return position
    }
    return { x: 0, y: 0 }
}