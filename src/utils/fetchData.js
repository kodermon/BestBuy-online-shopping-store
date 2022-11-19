export const productOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.RAPID_API_KEY,
      'X-RapidAPI-Host': 'asos2.p.rapidapi.com'
    }
  };


export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json()
}