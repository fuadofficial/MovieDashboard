import { useEffect, useState } from "react";
import { GoPencil } from "react-icons/go";
import { BiTrashAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import axios from "axios";
import { MOVIE_API_URL } from "../constants/const";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    getMovieList();
  }, []);

  const getMovieList = async () => {
    try {
      const response = await axios(MOVIE_API_URL);
      setMovieList(response?.data);
    } catch (error) {
      console.error("Error fetching movie list:", error);
    }
  };

  const handleMovieDelete = async (id) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this movie?");
    if (isConfirmed) {
      try {
        const response = await axios.delete(MOVIE_API_URL, { data: { id } });
        const newMovieList = movieList.filter((item) => item._id !== response.data._id);
        setMovieList(newMovieList);
      } catch (error) {
        console.error("Error deleting movie:", error);
      }
    }
  };

  const renderStars = (movieName, rating, id) => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <input
          key={i}
          disabled
          type="radio"
          name={movieName + id}
          className="mask mask-star-2 bg-orange-400"
          checked={rating >= i * 25}
        />
      );
    }
    return stars;
  };

  return (
    <div className="flex gap-5 flex-wrap justify-center">
      {movieList?.map((data) => (
        <div className="card bg-gray-900 text-white card-side p-1 bg-base-100 shadow-xl w-2/5" key={data._id}>
          <figure className="w-2/3">
            <img
              className="h-full"
              src={
                data.imageName}
              alt={data.movieName}
            />
          </figure>
          <div className="card-body space-y-1">
            <h2 className="card-title">{data.movieName}</h2>
            <div>
              <p className="text-xs text-slate-500">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, voluptatibus?
              </p>
            </div>
            <div className="flex gap-2 flex-wrap">
              {data.genre?.map((item) => (
                <div className="badge badge-outline text-xs" key={item._id}>
                  {item.genre}
                </div>
              ))}
            </div>
            <div className="rating rating-sm">
              {renderStars(data.movieName, data.rating, data._id)}
            </div>
            <div className="card-actions justify-end">
              <Link to={`/movie/${data._id}`}>
                <GoPencil />
              </Link>
              <BiTrashAlt onClick={() => handleMovieDelete(data._id)} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
