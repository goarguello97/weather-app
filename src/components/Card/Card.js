import React, { useEffect } from "react";
import { BsWater, BsWind } from "react-icons/bs";
import Clear from "../../assets/img/clear.png";
import Rain from "../../assets/img/rain.png";
import Snow from "../../assets/img/snow.png";
import Cloud from "../../assets/img/cloud.png";
import Mist from "../../assets/img/mist.png";

const Card = ({
  temperature,
  description,
  humidity,
  wind,
  weatherBox,
  weatherDetail,
  weather,
}) => {
  useEffect(() => {}, [temperature, weather]);

  const setImage = () => {
    switch (weather) {
      case "Clear":
        return Clear;

      case "Rain" || "Thunderstorm":
        return Rain;

      case "Snow":
        return Snow;

      case "Clouds":
        return Cloud;

      case "Haze":
        return Mist;
      default:
        return undefined;
    }
  };

  console.log(weather);
  return (
    <>
      <div className={weatherBox}>
        <img className="w-[60%] mx-auto mt-[38px]" src={setImage()} alt="" />
        <p className="temperature relative text-[#0623bd] text-[4rem] font-extrabold mt-[30px] ml-[-16px]">
          {temperature}
        </p>
        <p className="description text-[#062b3d] text-[22px] font-medium capitalize">
          {description}
        </p>
      </div>
      <div className={weatherDetail}>
        <div className="humidity flex text-center width-[50%] h-[100px] pl-[28px] justify-start">
          <BsWater className="text-[#062b3d] text-[26px] mr-[10px] mt-[6px]" />
          <div className="text">
            <span className="text-[#062b3d] text-[22px] font-medium">
              {humidity}
            </span>
            <p className="text-[#062b3d] text-[14px] font-medium">Humedad</p>
          </div>
        </div>
        <div className="wind flex text-center width-[50%] h-[100px] pr-[28px] justify-end">
          <BsWind className="text-[#062b3d] text-[26px] mr-[10px] mt-[6px]" />
          <div className="text">
            <span className="text-[#062b3d] text-[22px] font-medium">
              {wind}
            </span>
            <p className="text-[#062b3d] text-[14px] font-medium">
              Velocidad del viento
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
