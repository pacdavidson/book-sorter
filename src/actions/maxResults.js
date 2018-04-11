const SET_MAX_RESULTS = 'SET_MAX_RESULTS'

export function setMaxResults(maxResults) {
    return function (dispatch) {
        dispatch({
            type: SET_MAX_RESULTS,
            payload: new Promise( resolve => {
                resolve(maxResults)
            })
        })
    }
}
