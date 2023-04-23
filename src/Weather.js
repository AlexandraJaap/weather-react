import React, { startTransition } from "react";
import axios from "axios";
import { Audio } from "react-loader-spinner";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The weather in ${response.data.name} is ${Math.round(
        response.data.main.temp
      )}°C`
    );
  }
  let apiKey = "dcb66753beab8eeb43ed7f4376e3244e";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&APPID=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <Audio
      height="80"
      width="80"
      radius="9"
      color="orange"
      ariaLabel="loading"
      wrapperStyle
      wrapperClass
    />
  );
}
