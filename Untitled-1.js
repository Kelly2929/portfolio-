 //filter for all users older than 30
// and store their data in an array
// use Array.filter Array.map Object.keys



[
  {id:'user1',age:44, name: 'picard'},
  {id:'user3',age:109, name: 'janeway'}
]
const users ={
 
    user1: { age: 44, name: 'picard' },
    user2: { age: 12, name: 'sisko' },
    user3: { age: 109, name: 'janeway' },
  };
  
  const result = Object.keys(users)
    .map(key => ({ id: key, ...users[key] }))
    .filter(user => user.age >= 30);
  
  console.log(result);
  

