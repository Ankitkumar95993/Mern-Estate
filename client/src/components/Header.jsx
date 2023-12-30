import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParmas = new URLSearchParams(window.location.search);
    urlParmas.set("searchTerm", searchTerm);
    const searchQuery = urlParmas.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParmas = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParmas.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  return (
    <header className=" bg-white shadow-md  w-full z-20  ">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/" className="flex ">
          <img src="https://firebasestorage.googleapis.com/v0/b/mern-estate-5602f.appspot.com/o/WhatsApp%20Image%202023-12-30%20at%2014.41.29.jpeg?alt=media&token=7dace794-64e3-4564-b7b5-8afd0b7dfdbb" className="w-10 h-10"/>
          <h1 className="font-bold text-sm sm:text-2xl flex flex-wrap">
            <span className="text-slate-500">Habitat</span>
            <span className="text-slate-700">Hub</span>
          </h1>
        </Link>
 
        <form
          onSubmit={handleSubmit}
          className="bg-slate-100 p-3 rounded-lg flex items-center"
        >
          <input
            onChange={(e) => setSearchTerm(e.target.value)}
            type="text"
            placeholder="search..."
            value={searchTerm}
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <button>
            <FaSearch className="text-slate-600" />
          </button>
        </form>
        <ul className="flex gap-4">
          <Link to="/">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              About
            </li>
          </Link>

          <Link to="/profile">
            {currentUser ? (
              <img
                src={currentUser.avatar}
                alt="profile"
                className="h-7 w-7 rounded-full object-cover"
              />
            ) : (
              <li className="text-slate-700 hover:underline">Sign In</li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}
