
const apiKey = 'YOUR_API_KEY';
const searchTerm = 'giftsun';
const limit = 10;
const offset = 2;


async function fetchSunGifs() {
  try {
   
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&limit=${limit}&offset=${offset})`;

    const response = await fetch(url);

   
    if (resp.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('error', error);
  }
}
