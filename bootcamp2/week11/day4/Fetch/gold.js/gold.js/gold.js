const apiKey = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
const apiUrl=`https:api.giphy.com/v1/gifs/random?api_key=${apiKey}`;
 
async function fetchGif(){
    try{
        const res=await fetch (apiUrl);
        if (!res.ok){
            throw new Error(`error status:${res.status})`);
        }
        const data=await res.json();
        const gifUrl=data.data.imags.original.url;
        appendgiToPage(gifUrl)
    }catch(e){
        console.log(e);
    }

    }
    function appendgifToPage(gifUrl){
        const img=document.createElement(`img`);
        img.src=gifUrl;
        img.alt=`Random Gif`;
        document.body.appendChild(img)
    }
    fetchGif();


