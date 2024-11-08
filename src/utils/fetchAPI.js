import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
    "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchAPI = async (url) => {
  //get hanya properti data
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};

// pake await
//*await memberitahu JS untuk "menunggu" hingga axios.get selesai mendapatkan respons dari server, baru kemudian melanjutkan eksekusi next kode
// *await membantu menunggu respons API dgn cara yang lebih mudah dibaca,
// karena bisa pake then dan catch tp await lebih bagus
