import axios from 'axios'

const GET_BOOK_LIST = 'GET_BOOK_LIST'

export function getBookList(maxResults) {
    return function (dispatch) {
        dispatch({
            type: GET_BOOK_LIST,
            payload: new Promise( (resolve, reject) => {
                axios.get(`${ process.env.GOOGLE_BOOKS_API}${ maxResults }`, { timeout: 60000 })
                     .then( response => {
                         resolve( response )
                     })
                     .catch(error => {
                         console.error('Error in making that axios GET_BOOK_LIST call. The issue was: ', error)
                     })
            })
        })
    }
}
