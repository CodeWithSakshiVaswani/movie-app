import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSearchStore } from "../store/useSearchStore";

const BASE_URL = "https://streaming-availability.p.rapidapi.com";

const fetchMovies = async (genre, searchQuery) => {
    const endpoint = searchQuery
        ? `${BASE_URL}/shows/search/title`
        : `${BASE_URL}/shows/search/filters`;

    const params = searchQuery
        ? {
              title: searchQuery,
              country: "us",
              series_granularity: "show",
              output_language: "en",
              show_type: "movie",
          }
        : {
              genres: genre,
              country: "us",
              series_granularity: "show",
              order_direction: "asc",
              order_by: "release_date",
              genres_relation: "and",
              output_language: "en",
              show_type: "movie",
          };

    const res = await axios.get(endpoint, {
        params,
        headers: {
            "x-rapidapi-key": import.meta.env.VITE_RAPID_API_KEY,
            "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
        },
    });
    return res.data;
};

const useFetchMovies = () => {
    const { selectedGenre, searchQuery } = useSearchStore();

    return useQuery({
        queryKey: ["movies", selectedGenre, searchQuery],
        queryFn: () => fetchMovies(selectedGenre, searchQuery),
        enabled: !!selectedGenre || !!searchQuery,
    });
};

export default useFetchMovies;
