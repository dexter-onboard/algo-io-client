import axios, { Axios } from "axios";


const checkStatus =  async (token: string) => {

const options = {
  method: 'GET',
  url: `https://judge0-ce.p.rapidapi.com/submissions/${token}`,
  params: {
    base64_encoded: 'true',
    fields: '*'
  },
  headers: {
    'X-RapidAPI-Key': '5d33b59cbdmsh508659090b291fep109f45jsn675cce9d02f4',
    'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
  }
};

try {
	let response = await axios.request(options);

    if(response.data.status.description === "Processing") {
        setTimeout(async () => {
            response =  await checkStatus(token);
        }, 5000)
    }

	console.log(response.data);
    return response.data;
} catch (error) {
	console.error(error);
}


}


export default checkStatus;