

export const increment = ( state ) => {
    state.count ++
    state.lastMutation = 'increment'
}

export const incrementBy = ( state, val ) => {
    state.count +=val
    state.lastMutation = 'incrementBy'
    state.lastRandomInt = val
}

export const setLoading = ( state, loading ) => {
    state.isLoading = loading
    state.lastMutation = 'set loading'
}