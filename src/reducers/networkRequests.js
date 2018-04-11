export function bookListReducer (state = {}, action ) {

    switch (action.type) {
      case 'GET_BOOK_LIST_PENDING':
        return Object.assign({}, state, {
            isPending: true,
            isFulfilled: false,
            isRejected: false
        })
      case 'GET_BOOK_LIST_FULFILLED':
        return Object.assign({}, state, {
            isPending: false,
            isFulfilled: true,
            isRejected: false,
            data: action.payload.response.data
        })
      case 'GET_BOOK_LIST_REJECTED':
        return Object.assign({}, state, {
            isPending: false,
            isFulfilled: false,
            isRejected: true,
        })
      default:
        return state
    }
}
