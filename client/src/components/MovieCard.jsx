import { GoPencil } from "react-icons/go";
import MovieStars from "./MovieStars";
import { Link } from "react-router-dom";
import axios from "axios";
import { MOVIE_API_URL } from "../constants/const";
import { BiTrashAlt } from "react-icons/bi";

const MovieCard = ({ data, setmovielist, movielist }) => {

  const { _id, movieName, genre, rating, imageName } = data;

  const handleMovieDelete = async (id) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this movie?");
    if (isConfirmed) {
      try {
        const response = await axios.delete(MOVIE_API_URL, { data: { id } });
        const newmovielist = movielist.filter((item) => item._id !== response.data._id);
        setmovielist(newmovielist);
        alert("Movie deleted successfully");
      } catch (error) {
        console.error("Error deleting movie:", error);
      }
    }
  };

  return (
    <div className="card card-side bg-base-100 shadow-xl w-2/5">
      <figure className="w-2/3">
        <img
          className="h-full"
          src={imageName || "https://res.cloudinary.com/dwj60zjnr/image/upload/v1734484591/dj7miolqa2rq16ueip0s.png"}
          alt={movieName}
        />
      </figure>
      <div className="card-body space-y-1">
        <h2 className="card-title">{movieName}</h2>
        <div>
          <p className="text-xs text-slate-500">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, voluptatibus?
          </p>
        </div>
        <div className="flex gap-2 flex-wrap">
          {genre?.map((item) => (
            <div className="badge badge-outline text-xs" key={item._id}>
              {item.genre}
            </div>
          ))}
        </div>
        <div className="rating rating-sm">
          <MovieStars movieName={movieName} rating={rating} id={_id} />
        </div>
        <div className="card-actions justify-end">
          <Link to={`/movie/${_id}`}>
            <GoPencil />
          </Link>
          <BiTrashAlt onClick={() => handleMovieDelete(_id)} />
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
