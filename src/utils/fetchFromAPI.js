import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    params: {
        maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': 'f953c9b75dmsh939bbd20dac64d8p17b34cjsnc68a9619279d',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }

  };
//   console.log(options.headers);
//   try {
//       const response = await axios.request(options);
//       console.log(response.data);
//   } catch (error) {
//       console.error(error);
//   }

export const fetchFromAPI = async(url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    
    return data;

}
