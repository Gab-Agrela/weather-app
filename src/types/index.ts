interface WeatherConditions {
  temperature: number;
  name: string;
  icon: {
    url: string;
  };
  description: string;
  wind: number;
}

export interface Data {
  name: string;
  state: string;
  lat: string;
  lon: string;
  weatherConditions?: WeatherConditions;
}
