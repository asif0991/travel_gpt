import OpenAI from "openai";

const token = process.env["GITHUB_TOKEN"];
const endpoint = "https://models.github.ai/inference";
const model = "openai/gpt-4.1-mini";

export async function main() {

    const client = new OpenAI({ baseURL: endpoint, apiKey: token });

    const response = await client.chat.completions.create({
        messages: [
            {
                "role": "system",
                "content": "You are Travel-GPT, an AI assistant that only provides travel planning advice. Do not answer questions unrelated to travel, destinations, itineraries, budgets, or accommodations."
            },
            { 
                role: "user", content: "I am planning a 2 day visit to Mysore, Karnataka. Help me to find a good hotel and a 2 day itinerary for must visit places in Mysore."
            }
        ],
        temperature: 1,
        top_p: 1,
        model: model
    });

    console.log(response.choices[0].message.content);
}

main().catch((err) => {
    console.error("The sample encountered an error:", err);
});

