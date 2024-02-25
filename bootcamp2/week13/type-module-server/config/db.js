import knex from "knex";

export const db=knex({
    client:"pg",
    connection:{
        host:"localhost",
        port:5432,
        user:"postgres",
        database: "cours",
        password:"123456"
    }
})

console.log(db);

db("products").select("id","name","price").orderBy("name")
.then(rows=>{
    console.log(rows);
})
.then(err=>{
    console.log(err);
})
