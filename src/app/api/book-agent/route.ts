import { NextResponse } from "next/server";
import { Groq } from "groq-sdk";

interface BodyRequest {
  prompt: string;
}

export async function POST(req: Request) {
  try {
    const body: BodyRequest = await req.json();

    if (!body.prompt?.trim()) {
      return NextResponse.json({ error: "Prompt is required" }, { status: 400 });
    }

    const apiKey = process.env.GROQ_API_KEY;

    if (!apiKey) {
      console.error("🚨 GROQ_API_KEY is MISSING in Vercel env vars!");
      return NextResponse.json(
        { error: "Server config error: API key not set (check Vercel settings)" },
        { status: 500 }
      );
    }

    console.log("✅ GROQ_API_KEY loaded successfully (length: " + apiKey.length + " chars)");

    const groq = new Groq({ apiKey });

    console.log("🔄 Sending request to Groq with prompt: '" + body.prompt.substring(0, 50) + "...'");

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",  // Confirmed active & best for Dec 2025
      messages: [{ role: "user", content: body.prompt }],
      temperature: 0.7,
      max_tokens: 1024,
    });

    const reply = completion.choices[0]?.message?.content || "No AI response generated";

    console.log("✅ Groq success! Reply length: " + reply.length);

    return NextResponse.json({ result: reply });
  } catch (error: any) {
    const errorMsg = error.message || "Unknown error";
    console.error("🚨 FULL ERROR from Groq:", {
      message: errorMsg,
      status: error.status,
      code: error.code,
      details: error.response?.data || "No extra details"
    });

    return NextResponse.json(
      { error: `Agent failed: ${errorMsg}. (Check Vercel logs for details)` },
      { status: 500 }
    );
  }
}