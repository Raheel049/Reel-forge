import { askAI } from "./openRouterServices.js";

export const generatePrompt =async (userInfo) => {
    try {

        const {topic,videoDuration,aspectRatio,videoStyle,genre}=userInfo

            

      const messages = [
  {
    role: "system",
    content: `
You are an expert AI video prompt engineer.

Your task is to convert the user's idea and preferences into a professional AI video generation prompt.

Rules:
- Expand the user's idea into a cinematic and detailed video prompt.
- Include subject, environment, lighting, camera movement, mood, composition, and visual quality.
- Respect the user's duration, style, genre, aspect ratio, and other preferences.
- Also generate a negative prompt to avoid common visual issues.
- Return strictly valid JSON only.
- Do not include markdown, explanations, or extra text.

Return this JSON format:

{
  "videoPrompt": "string",
  "negativePrompt": "string"
}
`
  },
  {
    role: "user",
    content: `
Idea: ${topic}

Duration: ${videoDuration} seconds
Style: ${videoStyle}
Genre: ${genre}
Aspect Ratio: ${aspectRatio}
`
  }
];


        const aiResponse = await askAI(messages,"openai/gpt-4o-mini");


           const cleanedResponse = aiResponse
            .replace(/```json/g, "")
            .replace(/```/g, "")
            .trim();

        const parsedData = JSON.parse(cleanedResponse);


        console.log("AI response",parsedData.videoPrompt)
        return parsedData.videoPrompt

    } catch (error) {
        throw `Error in Prompt Generation : ${error}`;
    }
}











