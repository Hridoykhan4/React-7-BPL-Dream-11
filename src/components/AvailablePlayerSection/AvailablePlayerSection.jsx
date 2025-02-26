import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { FaFlag, FaUser } from "react-icons/fa";

const AvailablePlayerSection = ({ handleChoosePlayer }) => {
  const [players, setPlayers] = useState([]);
  const [temp, setTemp] = useState([]);
  useEffect(() => {
    fetch("player.json")
      .then((res) => res.json())
      .then((data) => {
        setPlayers(data);
        setTemp(data);
      });
  }, []);

  const handleSearch = (e) => {
    const target = e.target.value;
    if (target.trim()) {
      const addSearchItems = [];
      for (const e of temp) {
        if (e.name.toLowerCase().includes(target.toLowerCase())) {
          addSearchItems.push(e);
        }
      }
      if (addSearchItems) {
        setPlayers(addSearchItems);
      }
    } else {
      setPlayers(temp);
    }
  };

  return (
    <div>
      <div>
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            onChange={(e) => handleSearch(e)}
            type="search"
            className="text-lg font-medium tracking-wide"
            required
            placeholder="Search Player"
          />
        </label>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-7">
        {players.map((player) => (
          <div
            key={player.playerId}
            className="card bg-base-100 shadow-xl py-3 px-2"
          >
            <figure className="h-80">
              <img
                src={player?.image}
                className="rounded-xl w-full h-full object-cover"
              />
            </figure>
            <div className="px-2 py-2 space-y-5 mt-3">
              <h2 className="card-title">
                <FaUser /> {player?.name}
              </h2>
              <div className="flex justify-between">
                <div className="flex items-center gap-3 font-medium text-gray-700 text-lg">
                  <FaFlag />
                  {player?.country}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-700">
                    {player?.role}
                  </h3>
                </div>
              </div>
              <hr className="opacity-35 my-4" />
              <p className="font-bold text-lg">Rating</p>
              <div className="flex justify-between items-center">
                <p className="text-gray-600 font-medium">
                  {player?.battingType || "N/A"}
                </p>
                <p className="text-gray-600 font-medium">
                  {player?.bowlingType}
                </p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-gray-600 font-medium">
                  Price: ${player?.biddingPrice}
                </p>
                <button
                  onClick={() => handleChoosePlayer(player)}
                  className="btn bg-sky-300"
                >
                  Choose Player
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

AvailablePlayerSection.propTypes = {
  handleChoosePlayer: PropTypes.func,
};

export default AvailablePlayerSection;
