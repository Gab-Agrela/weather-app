import { useContext } from "react";
import styled from "styled-components";
import { BsWind } from "react-icons/bs";
import { FaTemperatureHigh } from "react-icons/fa";

import { AppContext } from "../App";

const WeatherBoard = () => {
  const {
    state: { weatherConditions },
  } = useContext(AppContext);

  return (
    weatherConditions && (
      <Container>
        <Span>{weatherConditions.name}</Span>
        <img
          src={weatherConditions.icon.url}
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
            <Span>Km/h</Span>
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
`;

const ConditionsContainer = styled.div`
  width: 80%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: transparent;
`;

export { WeatherBoard };
