import { useContext } from "react";
import styled from "styled-components";
import { BsWind } from "react-icons/bs";
import { FaTemperatureHigh } from "react-icons/fa";

import { AppContext } from "../App";
import { weatherImage } from "../utils/images.ts";

const WeatherBoard = () => {
  const {
    state: { weatherConditions },
  } = useContext(AppContext);

  const getCorrectImage = (weather: string, icon: { url: string }) => {
    const isNigth = icon && icon.url.split("@")[0].slice(-1) === "n";
    if (weather === "Clear")
      return isNigth ? weatherImage.clearNight : weatherImage.clearDay;
    if (weather === "Clouds")
      return isNigth ? weatherImage.cloudNight : weatherImage.cloudDay;
    if (weather === "Rain" || weather === "Drizzle") return weatherImage.rain;
    if (weather === "Snow") return weatherImage.snow;
    if (weather === "Thunderstorm") return weatherImage.thunderstorm;
    return icon.url || weatherImage.notFound;
  };

  return (
    weatherConditions && (
      <Container>
        <Span>{weatherConditions.name}</Span>
        <Span style={{ fontSize: "22px" }}>
          {weatherConditions.description}
        </Span>
        <img
          src={getCorrectImage(weatherConditions.main, weatherConditions.icon)}
          alt={weatherConditions.description}
          width={200}
          height={200}
          style={{ backgroundColor: "transparent" }}
        />
        <ConditionsContainer>
          <Span>
            <FaTemperatureHigh
              size={20}
              color="white"
              style={{
                backgroundColor: "transparent",
                marginRight: "10px",
              }}
            />
            {weatherConditions.temperature}
            <Span>ºC</Span>
          </Span>
          <Span>
            <BsWind
              size={20}
              color="white"
              style={{
                backgroundColor: "transparent",
                marginRight: "10px",
              }}
            />
            {weatherConditions.wind}
            <Span style={{ textTransform: "none" }}>Km/h</Span>
          </Span>
        </ConditionsContainer>
      </Container>
    )
  );
};

const Container = styled.div`
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: whitesmoke;
  font-size: 26px;
  background-color: transparent;
`;

const Span = styled.span`
  background-color: transparent;
  text-transform: capitalize;
`;

const ConditionsContainer = styled.div`
  width: 80%;
  height: 50px;
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: transparent;
`;

export { WeatherBoard };
