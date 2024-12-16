import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { MOVIE_API_URL } from "../constants/const";
import axios from "axios";

const MovieList = () => {
  const [movieList, setMovieList] = useState([{}]);

  useEffect(() => {
    getMovieList();
  }, []);
  const getMovieList = async () => {
    const response = await axios(MOVIE_API_URL);
    setMovieList(response?.data);
  };


  return (
    <div className="flex gap-5 flex-wrap justify-center ">
      {movieList?.map((item) => (
        <MovieCard key={item._id} data={item} movielist={movieList} setmovielist={setMovieList} />
      ))}
    </div>
  );
};

export default MovieList;
