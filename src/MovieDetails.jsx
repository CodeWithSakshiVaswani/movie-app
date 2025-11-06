import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const MovieDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const { data, isLoading, isError } = useQuery({
        queryKey: ["movieDetails", id],
        queryFn: async () => {
            const res = await axios.get(
                `https://streaming-availability.p.rapidapi.com/shows/${id}`,
                {
                    params: {
                        series_granularity: "show",
                        output_language: "en",
                    },
                    headers: {
                        "x-rapidapi-key": import.meta.env.VITE_RAPID_API_KEY,
                        "x-rapidapi-host":
                            "streaming-availability.p.rapidapi.com",
                    },
                }
            );
            return res.data;
        },
    });

    if (isLoading) return <p className="text-white p-4">Loading...</p>;
    if (isError)
        return <p className="text-red-500 p-4">Failed to fetch details</p>;

    const movie = data;

    return (
        <div className="flex">
            <img
                src={movie.imageSet?.verticalPoster?.w240}
                alt={movie.title}
                className="w-[150px] h-[200px] rounded-xl"
            />
            <div className="flex flex-col">
                <h2 className="font-medium text-[16px] text-title mb-2.5">
                    {movie.title}
                </h2>
                <div className="flex gap-3 mb-2.5 items-center">
                    <p className="text-blue text-[7px]">
                        <strong className="font-normal block text-[10px] text-white">
                            Type 🎬
                        </strong>
                        {movie.showType}
                    </p>
                    <p className="text-blue text-[7px]">
                        <strong className="font-normal block text-[10px] text-white">
                            Rating⭐
                        </strong>
                        {movie.rating}
                    </p>
                    <p className="text-blue text-[7px]">
                        <strong className="font-normal block text-[10px] text-white">
                            Released 📅
                        </strong>
                        {movie.releaseYear}
                    </p>
                </div>
                <p className="flex mb-1.5 text-[8px]">
                    {movie.genres?.map((genre) => (
                        <div
                            key={genre.id}
                            className="border border-genreborder rounded-4xl py-[2px] px-[6px] mr-[5px] mb-[7px]"
                        >
                            {genre.name}
                        </div>
                    ))}
                </p>
                <p className="text-overviewtext mb-2. text-[8px]">
                    {movie.overview}
                </p>
            </div>
            <div className="flex flex-col">
                <p className="text-[7px] py-[6px] px-[2.5px] mr-[4px] mb-[6px]">
                    <strong className="block text-[8px] text-blue font-semibold">
                        Director
                    </strong>
                    {movie.directors?.join(",")}
                </p>
                <p>
                    <strong>Actors</strong>
                    {movie.cast?.join(",")}
                </p>
            </div>
        </div>
    );
};

export default MovieDetails;
