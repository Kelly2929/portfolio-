document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault(); 

   
    let name = document.getElementById('name').value;
    let lastName = document.getElementById('lastName').value

    
    const data = {
        name: name,
        lastName: lastName
    };

   
    const jsonStr = JSON.stringify(data);
    
    document.getElementById('result').innerText = jsonStr;
});
