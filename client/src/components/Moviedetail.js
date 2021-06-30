import React from 'react'
import {connect} from 'react-redux';
import {movieDetail} from '../actions';

function Moviedetail(props) {

    console.log("detail:",props.detail.detail)

    return (
        <>
        <img id="movie-bg"src={"https://image.tmdb.org/t/p/w1280" + props.detail.detail.poster_path} />

        <div className="movie-detail">
            
            <img id="poster"src={"https://image.tmdb.org/t/p/w1280" + props.detail.detail.poster_path} />
            <div className="movie-detail-right">
                <h1>{props.detail.detail.title}</h1>
                <b>{props.detail.detail.overview}</b>
                <div className="movie-detail-bottom">
                    <p>Release:{props.detail.detail.release_date}</p>
                    <p>IMDB rate:{props.detail.detail.vote_average}</p>
                </div>
                
            </div>
           
        </div>
      </>  
    )
}

const mapStateToProps=state=>{
    return{
        detail:state.detail
    }
}

export default connect(mapStateToProps,{movieDetail})(Moviedetail)
