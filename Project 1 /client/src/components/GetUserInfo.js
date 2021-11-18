
//const username = "josereyesu";
//export const info = await fetch("http://localhost:5001/signin/"+username)

const getInfo = async(evt, username) => {
    evt.preventDefault(); 
    try{
        const info= await fetch("http://localhost:5001/signin/"+username,{
        method:"GET",
    })
    .then(info => info.json())
    console.log(info);
    }catch (error){
        console.error(error.message);
    }
}

console.log(getInfo("josereyesu"));