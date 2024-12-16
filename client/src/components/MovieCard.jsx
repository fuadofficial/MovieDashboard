import { GoPencil } from "react-icons/go";
import { BiTrashAlt } from "react-icons/bi";
import MovieStars from "./MovieStars";
import { Link } from "react-router-dom";
import axios from "axios";
import { MOVIE_API_URL } from "../constants/const";
import ConfirmDialog from "./ConfirmDialog";

const MovieCard = ({ data, setmovielist, movielist }) => {
  const { _id, movieName, genre, rating, imageName } = data;

  const handleMovieDelete = async (id) => {
    const data = await axios(MOVIE_API_URL, { method: "DELETE", data: { id } });
    const newmovielist = movielist.filter((item) => item._id != data.data._id);
    setmovielist(newmovielist);
  };

  return (
    <div className="card card-side bg-base-100 shadow-xl w-2/5">
      <figure className="w-2/3">
        <img
          className="h-full"
          src={imageName}
          alt="Movie"
        />
      </figure>
      <div className="card-body space-y-1">
        <h2 className="card-title">{movieName}</h2>
        <div>
          <p className="text-xs text-slate-500">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure,
            voluptatibus?
          </p>
        </div>
        <div className=" flex gap-2 flex-wrap">
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
          <ConfirmDialog
            message="This movie will be permanently deleted. Are you sure?"
            onConfirm={() => handleMovieDelete(_id)}
          />
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
