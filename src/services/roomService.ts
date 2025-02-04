import axios from "axios"
import {
  logStart,
  logRequest,
  logResponse,
  logEnd,
  logError,
} from "../utils/loggerUtils"
import { API_BASE_URL } from "../config"
import { Room } from "../interfaces/Room"

const API_URL = `${API_BASE_URL}/rooms`

export const getRooms = async (): Promise<Room[]> => {
  const action = "OBTENCIÓN DE HABITACIONES"

  try {
    logStart(action)
    const response = await axios.get(API_URL)
    return response.data
  } catch (error) {
    logError(action, error)
    throw error
  }
}

export const createRoom = async (room: Room): Promise<Room> => {
  const action = "CREACIÓN DE HABITACIONES"

  try {
    logStart(action)
    logRequest(action, room)
    const response = await axios.post(API_URL, room)
    logResponse(action, response)
    logEnd(action)

    return response.data
  } catch (error) {
    logError(action, error)
    throw error
  }
}

export const updateRoom = async (id: number, room: Room): Promise<Room> => {
  const action = "ACTUALIZACIÓN DE HABITACIONES"

  try {
    logStart(action)
    logRequest(action, { id, room })
    const response = await axios.put(`${API_URL}/${id}`, room)
    logResponse(action, response)
    logEnd(action)

    return response.data
  } catch (error) {
    logError(action, error)
    throw error
  }
}

export const deleteRoom = async (id: number): Promise<void> => {
  const action = "ELIMINACIÓN DE HABITACIONES"

  try {
    logStart(action)
    logRequest(action, { id })
    const response = await axios.delete(`${API_URL}/${id}`)
    logResponse(action, response)
    logEnd(action)
  } catch (error) {
    logError(action, error)
    throw error
  }
}
