import axios from 'axios';



export const fetchCommentary = async () => {
     const options = {
       method: 'GET',
       url: 'https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/41881/comm',
       headers: {
         'x-rapidapi-key': '8664a92310mshd2d9f3b7275df93p182c5fjsnae459854c672',
         'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com',
       },
     };
   
     try {
       const response = await axios.request(options);
       return response.data; // Ensure this returns a Promise
     } catch (error) {
       console.error('Error fetching commentary data:', error);
       throw error;
     }
   };
   