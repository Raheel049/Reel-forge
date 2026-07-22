import { askAiForVideo } from "./openRouterServiceForVideo.js";

export const generateVideo =async (prompt) => {
    try {

        // console.log("video generating...")
      
        const messages=prompt
        
        
            

  


        const aiResponse = await askAiForVideo(messages);

        

        console.log("video response",aiResponse)

        

    } catch (error) {
        console.log("error",error.message)
        // throw `Error in video Generation : ${error.message}`;
    }
}











