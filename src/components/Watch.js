import { useParams } from "react-router-dom";
import useWatchVideo from "../utils/hooks/useWatchVideo";
import { useSelector } from "react-redux";
import Header from '../components/core/Header';
const Watch = () => {
    const { id } = useParams();

    const selectedVideo = useSelector(store => store.movies?.watchMovie);
    useWatchVideo(id);
    return (
        <>
            {/* <Header /> */}
            <div className='w-screen'>

                <iframe className='w-screen aspect-video' src={"https://www.youtube.com/embed/" + selectedVideo?.key + "?&autoplay=1&mute=1"} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        </>
    )
}

export default Watch;