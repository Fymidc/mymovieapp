import React,{useEffect,useState} from 'react'
import {connect} from 'react-redux';
import { fetchMovie,searchMovie,movieDetail} from '../actions';
import {Link} from 'react-router-dom'



function Landingpage(props) {
    const[state,setState]=useState([""])


    const searchM=(e)=>{
        setState({state:e.target.value})
      // 
    }

    const submitHandler=(e)=>{
        e.preventDefault();
        props.searchMovie(state)

    }

    useEffect(()=>{
        props.fetchMovie()       
    },[])

    useEffect(()=>{
        props.searchMovie(state)
    },[state])

    

    console.log("movies",props.movie.movie.results)
    

    return (
        <div>
            <img className="landing-bg" src="https://cdn.hipwallpaper.com/i/98/21/dUyCkp.jpg" alt="bg-img"/>
            
            <div className="landing-main">
                <h2>Movies</h2>
                <p>Movies move us like nothing else can, whether they’re scary, funny, dramatic, romantic or anywhere in-between. So many titles, so much to experience.</p>

                    <form onSubmit={submitHandler}>
                    <input type="text" onChange={searchM} placeholder="What You Watching?" />

                    </form>
            </div>

            <div className="landing-info">
            <img className="landing-bg2" src="https://cdn.hipwallpaper.com/i/98/21/dUyCkp.jpg" alt="bg-img"/>

               {props.movie.movie.results ? props.movie.movie.results.map(movi=><div className="movies" key={movi.id}><Link to="/movie" ><img onClick={()=>props.movieDetail(movi)} src={"https://image.tmdb.org/t/p/w1280" + movi.poster_path}/></Link>  <p>{movi.title}</p></div>) : "No search results.."}
           </div>
        </div>
    )
}


const mapStateToProps=state=>{
    return{
        movie:state.movie
       
    }
}

export default connect(mapStateToProps,{fetchMovie,searchMovie,movieDetail})(Landingpage)

//api key e5b717b0
