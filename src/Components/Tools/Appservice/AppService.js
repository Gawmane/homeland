import Axios from "axios";

import ApiUrl from "./ApiUrl";
import { authHeader } from "./AuthHeader";

//Get - Henter alt (list)
const getList = endpoint => {
  return Axios.get(`${ApiUrl}/${endpoint}`, {
    // Tjekker hvis den er logget ind hvis det er nødvendigt (authHeader fra auth-header.js)
    headers: authHeader(),
  });
};

//Henter et argument ex artist ud fra id
const getDetails = (endpoint, id) => {
  return Axios.get(`${ApiUrl}/${endpoint}/${id}`, {
    headers: authHeader(),
  });
};

//Opretter - Endpoint= hvad vil du hente (fx stages, artist) Data = ararry af vores værdier
const create = (endpoint, data) => {
  return Axios.post(`${ApiUrl}/${endpoint}`, data, {
    headers: authHeader(),
  });
};

// Sletter token fra databasen (kun frontendt - da den kræver backend)
const logout = async () => {
  return await Axios.post(`${ApiUrl}/logout`, {
    headers: authHeader(),
  });
};

// Endpoint = Hvad vil du opdatere (artist eks -Agument) Id= hvilket id skal opdateres Data= vores værdier der skal opdater (nydata)
const update = (endpoint, id, data) => {
  return Axios.put(`${ApiUrl}/${endpoint}/${id}`, data, {
    headers: authHeader(),
  });
};

// Slet med id ("artist" , 23)
const remove = (endpoint, id) => {
  return Axios.delete(`${ApiUrl}/${endpoint}/${id}`, {
    headers: authHeader(),
  });
};


//Export alle sammen som metoder i vores obejkt appservice 
const appService = {
  getList,
  getDetails,
  create,
  update,
  remove,
  login,
  logout,
};

export default appService;
