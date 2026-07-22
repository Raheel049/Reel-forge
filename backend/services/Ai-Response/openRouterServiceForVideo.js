// import axios from "axios";

// export const askAiForVideo = async (messages) => {
//   try {
//     console.log("api function")
//     const response = await axios.post(
//       "https://openrouter.ai/api/v1/videos",
//       {
//         model: "",
//         prompt: messages
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
//           "Content-Type": "application/json",
//         }
        
//       }
//     );

//     return response.data;

//   } catch (error) {
//     throw new Error(
//       error.response?.data?.error?.message ||
//     error.response?.data?.message ||
//     error.message
//     );
//   }
// };




import { fal } from "@fal-ai/client";



fal.config({
    credentials: process.env.FAL_KEY
});


export const askAiForVideo = async (prompt) => {

    try {
          const result = await fal.subscribe(
        "bytedance/seedance-2.0/text-to-video",
        {
            input: {
                prompt
            }
        }
    );

    return result.data;
    } catch (error) {
        
        console.log(error)
           console.log("Status:", error.response?.status);
    console.log("Data:", error.response?.data);
    console.log("Message:", error.message);
    }
  
}