
const showUrl = "https://project-1-api.herokuapp.com/showdates";
const commentUrl = "https://project-1-api.herokuapp.com/comments"
const apiKey = "77094f7d-6b54-4bdb-bae6-7542c07688fd";


async function showValue(){
  const response = await axios.get(`${showUrl}?api_key=${apiKey}`);
 return response.data;
  
}

async function commentValue(){
  const response = await axios.get(`${commentUrl}?api_key=${apiKey}`);

  // console.log(response);
  return response;
}



  
  export {showValue};
  export {commentValue};
  

