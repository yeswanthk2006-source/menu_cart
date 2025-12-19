
import { GoogleGenAI } from "@google/genai";

const getAIClient = () => {
  return new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
};

export const getDishStory = async (dishName: string): Promise<string> => {
  const ai = getAIClient();
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Write a short, appetizing, 2-sentence poetic description for a dish called "${dishName}". Make it sound luxurious and inviting.`,
      config: {
        temperature: 0.7,
      },
    });
    return response.text || "A culinary masterpiece prepared with the finest ingredients.";
  } catch (error) {
    console.error("AI Error:", error);
    return "This dish is a signature creation from our head chef.";
  }
};

export const getChefRecommendation = async (preferences: string): Promise<string> => {
  const ai = getAIClient();
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are the Head Chef at Flavoria. A customer says: "${preferences}". Based on this, suggest one dish type (Veg, Non-Veg, or Dessert) and why they would love it in 20 words or less.`,
      config: {
        temperature: 0.9,
      },
    });
    return response.text || "I recommend our chef's specials today!";
  } catch (error) {
    console.error("AI Error:", error);
    return "Let me know your tastes and I'll find the perfect dish for you.";
  }
};
