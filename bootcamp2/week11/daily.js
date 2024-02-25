
function makeAllCaps(words) {
    return new Promise((resolve, reject)=>{
        if (words.every(word=>typeof word=== 'string')){
            resolve (words.map(word=> word.toUppercase()));

        }else {

            reject( 'error : not all items are strings');
        }
        });
    }

    function sortWords(words){
        return new Promise((resolve, reject)=>{
            if( words.lentght >4 ){
                resolve (words.sort());
            } else {
                reject ('the array need to have more than 4 words')
            }
        });
    }
        
//ex2
 
 function toJs(jsonString) {
    return new Promise((resolve, reject) => {
        const morseObject = JSON.parse(jsonString);
        
        if (Object.keys(morseObject).length == 0) {
            reject(new Error('Error: the Morse JavaScript object is empty.'));
        } else {
            resolve(morseObject);
        }
    });
}


toJs(morseJsonString)

    .then(morseObject => console.log('Morse JavaScript Object:', morseObject))
    .catch(error => console.error(error));

    function toMorse(morseJS) {
        
            const word= prompt ('enter a word')
            return new Promise((resolve, reject) => {
            resolve(word);

            
    });
    
toJs()
.then((morseObj)=>toMorse(morseObj))
.then((res)=>console.log(res))
.catch((err))=> console.error(err));