import React from "react";
import logo from "../../assets/img/Gold Line art Video Camera for Movie Cinema Production Logo.png";
import logo2 from "../../assets/img/Clean Modern Programmer Developer Web Designer Logo(1).png";
import { useSearchStore } from "../../store/useSearchStore";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { searchQuery, setSearchQuery } = useSearchStore();
  return (
    <nav className="flex justify-between items-center p-1.5 border-b-[0.5px] border-solid border-border-grey">
      {/*Left-logo*/}
      <Link to="/" className="w-9 h-9 cursor-pointer ml-1.5">
        <img src={logo} alt="logo" className="brightness-100" />
      </Link>
      <div className="flex items-center gap-4">
        {/*Search-section*/}
        <div className="flex items-center gap-2 border-[0.5px] rounded-md p-1 border-searchbar-border">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            viewBox="0 0 24 24"
            id="search"
            stroke="currentColor"
            className="text-searchbar ml-1.5"
          >
            <g
              fill="none"
              fill-rule="evenodd"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              transform="translate(2 2)"
            >
              <circle cx="9.767" cy="9.767" r="8.989"></circle>
              <line x1="16.018" x2="19.542" y1="16.485" y2="20"></line>
            </g>
          </svg>
          <input
            type="text"
            placeholder="Search everything"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="max-w-28 max-h-4 border-none outline-none placeholder: font-extralight placeholder: text-[8px] placeholder:text-placeholder-text"
          />
        </div>
        {/*Right-logo*/}
        <div className="w-7 h-7 mr-1.5">
          <img src={logo2} alt="logo2" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
