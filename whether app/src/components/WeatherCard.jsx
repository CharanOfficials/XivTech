import React from "react";
import { TbTemperatureCelsius } from "react-icons/tb";
import {
  SimpleGrid,
  Card,
  Heading,
  Button,
  Text,
  Box,
  CardHeader,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";
const WeatherCard = ({ weather }) => {
  return (
    <Card width={"20rem"} border={"1px"}>
      <CardHeader>
        <Heading size="md">
          {weather.location.name}, {weather.location.region},{" "}
          {weather.location.country}
        </Heading>
      </CardHeader>
      <CardBody>
        <Box display={"flex"}>
          <Text mr={2}>
            <b>Temperature: </b>
          </Text>
          {weather.current.temperature}
          <TbTemperatureCelsius fontSize={"1.3rem"} />
        </Box>
        <Text>
          <b>Is Day ?:</b> {weather.current.is_day}
          &nbsp; <br />
          <b>Observation Time:</b> {weather.current.observation_time}
        </Text>
      </CardBody>
    </Card>
  );
};

export default WeatherCard;
