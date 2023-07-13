import { useEffect, useState } from "react";
import React from "react";
import { GlobalStyle } from "../components/BackGround";
import CustomButton from "../components/Button";
import { Header, Logo } from "../components/Logo";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../components/Modal";
import { setWeatherNow } from "../redux/modules/weatherSlice";
import {
  MainTitle,
  MessageBubble1,
  MessageBubble2,
  MainItems,
} from "../components/Text";
import { MainButtons } from "../components/ButtonStyle";
const Main = () => {
  const dispatch = useDispatch();
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const apiURL = process.env.REACT_APP_API_URL;
  const modal = useSelector((state) => state.modal.show);
  //console.log("Modal state:", modalShow);
  const getWeatherByCurrentLocation = async (lat, lon) => {
    //비동기적으로 처리
    setLoading(true);
    let response = await fetch(apiURL); //await을 쓰려면 async로 함수 선언해야함
    let data = await response.json(); //fetch를 쓸 땐 항상 json과 세트
    setWeather(data);
    setLoading(false);
    console.log("현재 날씨는?", data);
  };

  // weatherNow 값을 설정
  const weatherNow =
    weather && weather.main ? Math.floor(weather.main.temp - 273.15) : null;

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
      <MainItems>
        {weather ? (
          <div>
            <MainTitle>Today's Weather</MainTitle>
            <MessageBubble1>{weatherNow} °C</MessageBubble1>
            <MessageBubble2>{weather.weather[0].description}</MessageBubble2>
          </div>
        ) : (
          <p>Loading...</p>
        )}
        <MainButtons>
          <CustomButton name="AddButton" />
          <CustomButton name="ViewButton" />
        </MainButtons>
        {modalShow ? <Modal /> : null}
      </MainItems>
    </div>
  );
};

export default Main;
