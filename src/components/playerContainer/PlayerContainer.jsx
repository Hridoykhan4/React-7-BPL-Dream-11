import PropTypes from "prop-types";
import SelectedPlayers from "../SelectedPlayers/SelectedPlayers";
import AvailablePlayerSection from "../AvailablePlayerSection/AvailablePlayerSection";
const PlayerContainer = ({ active, handleIsActive }) => {
  return (
    <section className="my-8">
      <div className="flex gap-7 justify-end">
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
          Selected (0)
        </button>
      </div>
      <div className="my-5">
        {active ? (
          <AvailablePlayerSection></AvailablePlayerSection>
        ) : (
          <SelectedPlayers></SelectedPlayers>
        )}
      </div>
    </section>
  );
};

export default PlayerContainer;

PlayerContainer.propTypes = {
  active: PropTypes.bool,
  handleIsActive: PropTypes.func,
};
