async function fetchStarWarsStarship() {
    try {
        
        const res = await fetch("https://www.swapi.tech/api/starships/9/");

        if (res.ok) {
            const data = await res.json();
        console.log(data);
        }else{
            console.log("error");
        }
            throw new Error("there was an issue");
        }catch(e){
            
            console.log(e);
        }
    } 
fetchStarWarsStarship();

