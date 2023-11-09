interface WeatherConditions {
  temperature: number;
  name: string;
  icon: {
    url: string;
  };
  description: string;
  main: string;
  wind: number;
}
export interface Data {
  name: string;
  state: string;
  lat: string;
  lon: string;
  weatherConditions?: WeatherConditions;
}
export interface WeatherMap {
  [key: string]: string;
}
export interface BackgroundProp {
  backgroundColor: string;
}
