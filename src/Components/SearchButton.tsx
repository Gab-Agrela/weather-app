import { useContext } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import styled from "styled-components";

import { AppContext } from "../App";

const API_KEY = import.meta.env.VITE_API_KEY;

const SearchButton = () => {
  const { state, setState } = useContext(AppContext);

  const handleClick = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${state.lat}&lon=${state.lon}&lang=pt_br&appid=${API_KEY}`
    );
    const data = await response.json();
    const weatherIcon = await fetch(
      `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    );
    const mountedWeatherObject = {
      temperature: Math.round(data.main.temp - 273.15),
      name: data.name,
      icon: weatherIcon,
      description: data.weather[0].description,
      wind: Math.round(data.wind.speed * 3.6),
    };
    setState({
      name: "",
      state: "",
      lat: "",
      lon: "",
      weatherConditions: mountedWeatherObject,
    });
  };
  return (
    <Button
      type="submit"
      disabled={!state.lat && !state.lon}
      onClick={handleClick}
    >
      <BiSearchAlt2
        size={25}
        color="white"
        style={{ backgroundColor: "transparent" }}
      />
    </Button>
  );
};

const Button = styled.button`
  width: 40px;
  height: 40px;
  padding: 5px;
  background-color: transparent;
  border: 2px solid #352f67;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    background-color: #352f67;
    transition: 0.5s;
  }
  &:disabled {
    cursor: not-allowed;
  }
`;

export { SearchButton };
