import React,{useState,useEffect} from 'react'
import {connect} from 'react-redux'
import { searchMovie,movieDetail} from '../actions';
import {Link} from 'react-router-dom'


function Afterlogin(props) {


const[state,setState]=useState("")


    const searchM=(e)=>{
        setState({state:e.target.value})
      // 
    }

    const submitHandler=(e)=>{
        e.preventDefault();
        props.searchMovie(state)

    }

/*
    useEffect(()=>{
        props.searchMovie(state)
    },[state])
*/
    

    return (
        <>
         <div className="nav">
                <h1>NETFLIX</h1>
                {props.auth!==false?<a id="nav-link" href="/api/logout" > Sign out </a>:""}
         </div>

        <img id="landing-bg" src="https://cdn.hipwallpaper.com/i/98/21/dUyCkp.jpg" alt="bg-img"/>

           <div className="landing-main">
                <h2>Movies</h2>
                <p>Movies move us like nothing else can, whether they’re scary, funny, dramatic, romantic or anywhere in-between. So many titles, so much to experience.</p>

                    <form onSubmit={submitHandler}>
                    <input type="text" onChange={searchM} placeholder="What You Watching?" />

                    </form>
            </div>

            <div className="landing-info2">
            <img className="landing-bg3" src="https://cdn.hipwallpaper.com/i/98/21/dUyCkp.jpg" alt="bg-img"/>

               {props.movie.searchedMovie.results ? props.movie.searchedMovie.results.map(sear=><div className="movies2" key={sear.id}><Link to="/movie" ><img onClick={()=>props.movieDetail(sear)} src={"https://image.tmdb.org/t/p/w1280" + sear.poster_path}/></Link>  <p>{sear.title}</p></div>) : "No search results.."
                    }
                
           </div>

         </>
    )
}

const mapStateToProps=state=>{
    return{
        auth:state.auth,
        movie:state.movie,
        searchedMovie:state.searchedMovie
    }
}



export default  connect(mapStateToProps,{searchMovie,movieDetail}) (Afterlogin)
