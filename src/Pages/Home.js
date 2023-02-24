import React, { useState } from "react";
import "../index.css";
import axios from "axios";
import { CiLocationOn } from "react-icons/ci";
import { HiMagnifyingGlass } from "react-icons/hi2";
import ErrorImage from "../assets/img/placeholder.png";
import Card from "../components/Card/Card";
import image from "../assets/img/rain.png";

const Home = () => {
  const [value, setValue] = useState({ search: "" });
  const [weather, setWeather] = useState("");
  const [temperature, setTemperature] = useState("");
  const [description, setDescription] = useState("");
  const [humidity, setHumidity] = useState("");
  const [wind, setWind] = useState("");
  const [container, setContainer] = useState(
    "container mx-auto w-[95%] md:w-[400px] h-[105px] bg-white px-[10px] md:px-[28px] py-[32px] relative rounded-[18px]  "
  );
  const [weatherBox, setWeatherBox] = useState(
    "weather-box text-center scale-0 opacity-0"
  );
  const [weatherDetail, setWeatherDetail] = useState(
    "weather-details w-[100%] flex justify-between mt-[38px] scale-0 opacity-0"
  );

  const [notFound, setNotFound] = useState(
    "not-found w-[100%] text-center mt-[50px] scale-0 opacity-0 hidden"
  );

  // {temperature, description, humidity, wind}

  const handleChange = (e) => {
    e.preventDefault();
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const APIKey = "1539e7e138b39851eb6dc3ceedea2e67";

    if (value.search.length >= 0) {
      try {
        const data = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${value.search}&units=metric&lang=sp&appid=${APIKey}`
        );
        setTemperature(`${data.data.main.temp}ºC`);
        setDescription(data.data.weather[0].description);
        setHumidity(`${data.data.main.humidity} %`);
        setWind(`${data.data.wind.speed} Km/h`);
        setContainer(
          "container mx-auto w-[95%] md:w-[400px] h-[590px] bg-white px-[10px] md:px-[28px] py-[32px] relative rounded-[18px]  "
        );
        setWeatherBox("weather-box text-center scale-1 opacity-1");
        setWeatherDetail(
          "weather-details w-[100%] flex justify-between mt-[38px] scale-1 opacity-1"
        );
        setWeather(data.data.weather[0].main);
        setNotFound(
          "not-found w-[100%] text-center mt-[50px] scale-0 opacity-0 hidden"
        );
      } catch (error) {
        setContainer(
          "container mx-auto w-[95%] md:w-[400px] h-[460px] bg-white px-[10px] md:px-[28px] py-[32px] relative rounded-[18px]  "
        );
        setWeatherBox("weather-box text-center scale-1 opacity-1 hidden");
        setWeatherDetail(
          "weather-details w-[100%] flex justify-between mt-[38px] scale-1 opacity-1 hidden"
        );
        setNotFound(
          "not-found w-[100%] text-center mt-[50px] scale-1 opacity-1 block"
        );
      }
    }
  };

  return (
    <div className={container}>
      <div className="search-box w-[100%] h-min flex items-center justify-between">
        <CiLocationOn className="absolute text-[28px] text-[#062b3d]" />
        <input
          className="text-[#062b3D] w-[80%] text-[24px] font-medium uppercase pl-[32px]"
          type="text"
          placeholder="Ingresa tu ubicación"
          name="search"
          value={value.search}
          onChange={handleChange}
          required
        />
        <button
          onClick={handleSubmit}
          className="cursor-pointer w-[50px] h-[50px] bg-[#dff6ff] rounded-[50%] text-[#062b3d] text-[22px]  flex items-center justify-center hover:text-[#fff] hover:bg-[#062b3d]"
        >
          <HiMagnifyingGlass />
        </button>
      </div>
      <div className={notFound}>
        <img className="w-[70%] mx-auto" src={ErrorImage} alt="Oops!" />
        <p className="text-[#062b3d] text-[22px] font-medium mt-[12px]">
          Ohh! Error un la ubicación!
        </p>
      </div>
      <Card
        temperature={temperature}
        description={description}
        humidity={humidity}
        wind={wind}
        weatherBox={weatherBox}
        weatherDetail={weatherDetail}
        weather={weather}
      />
    </div>
  );
};

export default Home;
