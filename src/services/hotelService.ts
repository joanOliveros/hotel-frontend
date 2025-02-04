import axios from "axios";
import { logStart, logRequest, logResponse, logEnd, logError } from "../utils/loggerUtils";
import { API_BASE_URL } from "../config";
import { Hotel } from "../interfaces/Hotel";

const API_URL = `${API_BASE_URL}/hotels`;

export const getHotels = async (): Promise<Hotel[]> => {
  const action = "OBTENCIÓN DE HOTELES";

  try {
    logStart(action);
    const response = await axios.get(API_URL);
    logResponse(action, response);
    logEnd(action);

    return response.data;
  } catch (error) {
    logError(action, error);
    throw error;
  }
};

export const createHotel = async (hotel: Hotel): Promise<Hotel> => {
  const action = "CREACIÓN DE HOTELES";

  try {
    logStart(action);
    logRequest(action, hotel);
    const response = await axios.post(API_URL, hotel);
    logResponse(action, response);
    logEnd(action);

    return response.data;
  } catch (error) {
    logError(action, error);
    throw error;
  }
};

export const updateHotel = async (id: number, hotel: Hotel): Promise<Hotel> => {
  const action = "ACTUALIZACIÓN DE HOTELES";

  try {
    logStart(action);
    logRequest(action, { id, hotel });
    const response = await axios.put(`${API_URL}/${id}`, hotel);
    logResponse(action, response);
    logEnd(action);

    return response.data;
  } catch (error) {
    logError(action, error);
    throw error;
  }
};

export const deleteHotel = async (id: number): Promise<void> => {
  const action = "ELIMINACIÓN DE HOTELES";

  try {
    logStart(action);
    logRequest(action, { id });
    const response = await axios.delete(`${API_URL}/${id}`);
    logResponse(action, response);
    logEnd(action);
  } catch (error) {
    logError(action, error);
    throw error;
  }
};
