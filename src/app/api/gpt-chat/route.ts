import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    const systemPrompt = `
You are CodexWagon AI Assistant. Answer only about CodexWagon's services, technologies, expertise, pricing, and values. CodexWagon is an Indian company specializing in AI automation, cloud, web/mobile, data, and digital transformation for clients in India, GCC, and worldwide. Be helpful, modern, and brief.
    `;

    const chatMessages = [
      { role: "system", content: systemPrompt },
      ...messages,
    ];

    const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://codexwagon.in/", // Optional but recommended if deployed
        "X-Title": "CodexWagon GPT Chat"
      },
      body: JSON.stringify({
        model: "openai/gpt-3.5-turbo", // or try "mistralai/mistral-large", "google/gemini-pro", "openai/gpt-4o", etc.
        messages: chatMessages,
        temperature: 0.7,
        max_tokens: 512
      })
    });

    if (!res.ok) {
      const err = await res.text();
      throw new Error(err);
    }
    const data = await res.json();
    const reply = data.choices?.[0]?.message?.content || "Sorry, I didn't get a valid answer from the AI.";
    return NextResponse.json({ reply });
  } catch (error: any) {
    console.error("OpenRouter API ERROR:", error);
    return NextResponse.json(
      { reply: "Sorry, the AI is having trouble right now. Please try again later." },
      { status: 500 }
    );
  }
}
