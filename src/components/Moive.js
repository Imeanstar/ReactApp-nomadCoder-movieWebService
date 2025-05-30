import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function Movie({key, id, medium_cover_image, title, summary, genres}){
    return 
    <div id={key}>
        <img src={medium_cover_image} />
        <h2>
            <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <p>{summary}</p>
        <ul>
        {genres.map(genre => <li key={genre}>{genre}</li>)}
        </ul>
    </div>;
}

Movie.PropTypes = {
    id : PropTypes.number.isRequired,
    medium_cover_image : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string)
}

export default Movie;