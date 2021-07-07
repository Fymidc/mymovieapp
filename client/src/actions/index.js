import axios from 'axios';

export const fetchMovie=()=>async dispatch=>{

    const res = await axios.get(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1`);


    dispatch({
        type:"GET_MOVIE",
        payload:res.data
    })
}

export const fetchUser=()=>async dispatch=>{

    const res = await axios.get('/api/current_user');

    console.log(res)

    dispatch({
        type:"FETCH_USER",
        payload:res.data
    })
}

export const searchMovie=(val)=>async dispatch=>{

    const res = await axios.get(`https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${val.state}`);

    
    dispatch({
        type:"SEARCH_MOVIE",
        payload:res.data
    })
}

export const movieDetail=(movie)=>{
    
    return{
        type:"MOVIE_DETAIL",
        payload:movie
    }
}


/*
'https://www.omdbapi.com/?s=for&apikey=e5b717b0'



export const searchMovie=(val)=>async dispatch=>{

    const res = await axios.get(`https://www.omdbapi.com/?s=${val.state}&apikey=e5b717b0`);

    console.log("actions",val.state)
    dispatch({
        type:"SEARCH_MOVIE",
        payload:res.data.Search
    })
}
*/