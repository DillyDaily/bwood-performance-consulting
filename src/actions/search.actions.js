export const SEARCH_BAR = "SEARCH_BAR"

export const updateSearchBar = (phrase) => {
    return (dispatch) => {
        dispatch({ 
            type: SEARCH_BAR, 
            payload: phrase
        })
    }
}