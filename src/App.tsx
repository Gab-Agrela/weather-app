import { createContext, useState } from "react";
import styled from "styled-components";
import { FaLocationDot } from "react-icons/fa6";

import "./App.css";
import { Data } from "./types";
import { InputSelect } from "./Components/InputSelect";
import { SearchButton } from "./Components/SearchButton";
import { WeatherBoard } from "./Components/WeatherBoard";

type AppContextType = {
  state: Data;
  setState: React.Dispatch<React.SetStateAction<Data>>;
};

export const AppContext = createContext({} as AppContextType);

function App() {
  const [state, setState] = useState<Data>({
    name: "",
    state: "",
    lat: "",
    lon: "",
  });

  return (
    <AppContext.Provider value={{ state, setState }}>
      <Container>
        <WeatherContainer>
          <SearchContainer>
            <FaLocationDot
              size={20}
              color="white"
              style={{ backgroundColor: "transparent", marginTop: "10px" }}
            />
            <InputSelect />
            <SearchButton />
          </SearchContainer>
          <WeatherBoard />
        </WeatherContainer>
      </Container>
    </AppContext.Provider>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WeatherContainer = styled.div`
  @media (min-width: 320px) {
    width: 100%;
  }
  @media (min-width: 450px) {
    width: 70%;
  }
  @media (min-width: 641px) {
    width: 50%;
  }
  @media (min-width: 961px) {
    width: 35%;
  }
  @media (min-width: 1380px) {
    width: 25%;
  }
  height: 500px;
  border-radius: 30px;
  background-color: #685d9b;
  padding: 30px;
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  background-color: inherit;
`;

export default App;
