const initialState={
    movie:[],
    searchedMovie:[],
    detail:[]
}

const movieReducer =(state=initialState,action)=>{
    switch (action.type) {
        case "GET_MOVIE":
            
            return{
                ...state,
                movie:action.payload
            }  
        case "SEARCH_MOVIE":
            return{
                ...state,
                searchedMovie:action.payload
            }  
            
        case "MOVIE_DETAIL":
            return{
                ...state,
                detail:action.payload
            }  
            
        default:
            return{
            ...state,
            
            
        }
    }
}

export default movieReducer;