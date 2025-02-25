import { useState } from "react";
import "./App.css";
import Banner from "./components/Header/Banner/Banner";
import Header from "./components/Header/Header";
import PlayerContainer from "./components/playerContainer/PlayerContainer";

function App() {
  const [active, setActive] = useState(true);

  const handleIsActive = (state) => {
    state ? setActive(true) : setActive(false);
  };

  return (
    <>
      <Header></Header>
      <Banner></Banner>

      <main className="max-w-[1440px] w-11/12 mx-auto">
        <PlayerContainer
          handleIsActive={handleIsActive}
          active={active}
        ></PlayerContainer>
      </main>
    </>
  );
}

export default App;
