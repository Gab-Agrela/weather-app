import { useState, useEffect, useContext } from "react";
import styled from "styled-components";

import { Data } from "../types";
import { AppContext } from "../App";

const API_KEY = import.meta.env.VITE_API_KEY;

const InputSelect = () => {
  const { state, setState } = useContext(AppContext);
  const [citiesList, setCitiesList] = useState<Data[]>([]);

  useEffect(() => {
    const waitFinishTyping = setTimeout(async () => {
      const response = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${state.name.toUpperCase()}&limit=5&appid=${API_KEY}`
      );
      const data = await response.json();
      const transformedData = data.map(({ name, state, lat, lon }: Data) => ({
        name,
        state,
        lat,
        lon,
      }));
      setCitiesList(transformedData);
    }, 2000);

    return () => clearTimeout(waitFinishTyping);
  }, [state]);

  const handleOptionClick = (index: number) => {
    const city = citiesList[index];
    setState(city);
  };

  return (
    <SelectContainer>
      <Input
        type="text"
        placeholder="Pesquisar..."
        value={state.state ? `${state.name}, ${state.state}` : state.name}
        onChange={(e) => {
          setState({
            name: e.target.value,
            state: "",
            lat: "",
            lon: "",
          });
          setCitiesList([]);
        }}
      />
      {!state.weatherConditions && (
        <Select>
          {!citiesList.length && state.name ? (
            <Option>Carregando...</Option>
          ) : (
            citiesList.map(({ name, state }, index) => (
              <Option key={index} onClick={() => handleOptionClick(index)}>
                {`${name}, ${state}`}
              </Option>
            ))
          )}
        </Select>
      )}
    </SelectContainer>
  );
};

const SelectContainer = styled.div`
  max-width: 350px;
  color: whitesmoke;
  background-color: inherit;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 18px;
  color: inherit;
  background-color: inherit;
  border: none;
  border-bottom: 2px solid #352f67;
  &::placeholder {
    color: whitesmoke;
  }
`;

const Select = styled.ul`
  margin: 0;
  margin-top: 5px;
  padding: 0;
  list-style-type: none;
`;

const Option = styled.li`
  font-size: 16px;
  padding: 5px;
  background-color: #685d9b;
  border-bottom: 2px solid #352f67;
  cursor: pointer;
  &:hover {
    background-color: #352f67;
    transition: 0.5s;
  }
`;

export { InputSelect };
