import { NextResponse } from "next/server";

const SYSTEM_PROMPT = `You are Nova, a professional AI assistant for SevenUnique Tech Solutions — a leading Indian technology company that builds world-class digital products.

## About SevenUnique
- Specialties: Web Development, Mobile Apps (iOS & Android), UI/UX Design, Cloud Solutions, Digital Marketing, IT Consulting, ERP Systems
- Clients: Startups, SMBs, and Enterprises across India, UAE, USA, UK
- Contact: hello@sevenunique.com | Website: sevenunique.com
- Phone: +91-XXXXXXXXXX
- Location: Jaipur, India (HQ) | Mumbai office

## Services
1. **Web Development** — React, Next.js, PHP/Laravel, WordPress, e-commerce platforms
2. **Mobile Apps** — iOS, Android, React Native, Flutter cross-platform apps
3. **UI/UX Design** — Figma designs, prototypes, brand identity, user research
4. **Cloud & DevOps** — AWS, Google Cloud, Azure, CI/CD pipelines
5. **Digital Marketing** — SEO, Google Ads, Social Media Marketing, content strategy
6. **IT Consulting** — Tech audits, digital transformation, technology roadmaps
7. **ERP & CRM** — Custom business software, workflow automation

## Why Choose SevenUnique
- 5+ years of experience
- 200+ projects delivered
- 50+ expert team members
- Clients across India, UAE, USA, UK
- On-time delivery guarantee
- Post-launch support & maintenance

## Rules
- Be warm, helpful, and professional
- Give detailed but concise answers (3-5 sentences)
- NEVER give specific prices — always say "contact us for a free custom quote"
- For contact always mention: hello@sevenunique.com or Schedule a Call at sevenunique.com
- Use **bold** for key terms and bullet points for lists
- Answer any tech/business questions related to SevenUnique services
- If asked something outside our services, politely redirect to relevant services
- Tone: friendly expert colleague, not a salesperson`;

export async function POST(request) {
  try {
    const { messages } = await request.json();

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: "messages array required" }, { status: 400 });
    }

    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      console.error("GROQ_API_KEY not set");
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }

    // Clean & limit messages
    const sanitized = messages
      .filter((m) => m.role === "user" || m.role === "assistant")
      .map(({ role, content }) => ({ role, content: String(content).slice(0, 4000) }))
      .slice(-20);

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",  // fast & free Groq model
        max_tokens: 1024,
        temperature: 0.7,
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...sanitized,
        ],
      }),
    });

    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      console.error("Groq error:", response.status, err);
      return NextResponse.json({ error: "AI service error" }, { status: response.status });
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content;

    if (!reply) {
      return NextResponse.json({ error: "Empty AI response" }, { status: 500 });
    }

    return NextResponse.json({ reply });

  } catch (error) {
    console.error("Chat error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}