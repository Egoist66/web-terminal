const _dispatcher = (payload, dispatchFn, ...actions) => {
    return actions.map((action, i) => {
        return  dispatchFn(action(payload[i]))
    })
}

export default _dispatcher
