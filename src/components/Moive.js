import PropTypes from "prop-types";

function Movie({key, medium_cover_image, title, summary, genres}){
    return 
    <div id={key}>
        <img src={medium_cover_image} />
        <h2>{title}</h2>
        <p>{summary}</p>
        <ul>
        {genres.map(genre => <li key={genre}>{genre}</li>)}
        </ul>
    </div>;
}

Movie.PropTypes = {
    medium_cover_image : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string)
}

export default Movie;