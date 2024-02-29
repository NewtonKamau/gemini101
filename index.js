const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API);

// ...

const model = genAI.getGenerativeModel({ model: "MODEL_NAME"});

// ...