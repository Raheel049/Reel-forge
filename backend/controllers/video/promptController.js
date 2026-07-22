import { generatePrompt } from "../../services/Ai-Response/promptService.js"
import { generateVideo } from "../../services/Ai-Response/videosService.js"

export const generateVideoController=async(req,res)=>{
    try {
        const {topic,videoDuration,aspectRatio,videoStyle,genre}=req.body

        if(!topic||!videoDuration||!aspectRatio||!videoStyle||!genre){
            return res.status(400).json({
                message:"Recquired Feilds are missing  ",
                status:false,
                data:null
            })
        }


        // const {videoPrompt}=await generatePrompt(req.body)


        const videoPrompt=`Generate a high-quality cinematic video that is exactly 2 seconds long.

Scene: A majestic golden lion slowly walks through a lush green jungle during sunrise. Warm golden sunlight filters through the trees, creating dramatic rays of light. The camera smoothly tracks the lion from a low angle, capturing realistic fur movement, natural shadows, and atmospheric depth. The environment is vibrant with gentle wind moving the leaves and subtle particles in the air. Ultra-realistic, highly detailed, cinematic color grading, smooth motion, professional wildlife documentary style, 9:16 vertical aspect ratio.

Duration: Exactly 2 seconds.`


        const videoRes=await generateVideo(videoPrompt)




    } catch (error) {
        console.log(error)
    }
}