import { createSlice, createAction } from "@reduxjs/toolkit";
import { takeLatest, call, put } from "redux-saga/effects";

const swapiDataSlice = createSlice({
  name: "swapiData",
  initialState: "",
  reducers: {
    getData: (prevState, action) => {
        return action.payload;
    }
  },
});

function* getSwapiDataHandler(action) {    
  try {
    const data = yield call(async () => {
      const resp = await fetch(action.payload, {
        method: "GET",
      });

      console.log('resp => ', resp);
      return await resp.json();
    });

    yield put(swapiDataSlice.actions.getData(data));
  } catch (err) {
    yield put({ type: "GET_DATA_ERROR", payload: err });
  }
}

export const getSwapiDataAsync2 = createAction('GET_SWAPI_DATA');

export const saga = function* () {
  yield takeLatest(getSwapiDataAsync2, getSwapiDataHandler);
};

export default swapiDataSlice.reducer;
