
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