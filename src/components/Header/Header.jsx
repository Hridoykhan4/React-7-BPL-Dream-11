import logo from "/src/assets/logo.png";
import dollar from "/src/assets/dollar.png";
import PropTypes from "prop-types";
const Header = ({budget}) => {
  return (
    <header className="max-w-[1440px] py-2 sticky top-0 backdrop-blur-xl z-20 w-11/12 mx-auto">
      <nav className="flex justify-between items-center">
        <div>
          <img src={logo} alt="" />
        </div>
        <div>
          <ul className="menu flex items-center menu-horizontal px-1">
            <li>
              <a className="font-medium text-black hidden sm:flex">Home</a>
            </li>
            <li>
              <a className="font-medium text-black hidden sm:flex">Fixture</a>
            </li>
            <li>
              <a className="font-medium text-black hidden sm:flex">Teams</a>
            </li>
            <li>
              <a className="font-medium text-black hidden sm:flex">Schedules</a>
            </li>
            <li className="bg-white">
              <button className="btn">
                {budget} Coin <img className="w-5" src={dollar} alt="" />
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};


Header.propTypes = {
  budget: PropTypes.number
}
export default Header;
