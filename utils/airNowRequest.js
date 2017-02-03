//Example request for zip code:
//http://www.airnowapi.org/aq/forecast/zipCode/?format=application/json&zipCode=84108&API_KEY=4552063A-66E3-474C-AA48-E08B90B0C6AE
import axios from 'axios';

const API_KEY = '4552063A-66E3-474C-AA48-E08B90B0C6AE';

const callZipCode = (zip) => {
  const request = 'http://www.airnowapi.org/aq/forecast/zipCode/?format=application/json&zipCode=' + zip + '&API_KEY=' + API_KEY;

  return axios.get(request);
}

const airNowRequest = {
  makeZipRequest(zip) {
    return callZipCode(zip)
      .then((response) => {
        return response;
      })
      .catch((err) => console.log(err));
  }
}

export default airNowRequest;
