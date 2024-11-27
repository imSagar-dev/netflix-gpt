
import Carousel from "react-multi-carousel";
import RESPONSIVE_CAROUSAL from '../utils/config';
import { TMDB_DEFAULT_POSTER_URL } from '../utils/constants';
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

const MovieCarousel = ({ movies }) => {
    return (
        <Carousel responsive={RESPONSIVE_CAROUSAL} className=' w-auto' containerClass="container" minimumTouchDrag={80} itemClass="carousel-item-padding-10-px">
            {movies.map((movie) => (

                <div key={movie.id} className='flex hover:scale-125 '>
                    <Link to={"/watch/" + movie.id}  >  <img src={TMDB_DEFAULT_POSTER_URL + movie.poster_path} alt="restaurant" height={184} width={144} /></Link>

                </div>
            ))}
        </Carousel>
    )
}


export default MovieCarousel;