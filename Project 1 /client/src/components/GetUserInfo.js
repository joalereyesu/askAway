
function GetUserInfo (username){
    const response= fetch("http://localhost:5001/homepage/"+username,{
        method:"GET",
    })  
    .then(response => response.json())
    return response;
}

export default GetUserInfo;