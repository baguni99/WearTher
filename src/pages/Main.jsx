import { useEffect, useState } from "react";
import React from "react";
import { GlobalStyle } from "../components/BackGround";
import CustomButton from "../components/Button";
import { Header, Logo } from "../components/Logo";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../components/Modal";
import { setWeatherNow } from "../redux/modules/weatherSlice";
const Main = () => {
  const dispatch = useDispatch();
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const modal = useSelector((state) => state.modal.show);
  //console.log("Modal state:", modalShow);
  const getWeatherByCurrentLocation = async (lat, lon) => {
    //비동기적으로 처리

    let url = `http://api.openweathermap.org/data/2.5/weather?lat=37.5665&lon=126.9780&APPID=b3bd3a62a36638732c39683a390282b0`;
    setLoading(true);
    let response = await fetch(url); //await을 쓰려면 async로 함수 선언해야함
    let data = await response.json(); //fetch를 쓸 땐 항상 json과 세트
    setWeather(data);
    setLoading(false);
    console.log("현재 날씨는?", data);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        getWeatherByCurrentLocation(
          position.coords.latitude,
          position.coords.longitude
        );
      },
      (error) => {
        console.error("날씨 정보 불러오기를 실패했습니다.", error);
      }
    );
  }, []);

  const weatherNow =
    weather && weather.main ? Math.floor(weather.main.temp - 273.15) : null;
  dispatch(setWeatherNow(weatherNow));
  const backGroundImg = (weatherNow) => {
    if (weatherNow <= 0) {
      return "/assets/coldWeather.jpg";
    } else if (weatherNow > 0 && weatherNow <= 10) {
      return "/assets/coolWeather.jpg";
    } else if (weatherNow > 10 && weatherNow <= 20) {
      return "/assets/niceWeather.jpg";
    } else if (weatherNow > 20 && weatherNow <= 30) {
      return "/assets/warmWeather.jpg";
    } else {
      return "/assets/hotWeather.jpg"; //이미지 불러올때 앞에 /public은 안써도 됨
    }
  };
  const bgimg = backGroundImg(weatherNow);
  const modalShow = useSelector((state) => state.modal.show);

  return (
    <div>
      <Header>
        <Logo src="assets/wearTher.png" />
        <Logo src="assets/logoIll.png" />
      </Header>
      <GlobalStyle bgimg={bgimg} />
      {weather ? (
        <div>
          <h1>현재 날씨는...</h1>
          <p>{weatherNow} °C</p>
          <p>{weather.weather[0].description}</p>
        </div>
      ) : (
        <p>No weather information to read</p>
      )}

      <CustomButton name="AddButton" />
      <CustomButton name="ViewButton" />
      {modalShow ? <Modal /> : null}
    </div>
  );
};

export default Main;
