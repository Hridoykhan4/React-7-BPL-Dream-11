import { useEffect, useState } from "react";
import { FaFlag, FaUser } from "react-icons/fa";

const AvailablePlayerSection = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("player.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  return (
    <div className="grid sm:grid-cols-3 gap-6 mt-7">
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
              <p className="text-gray-600 font-medium">{player?.bowlingType}</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-gray-600 font-medium">
                Price: ${player?.biddingPrice}
              </p>
              <button>Choose Player</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AvailablePlayerSection;
