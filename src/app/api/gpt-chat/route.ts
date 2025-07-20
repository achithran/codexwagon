import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

// Put your OpenAI API key in .env.local as OPENAI_API_KEY=sk-...
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });

export async function POST(req: NextRequest) {
  const { messages } = await req.json();

  // Add your business instructions to the system prompt
  const systemPrompt = `
You are CodexWagon AI Assistant. Answer only about CodexWagon's services, technologies, expertise, pricing, and values. CodexWagon is an Indian company specializing in AI automation, cloud, web/mobile, data, and digital transformation for clients in India, GCC, and worldwide. Be helpful, modern, and brief.
  `;

  const chatMessages = [
    { role: "system", content: systemPrompt },
    ...messages,
  ];

  const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo", // Or "gpt-4o" if your API key allows
    messages: chatMessages,
    temperature: 0.7,
    max_tokens: 512,
  });

  const reply = completion.choices[0].message.content;
  return NextResponse.json({ reply });
}
