import React from "react";
import { useSearchStore } from "../../store/useSearchStore";
import useFetchMovies from "../../hooks/useFetchMovies";
import { Star } from "lucide-react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";

const MainContent = () => {
    const { selectedGenre, searchQuery } = useSearchStore();
    const { data, isLoading, isError } = useFetchMovies();

    if (isLoading) return <div className="text-white p-4">Loading...</div>;
    if (isError)
        return <div className="text-red-500 p-4">Error Fetching Movies</div>;

    const movies = data?.shows || data;

    return (
        <main className="flex-1 p-1.5 mt-1 h-screen">
            <div className="flex flex-wrap gap-2.5 justify-start p-1.5">
                {movies.map((movie) => (
                    <Link to={`/movie/${movie.id}`} key={movie.id}>
                        <div
                            key={movie.id}
                            className="flex flex-col rounded-lg border-solid border border-border-grey w-[110px] transition-transform duration-300 ease-in-out hover:scale-[1.03] hover:shadow-[0_10px_20px_rgba(0,0,0,0.3)] cursor-pointer"
                        >
                            <img
                                src={movie.imageSet?.verticalPoster?.w240}
                                alt={movie.title}
                                className="w-[110px] h-[150px] bg-cover bg-no-repeat bg-center object-cover rounded-t-lg"
                            />
                            <div className="p-1.5 flex-wrap items-start flex-col text-left">
                                <h3 className="mb-1.5 text-[8px] font-semibold truncate">
                                    {movie.title}
                                </h3>
                                <div className="flex flex-wrap items-center gap-0.5 text-[7px] font-normal">
                                    <Star
                                        className="w-[8px] h-[10px] text-yellow-400"
                                        fill="currentColor"
                                    />
                                    <span>
                                        {(movie.rating / 10).toFixed(1)}
                                    </span>
                                    <span className="mx-[2px] text-space-color">
                                        |
                                    </span>
                                    <span>{movie.releaseYear}</span>
                                    <span className="text-space-color ml-[24px]">
                                        {movie.showType}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    );
};

export default MainContent;
