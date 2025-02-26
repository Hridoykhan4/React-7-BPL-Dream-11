import PropTypes from "prop-types";
import SelectedPlayers from "../SelectedPlayers/SelectedPlayers";
import AvailablePlayerSection from "../AvailablePlayerSection/AvailablePlayerSection";
const PlayerContainer = ({
  handleRemove,
  active,
  handleIsActive,
  handleChoosePlayer,
  cartPlayer,
}) => {
  return (
    <section className="mt-8">
      <div className="flex gap-7 justify-end sticky top-20 z-40">
        <button
          onClick={() => handleIsActive(true)}
          className={`font-bold btn text-black text-lg ${
            active && "btn-warning"
          }`}
        >
          Available
        </button>
        <button
          onClick={() => handleIsActive(false)}
          className={`font-bold btn text-black text-lg ${
            active || "btn-warning"
          }`}
        >
          Selected ({cartPlayer.length})
        </button>
      </div>
      <div className="my-5">
        {active ? (
          <AvailablePlayerSection
            handleChoosePlayer={handleChoosePlayer}
          ></AvailablePlayerSection>
        ) : (
          <SelectedPlayers handleRemove={handleRemove} handleIsActive={handleIsActive} cartPlayer={cartPlayer}></SelectedPlayers>
        )}
      </div>
    </section>
  );
};

export default PlayerContainer;

PlayerContainer.propTypes = {
  active: PropTypes.bool,
  handleIsActive: PropTypes.func,
  handleChoosePlayer: PropTypes.func,
  handleRemove: PropTypes.func,
  cartPlayer: PropTypes.array,
};
