import Groq from "groq-sdk";

// Initialize Groq client
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req) {
  try {
    const { question, lead } = await req.json();

    const systemPrompt = `You are Nova, SevenUnique's website assistant. 
SevenUnique Tech Solutions is a fintech & IT solutions provider specializing in:
- Web Development
- Mobile App Development
- Digital Marketing / SEO
- UI/UX Design
- AI & Chatbot Solutions

Answer user questions briefly, naturally, and helpfully. Do not make up prices or timelines—tell them the team will follow up for exact quotes.
If the user asks something completely unrelated, politely pivot back to SevenUnique's services.
If you don't know something specific, direct them to hello@sevenunique.com or let them know the team will get in touch.`;

    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: systemPrompt,
        },
        {
          role: "user",
          content: question,
        },
      ],
      model: "llama3-8b-8192",
      temperature: 0.5,
      max_tokens: 300,
    });

    const reply = chatCompletion.choices[0]?.message?.content || "";

    return Response.json({ reply });
  } catch (error) {
    console.error("Groq API Error:", error);
    return Response.json(
      { error: "Failed to fetch response from AI" },
      { status: 500 }
    );
  }
}
