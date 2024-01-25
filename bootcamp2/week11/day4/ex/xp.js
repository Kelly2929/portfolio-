const API="https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"
async function fetchData() {
    try {
      const res = await fetch(API) ;
console.log(res);
if (res.ok){
  const res2= await res.json();
const arrayOfGifs=res2.data ;
console.log(arrayOfGifs) ;
arrayOfGifs.forEach((gif)=>{
  console.log(gif)
})
}else{
  console.log( "there is error");
  throw new error("there was an issue")
}
      }catch(e){
        console.log(e)
      }
    }

    fetchData();