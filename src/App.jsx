import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import PlayerContainer from "./components/playerContainer/PlayerContainer";
import Banner from "./components/Banner/Banner";
import { Bounce, Slide, toast } from "react-toastify";
import NewsLetter from "./components/NewsLetter/NewsLetter";
import Footer from "./components/Footer/Footer";
import { addToLS, removeFromLS } from "./utils/localstorage";

function App() {
  const [active, setActive] = useState(true);
  const [budget, setBudget] = useState(0);
  const [cartPlayer, setCartPlayer] = useState([]);

  const handleIsActive = (state) => {
    state ? setActive(true) : setActive(false);
  };

  const handleFreeCredit = (money) => {
    setBudget((prev) => prev + money);
    toast.success("Credit added to your Account", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Slide,
    });
  };

  const handleChoosePlayer = (sportMan) => {
    const isExist = cartPlayer.find(
      (player) => player.playerId === sportMan.playerId
    );
    if (!isExist) {
      if (cartPlayer.length >= 6) {
        toast.error("Your Squad is full", {
          position: "top-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        return;
      }

      if (sportMan.biddingPrice > budget) {
        toast.error(
          `Not Enough money to buy ${sportMan.name}.Claim Some Credit`,
          {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          }
        );
      } else {
        setCartPlayer([...cartPlayer, sportMan]);
        addToLS(sportMan.playerId);
        setBudget((prev) => prev - sportMan.biddingPrice);
        toast.success(`Congrats!! ${sportMan.name} is now in your squad`, {
          position: "top-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    } else {
      toast.error(
        `${sportMan.name} is already in your squad.Can not select twice`,
        {
          position: "top-bottom",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        }
      );
    }
  };

  const handleRemove = (id) => {
    const findName = cartPlayer.find((player) => player.playerId === id);
    removeFromLS(id);
    setBudget((prev) => prev + findName.biddingPrice);
    const remaining = cartPlayer.filter((player) => player.playerId !== id);
    toast.warn(`${findName.name} is out of your squad`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
    setCartPlayer(remaining);
  };

  return (
    <>
      <Header budget={budget}></Header>
      <Banner handleFreeCredit={handleFreeCredit}></Banner>
      <main className="max-w-[1440px] w-11/12 mx-auto">
        <PlayerContainer
          setCartPlayer={setCartPlayer}
          handleRemove={handleRemove}
          cartPlayer={cartPlayer}
          handleChoosePlayer={handleChoosePlayer}
          handleIsActive={handleIsActive}
          active={active}
        ></PlayerContainer>
        <NewsLetter></NewsLetter>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
