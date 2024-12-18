import React, { useEffect, useState, useRef } from "react";
import { GoPencil } from "react-icons/go";
import axios from "axios";
import { GENRE_API_URL } from "../constants/const";
import ConfirmDialog from "../components/ConfirmDialog";

function AddGenre() {
    const [genreList, setGenreList] = useState([{}]);
    const [genre, setGenre] = useState("");
    const [genreId, setGenreId] = useState(0);

    // Create a ref for the input field
    const genreInputRef = useRef(null);

    useEffect(() => {
        getAllGenre();
    }, []);

    // Get all genres from the API
    const getAllGenre = async () => {
        const data = await axios(GENRE_API_URL);
        setGenreList(data?.data);
    };

    // Add or update genre in the list
    const handleAddGenre = async () => {
        const response = await axios(GENRE_API_URL, {
            method: "POST",
            data: {
                id: genreId,
                genre,
            },
        });

        if (response.status == 200 && genreId !== 0) {
            // Update the genre list if editing an existing genre
            const index = genreList.findIndex((item) => item._id === genreId);
            const genList = [...genreList];
            genList[index].genre = genre;
            setGenreList(genList);
            setGenre("");
            setGenreId(0);
        } else {
            // Add new genre to the list
            let NewList = [...genreList, response?.data];
            setGenreList(NewList);
            setGenre("");
        }

        // Focus the input field again after submitting
        genreInputRef.current.focus();
    };

    // Handle genre editing
    const handleEditGenre = async (id, currentgenre) => {
        setGenre(currentgenre);
        setGenreId(id);
        genreInputRef.current.focus();
    };

    // Delete genre from the list
    const handleDeleteGenre = async (id) => {
        const response = await axios(GENRE_API_URL, {
            method: "DELETE",
            data: { id },
        });

        if (response.status === 200) {
            const newList = genreList.filter((item) => item._id !== id);
            setGenreList(newList);
        }
    };

    // Handle Enter key press
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleAddGenre();
        }
    };

    return (
        <div className="w-full flex justify-center text-white">
            <div className="flex-col w-full sm:w-1/2 bg-slate-900 p-6 rounded-md shadow-sm">
                <div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <div className="flex flex-col sm:flex-row w-full gap-3 text-black">
                            <input
                                ref={genreInputRef} // Set ref to the input
                                type="text"
                                placeholder="Type here"
                                value={genre}
                                onChange={(e) => setGenre(e.target.value)}
                                onKeyDown={handleKeyPress} // Listen for the Enter key press
                                className="input input-bordered w-full"
                            />
                            <button
                                className="btn bg-primary mt-3 sm:mt-0 sm:w-32"
                                onClick={handleAddGenre}
                            >
                                Submit
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-start mt-6">
                        {genreList.map((item) => (
                            <div
                                key={item._id}
                                className="w-full sm:w-1/2 lg:w-1/4 m-5 border-2 border-gray-700 p-2 rounded-md"
                            >
                                <div className="p-3">
                                    <p className="font-semibold">{item.genre}</p>
                                </div>
                                <div className="flex justify-end space-x-2 border-t-[1px] border-b-gray-700 pb-3">
                                    <div
                                        className="mt-3 cursor-pointer"
                                        onClick={() => handleEditGenre(item._id, item.genre)}
                                    >
                                        <GoPencil />
                                    </div>
                                    <div className="mt-3">
                                        <ConfirmDialog
                                            message="This genre will be permanently deleted. Are you sure?"
                                            onConfirm={() => handleDeleteGenre(item._id)}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddGenre;
