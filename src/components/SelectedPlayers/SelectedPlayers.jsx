import PropTypes from "prop-types";
import { MdDeleteForever } from "react-icons/md";

const SelectedPlayers = ({ cartPlayer, handleRemove, handleIsActive }) => {
  return (
    <div className="mt-10 space-y-5">
      <h3 className="text-2xl font-semibold">
        Selected Players ({cartPlayer.length} / 6)
      </h3>
      <div className="mt-5 flex justify-between flex-col gap-5">
        {cartPlayer.map((player) => (
          <div
            key={player.playerId}
            className="flex justify-between shadow-xl items-center"
          >
            <div className=" flex items-center gap-3 p-4">
              <img
                className="w-16 object-cover shrink-0 rounded-full h-16"
                src={player.image}
                alt=""
              />
              <div>
                <p className="font-semibold text-lg">{player.name}</p>
                <p className="font-medium">{player.role}</p>
              </div>
            </div>
            <div
              onClick={() => handleRemove(player.playerId)}
              className="text-2xl cursor-pointer btn text-error"
            >
              <MdDeleteForever className=" " />
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => handleIsActive(true)}
        className="mt-2 btn btn-warning text-black"
      >
        Add More Player
      </button>
    </div>
  );
};

SelectedPlayers.propTypes = {
  cartPlayer: PropTypes.array,
  handleRemove: PropTypes.func,
  handleIsActive: PropTypes.func,
};
export default SelectedPlayers;
