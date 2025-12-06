import { NextResponse } from "next/server";
import { Groq } from "groq-sdk";

interface BodyRequest {
  prompt: string;
}

export async function POST(req: Request) {
  // Move 'model' declaration to top scope (fixes TS2304 scoping error)
  const model: string = "llama-3.3-70b-versatile";  // Confirmed active model (Dec 2025)

  try {
    const body: BodyRequest = await req.json();

    if (!body.prompt?.trim()) {
      return NextResponse.json({ error: "Prompt is required — type something!" }, { status: 400 });
    }

    const apiKey = process.env.GROQ_API_KEY;

    if (!apiKey || apiKey === "") {
      return NextResponse.json(
        { error: "🚨 API Key Missing! Go to Vercel Settings > Environment Variables and add GROQ_API_KEY (your real key from console.groq.com)" },
        { status: 500 }
      );
    }

    const groq = new Groq({ apiKey });

    const completion = await groq.chat.completions.create({
      model,  // Now accessible everywhere
      messages: [{ role: "user", content: body.prompt }],
      temperature: 0.7,
      max_tokens: 1024,
    });

    const reply = completion.choices[0]?.message?.content || "Sorry, no response from AI right now. Try again!";

    return NextResponse.json({ result: reply });
  } catch (error: any) {
    console.error("🚨 Agent Error:", error.message);
    return NextResponse.json(
      { error: `Error: ${error.message}. Fix: Check Vercel env vars for GROQ_API_KEY or model "${model}" (valid per Groq docs).` },
      { status: 500 }
    );
  }
}