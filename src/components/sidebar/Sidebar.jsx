import React from "react";
import { useSearchStore } from "../../store/useSearchStore";
import swords from "../../assets/img/svg/swords.svg";
import crime from "../../assets/img/svg/crime.svg";
import family from "../../assets/img/svg/family.svg";
import fantasy from "../../assets/img/svg/fantasy.svg";
import horror from "../../assets/img/svg/horror.svg";
import laughing from "../../assets/img/svg/laughing.svg";
import pixar from "../../assets/img/svg/pixar.svg";
import romance from "../../assets/img/svg/romance.svg";
import thriller from "../../assets/img/svg/triller.svg";
import ufo3 from "../../assets/img/svg/ufo3.svg";
import war from "../../assets/img/svg/war.svg";
import western2 from "../../assets/img/svg/Western2.svg";
import adventure from "../../assets/img/icons8-adventure-50.png";
import History from "../../assets/img/image(1).png";
import mystery from "../../assets/img/mystery-2.png";

const genres = [
    { id: "action", name: "Action", image: swords },
    { id: "adventure", name: "Adventure", image: adventure },
    { id: "romance", name: "Romance", image: romance },
    { id: "animation", name: "Animation", image: pixar },
    { id: "comedy", name: "Comedy", image: laughing },
    { id: "crime", name: "Crime", image: crime },
    { id: "family", name: "Family", image: family },
    { id: "fantasy", name: "Fantasy", image: fantasy },
    { id: "history", name: "History", image: History },
    { id: "horror", name: "Horror", image: horror },
    { id: "mystery", name: "Mystery", image: mystery },
    { id: "scifi", name: "Sci-Fi", image: ufo3 },
    { id: "thriller", name: "Thriller", image: thriller },
    { id: "war", name: "War", image: war },
    { id: "western", name: "Western", image: western2 },
];

const Sidebar = () => {
    const { selectedGenre, setSelectedGenre } = useSearchStore();
    console.log("Selected Genre:", selectedGenre);

    return (
        <aside className="pt-[6px] pl-[12px] w-[88px] border-solid border-r border-border-grey">
            <ul
                className="flex flex-col space-y-3 pr-[13px] pb-[9px] h-screen overflow-y-auto [scrollbar-color:rgb(62,65,68)_rgb(22,24,28)] 
             scroll-p-8"
            >
                {genres.map(({ id, name, image }) => (
                    <li
                        key={id}
                        onClick={() => setSelectedGenre(id)}
                        className={`flex gap-1.5 font-semibold text-[5.5px] text-searchbar items-center cursor-pointer py-[6px] px-[6px] my-[4px] hover:bg-button rounded-2xl ${
                            selectedGenre === id
                                ? "bg-button text-white rounded-2xl"
                                : ""
                        }`}
                    >
                        <img src={image} alt="name" className="w-[8px]" />
                        {name}
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default Sidebar;
