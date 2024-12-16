import { useEffect, useState } from "react";
import {
    CLOUDINARY_IMAGE_UPLOAD_URL,
    GENRE_API_URL,
    MOVIE_API_URL,
} from "../constants/const";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const AddMovie = () => {
    const [img, setImg] = useState(null);
    const [rating, setRating] = useState(0);
    const [genreList, setGenreList] = useState([]);
    const [checkedGenre, setCheckedGenre] = useState([]);
    const [movieName, setMovieName] = useState("");
    const [movieId, setMovieId] = useState(0);
    const [selectImageUrl, setSelecedImageUrl] = useState("");

    const navigate = useNavigate();
    const param = useParams();

    useEffect(() => {
        getAllGenre();
        if (param.id) {
            getMovieById(param.id);
        }
    }, []);

    const getMovieById = async (id) => {
        const response = await axios(MOVIE_API_URL + "/movieById", {
            method: "POST",
            data: { id },
        });
        const { rating, genre, movieName, _id, imageName } = response?.data;
        setRating(rating);
        setCheckedGenre(genre);
        setMovieName(movieName);
        setMovieId(_id);
        setSelecedImageUrl(imageName); // Ensure the image URL is correctly set
    };
    

    const handleRatingChange = (e) => {
        setRating(e.target.value);
    };

    const getAllGenre = async () => {
        const data = await axios(GENRE_API_URL);
        setGenreList(data?.data);
    };

    const handleCheckbox = (event) => {
        const id = event.target.id;
        if (!checkedGenre.includes(id) && event.target.checked) {
            setCheckedGenre([...checkedGenre, id]);
        } else {
            const newList = checkedGenre.filter((item) => item != id);
            setCheckedGenre(newList);
        }
    };

    const handleImage = (event) => {
        const img = event.target.files[0];
        setImg(img);
        setSelecedImageUrl(URL.createObjectURL(img));
    };

    const handleAddMovie = async () => {
        let movieImgUrl = selectImageUrl; // Use existing image URL by default
    
        try {
            // Upload a new image if selected
            if (img) {
                const data = new FormData();
                data.append("upload_preset", import.meta.env.VITE_UPLOAD_PRESET);
                data.append("file", img);
    
                const config = {
                    method: "POST",
                    body: data,
                };
                const response = await fetch(CLOUDINARY_IMAGE_UPLOAD_URL, config);
                const responseData = await response.json();
    
                if (!responseData.url) {
                    throw new Error("Image upload failed");
                }
    
                movieImgUrl = responseData.url; // Update with new image URL
            }
    
            // Post movie data
            const response = await axios(MOVIE_API_URL, {
                method: "POST",
                data: {
                    imageName: movieImgUrl, // Use the correct field name
                    movieName,
                    id: movieId,
                    rating,
                    genre: checkedGenre,
                },
            });
    
            if (response.status === 200) {
                navigate("/");
                window.location.reload(); // Refresh to update movie list
            }
        } catch (error) {
            console.error("Error adding/updating movie:", error.message);
        }
    };
    
    return (
        <div className="w-full flex justify-center">
            <div className="flex-row bg-slate-900 p-8 rounded-md shadow-sm w-3/5">
                <div className="w-full">
                    <label className="label">
                        <span className="label-text text-white">Image</span>
                    </label>
                    <div className="flex items-center gap-4">
                        <input
                            type="file"
                            onChange={handleImage}
                            className="file-input file-input-bordered file-input-primary w-full"
                        />
                        <div className="h-1/6 w-1/6 ">
                            {selectImageUrl && (
                                <img className="rounded-sm" src={selectImageUrl} alt="Movie preview" />
                            )}
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-white">Title</span>
                        </label>
                        <input
                            type="text"
                            value={movieName}
                            onChange={(e) => setMovieName(e.target.value)}
                            placeholder="Type here"
                            className="input input-bordered w-full text-black"
                        />
                    </div>
                    <div className="my-3">
                        <label className="label">
                            <span className="label-text text-white">Rating</span>
                        </label>
                        <input
                            type="range"
                            min={0}
                            max="100"
                            value={rating}
                            className="range"
                            step="25"
                            onChange={handleRatingChange}
                        />
                        <div className="w-full flex justify-between text-white text-xs px-2">
                            <span>1</span>
                            <span>2</span>
                            <span>3</span>
                            <span>4</span>
                            <span>5</span>
                        </div>
                    </div>
                    <div className="my-3 flex flex-wrap">
                        {genreList.map((item) => (
                            <div key={item.key} className="form-control ">
                                <label className="label cursor-pointer space-x-2">
                                    <span className="label-text text-white">{item.genre}</span>
                                    <input
                                        id={item._id}
                                        name={item.genre}
                                        type="checkbox"
                                        checked={checkedGenre.includes(item._id) || false}
                                        className="checkbox checkbox-primary"
                                        onChange={handleCheckbox}
                                    />
                                </label>
                            </div>
                        ))}
                    </div>
                    <div>
                        <button
                            className="btn btn-block bg-primary"
                            onClick={handleAddMovie}>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddMovie;
