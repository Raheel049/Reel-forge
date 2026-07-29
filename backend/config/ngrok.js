import ngrok from "@ngrok/ngrok"

export const startNgrok = async ()  => {
   try {
    const Listener = await ngrok.forward({
        addr: 3000,
        authtoken: process.env.NGROK_AUTH_TOKEN
    })

    console.log(Listener.url())
   } catch (error) {
    console.log("errorNgrok",error)
   }
}