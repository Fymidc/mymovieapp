import React,{useEffect,useState} from 'react'
import {connect} from 'react-redux';
import { fetchMovie,searchMovie,movieDetail} from '../actions';
import {Link} from 'react-router-dom'



function Landingpage(props) {
    const[state,setState]=useState("")


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
    console.log("search",props.movie.searchedMovie.results)
    

    return (
        <div>
            <img className="landing-bg" src="https://cdn.hipwallpaper.com/i/98/21/dUyCkp.jpg" alt="bg-img"/>
            
         
            <div className="primary-section">
               <div className="primary-section-info">

                   <h3>Stranger Things</h3>
                   <p>When a young boy vanishes, a small town uncovers a mystery involving secret experiments,
                        terrifying supernatural forces and one strange little girl.</p>
               </div>

                <img src="https://occ-0-4451-1489.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABVQ3r-RD5ggW7SMOGIC0ATHOhcyr_oN1n19NDrSHuMXXlN9ZaODS8c51TbtPn_S0anR2qRN9S4qAVcNYrhN2d8MEgpHY.jpg?r=3a8"  alt="img"/>
            </div>

            <div className="landing-info">
            <img className="landing-bg2" src="https://cdn.hipwallpaper.com/i/98/21/dUyCkp.jpg" alt="bg-img"/>

            {props.movie.movie.results? props.movie.movie.results.map(movi=><div className="movies" key={movi.id}><Link to="/movie" ><img onClick={()=>props.movieDetail(movi)} src={"https://image.tmdb.org/t/p/w1280" + movi.poster_path}/></Link>  <p>{movi.title}</p></div>) : "njo"}
                
           </div>
        </div>
    )
}


const mapStateToProps=state=>{
    return{
        movie:state.movie,
        searchedMovie:state.searchedMovie
       
    }
}

export default connect(mapStateToProps,{fetchMovie,searchMovie,movieDetail})(Landingpage)

//api key e5b717b0
//props.movie.searchedMovie.results ? props.movie.searchedMovie.results.map(sear=><div className="movies" key={sear.id}><Link to="/movie" ><img onClick={()=>props.movieDetail(sear)} src={"https://image.tmdb.org/t/p/w1280" + sear.poster_path}/></Link>  <p>{sear.title}</p></div>) : "No search results.."

//               
