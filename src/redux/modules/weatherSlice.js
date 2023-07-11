import { createSlice } from "@reduxjs/toolkit";

export const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    weatherNow: null,
  },
  reducers: {
    setWeatherNow: (state, action) => {
      state.weatherNow = action.payload; //action.payload는 weather
    },
  },
});

export const { setWeatherNow } = weatherSlice.actions;
export const selectWeatherNow = (state) => state.weather.weatherNow;
export default weatherSlice.reducer;
