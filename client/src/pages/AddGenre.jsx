import React, { useEffect, useState } from "react";
import { GoPencil } from "react-icons/go";
import axios from "axios";
import { GENRE_API_URL } from "../constants/const";
import ConfirmDialog from "../components/ConfirmDialog";

function AddGenre() {
    const [genreList, setGenreList] = useState([{}]);
    const [genre, setGenre] = useState();
    const [genreId, setGenreId] = useState(0);

    useEffect(() => {
        getAllGenre();
    }, []);

    const getAllGenre = async () => {
        const data = await axios(GENRE_API_URL);
        setGenreList(data?.data);
    };

    const handleAddGenre = async () => {
        const response = await axios(GENRE_API_URL, {
            method: "POST",
            data: {
                id: genreId,
                genre,
            },
        });

        if (response.status == 200 && genreId != 0) {
            const index = genreList.findIndex((item) => item._id == genreId);
            const genList = [...genreList];
            genList[index].genre = genre;
            setGenreList(genList);
            setGenre("");
            setGenreId(0);
        } else {
            let NewList = [...genreList, response?.data];
            setGenreList(NewList);
            setGenre("");
        }
    };

    const handleEditGenre = async (id, currentgenre) => {
        setGenre(currentgenre);
        setGenreId(id);
    };

    const handleDeleteGenre = async (id) => {
        const response = await axios(GENRE_API_URL, {
            method: "DELETE",
            data: { id },
        });

        if (response.status == 200) {
            const newList = genreList.filter((item) => item._id != id);
            setGenreList(newList);
        }
    };

    return (
        <div className="w-full flex justify-center text-white">
            <div className="flex-row w-1/2 bg-slate-900 p-6 rounded-md shadow-sm">
                <div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-white">Title</span>
                        </label>
                        <div className="flex w-full gap-3 text-black">
                            <input
                                type="text"
                                placeholder="Type here"
                                value={genre}
                                onChange={(e) => setGenre(e.target.value)}
                                className="input input-bordered w-full"
                            />
                            <button className="btn bg-primary" onClick={handleAddGenre}>
                                Submit
                            </button>
                        </div>
                    </div>

                    <div className="flex  flex-wrap">
                        {genreList.map((item,index) => (
                            <div
                                key={item._id || index}
                                className="w-1/4 m-5 border-2 border-gray-700 p-2 rounded-md">
                                <div className="flex justify-end space-x-2 border-b-[1px] border-b-gray-700 pb-3">
                                    <div onClick={() => handleEditGenre(item._id, item.genre)}>
                                        <GoPencil />
                                    </div>
                                    <div>
                                        <ConfirmDialog
                                            message="This genre will be permanently deleted. Are you sure?"
                                            onConfirm={() => handleDeleteGenre(item._id)}
                                        />
                                    </div>
                                </div>
                                <div className="p-3">
                                    <p className="font-semibold">{item.genre}</p>
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
