


// const showUrl = "https://project-1-api.herokuapp.com/showdates";
// const commentUrl = "https://project-1-api.herokuapp.com/comments"
// const apiKey = "77094f7d-6b54-4bdb-bae6-7542c07688fd";


// async function showValue(){
//   const response = await axios.get(`${showUrl}?api_key=${apiKey}`);
//  return response.data;
  
// }

// async function commentValue(){
//   const response = await axios.get(`${commentUrl}?api_key=${apiKey}`);
//   return response;
// }

// async function postRequest(newComment){
//   try{
//     const response = await axios.post(`${commentUrl}?api_key=${apiKey}`, newComment, {
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });
//     return response; 
//   } catch(error){
//     throw error;
//   }
// }



//   export {postRequest};
//   export {showValue};
//   export {commentValue};
  



class BandSiteApi {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.showUrl = "https://project-1-api.herokuapp.com/showdates";
    this.commentUrl = "https://project-1-api.herokuapp.com/comments"
  }

  async postComment(comment) {
    try {
      const response = await axios.post(`${this.commentUrl}?api_key=${this.apiKey}`, comment, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      return response;
      
    } catch (error) {
      throw error;
    }
  }

  async getComments() {
    try {
      const response = await axios.get(`${this.commentUrl}?api_key=${this.apiKey}`);
      return response;
      
    } catch (error) {
      throw error;
    }
  }
  async getShows() {
    try {
      const response = await axios.get(`${this.showUrl}?api_key=${this.apiKey}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}


export default BandSiteApi;