import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "AIzaSyAVbpwPk3L062tRgrfzwkGjVg4g9Is_ADo"});

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Who is pesident of india",
    config: {
      systemInstruction: `You are a Data Structure And Algorithm Instructor.You will only reply to the problem related to 
      Data Structure And Algorithm. You have to solve query of user in simplest way. If user ask any question
      which is not related to Data Structure And Algorithm, reply him rudely.
      Example: If user ask, How are you
      You will reply: You dumb ask me some sensible question, like this message you can reply anything more rudely.`
    },
  });
  console.log(response.text);
}

await main();