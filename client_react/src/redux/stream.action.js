import axios from "axios";
import { history } from "../App";

const BASE_URL = "http://localhost:3001";

export const fetchStreams = () => {
  return async dispatch => {
    const response = await axios.get(`${BASE_URL}/streams`);
    console.log(response);
    dispatch({
      type: "FETCH_STREAMS",
      payload: response.data
    });
  };
};

export const fetchStream = streamId => {
  return async dispatch => {
    const response = await axios.get(`${BASE_URL}/streams/${streamId}`);
    console.log(response);
    dispatch({
      type: "FETCH_STREAM",
      payload: response.data
    });
  };
};

export const createStrem = formValues => {
  return async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await axios.post(`${BASE_URL}/streams`, {
      ...formValues,
      userId
    });
    console.log(response);
    dispatch({
      type: "CREATE_STREAM",
      payload: response.data
    });
    history.push("/");
  };
};

export const editStream = (streamId, formValues) => {
  return async dispatch => {
    const response = await axios.patch(
      `${BASE_URL}/streams/${streamId}`,
      formValues
    );
    dispatch({
      type: "EDIT_STREAM",
      payload: response.data
    });
    history.push("/");
  };
};

export const deleteStream = streamId => {
  return async dispatch => {
    await axios.delete(`${BASE_URL}/streams/${streamId}`);
    dispatch({
      type: "DELETE_STREAM",
      payload: streamId
    });
    history.push("/");
  };
};
