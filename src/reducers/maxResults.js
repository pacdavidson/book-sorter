export function maxResultsReducer (state = { isFulfilled: true, bookNumber: 40 }, action ) {

    switch (action.type) {
      case 'SET_MAX_RESULTS_PENDING':
        return Object.assign({}, state, {
            isPending: true,
            isFulfilled: false,
            isRejected: false
        })
      case 'SET_MAX_RESULTS_FULFILLED':
        return Object.assign({}, state, {
            isPending: false,
            isFulfilled: true,
            isRejected: false,
            bookNumber: action.payload.response.data
        })
      case 'SET_MAX_RESULTS_REJECTED':
        return Object.assign({}, state, {
            isPending: false,
            isFulfilled: false,
            isRejected: true,
        })
      default:
        return state
    }
}
