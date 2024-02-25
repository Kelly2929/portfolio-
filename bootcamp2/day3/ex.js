// const getChuckNorrisjoke=()=>{
//     console.log("joke");
//     fetch("https://api.chucknorris.io/jokes/random?category={category}")
//     .then((res) =>
//     if (res.ok){
//         return res.jason();
//     } else{
//         throw new error ("something went wrong");
//     }
//     }
//     .then((data))=>{
//         console.log(data);
//     }
// }

const getChuckNorrisjoke=()=>{
    console.log("joke");
    fetch("https://api.chucknorris.io/jokes/random?category=music")
    .then((res)=>{
        if (res.ok){
            return res.json()
        }else{
            console.log("There was an error")
        }
    })
   
}

getChuckNorrisjoke()
