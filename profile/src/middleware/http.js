const axios = require('axios').default;
const controller = new AbortController();
const hostUrl = "http://localhost:5000"
const url = {
    getListings : '/listings',
    getListingReview:'/listingReview'
};
// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    controller.abort()
  });

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    controller.abort()
  });
// Make a request for a user with a given ID
 async function getListings(){
    try {
        const response = await axios.get(hostUrl + url.getListings , {
            signal: controller.signal
         });
        // handle success
        return response;
    } catch (error) {
        // handle error
        console.log(error);
       
    }
}
async function getListingReview(){
    try {
        const response = await axios.get(hostUrl + url.getListingReview , {
            signal: controller.signal
         });
        // handle success
        return response;
    } catch (error) {
        // handle error
        console.log(error);
        
    }
}
export {getListings , getListingReview}