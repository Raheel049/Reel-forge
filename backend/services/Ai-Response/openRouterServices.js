import axios from "axios";

export const askAI=async(messages,model)=>{
    try {
        if(!messages||!Array.isArray(messages)||messages.length===0){
            throw new Error("Invalid messages format");
        }

        const response=await axios.post('https://openrouter.ai/api/v1/chat/completions',
        {
            model: model,
            messages: messages
        },
         {headers: {
         Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
         'Content-Type': 'application/json',
         }}
        )
        const content=response?.data?.choices?.[0]?.message?.content
        // throw new Error("AI Return Empty Response");
        return content
    } catch (error) {
        throw new Error(error.message);
    }
}