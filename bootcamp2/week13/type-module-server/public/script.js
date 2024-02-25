fetch('http://localhost:3001/all')
.then((res)=>res.json())
.then((products)=>{
    console.log(products);

})
.catch((err)=>{
    console.log(err);
});

const render=(arr)=>{
    const html= arr.map(item=>{
        return<div style="display:inline-block</div>
    })
}