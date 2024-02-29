const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();
// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API);

// ...


async function run () {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = "write a story about a magic backpack"
    const result = await model.generateContent(prompt);
    const response = await result.response  ;
    console.log(response);
    const text = await response.text();
    console.log(text);
    
}
run();