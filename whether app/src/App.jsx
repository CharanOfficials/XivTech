import { useState } from "react";
import "./App.css";
import axios from "axios";
import WeatherCard from "./components/WeatherCard";
import { SimpleGrid } from "@chakra-ui/react";
import { Input, Button, VStack, Text, Box } from "@chakra-ui/react";
import { data } from "./data/data.js";
function App() {
  const [cities, setCities] = useState([]);
  const [weathers, setWeathers] = useState();
  const handleCities = (cities) => {
    setCities(cities);
  };
  const handleSubmit = async () => {
    if (cities.length < 1) {
      return;
    }
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const url = "http://127.0.0.1:3000";
      const response = await axios.post(
        `${url}/getWeather`,
        {
          cities: JSON.stringify(cities),
        },
        config
      );
      console.log(response.data);
      if (response.status) setWeathers(response.data.data);
    } catch (err) {
      console.log("Error", err);
    }
  };
  return (
    <VStack
      m={4}
      w={"98vw"}
      h={"94vh"}
      display={"flex"}
      justifyItems={"center"}
      overflow={"scroll"}
    >
      <Text fontSize="6xl">WEATHER APP</Text>
      <Box display={"flex"}>
        <Input
          placeholder="Enter City Name"
          value={cities}
          onChange={(e) => handleCities(e.target.value)}
        />
        <Button onClick={() => handleSubmit()}>Go</Button>
      </Box>
      <Text opacity={"0.4"} mb={"1rem"}>
        Please use ( <b>,</b> ) for multiple Cities
      </Text>

      <SimpleGrid
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
      >
        {weathers?.map((weather, i) => (
          <WeatherCard key={i} weather={weather} />
        ))}
      </SimpleGrid>
    </VStack>
  );
}

export default App;
