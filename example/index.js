import PoleEmploi from "pole-emploi";
import dotenv from "dotenv"
// create an .env file that contain your API_KEY and API_SECRET
dotenv.config()

const PoleEmploiClient = new PoleEmploi({
    apiKey: process.env.API_KEY,
    apiSecret: process.env.API_SECRET
})

PoleEmploiClient.search({
    theme: 6,
    natureContrat: "E2",
    motsCles: "naval",
}).then((data) => {
    console.log(data)

})
