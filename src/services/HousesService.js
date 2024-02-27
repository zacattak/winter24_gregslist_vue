import { AppState } from "../AppState";
import { House } from "../models/House";
import { logger } from "../utils/Logger";
import { api } from "./AxiosService";

class HousesService {
    async getHouses() {
        const response = await api.get('api/houses')
        logger.log('GOT HOUSES', response.data)
        const newHouses = response.data.map(housePOJO => new House(housePOJO))
        AppState.houses = newHouses
    }
}

export const housesService = new HousesService()