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

    // YE SABSE ZAROORI CHECK HAI
    if (!apiKey) {
      console.error("🚨 GROQ_API_KEY is missing in environment variables!");
      return NextResponse.json(
        { error: "Server configuration error — API key not set" },
        { status: 500 }
      );
    }

    console.log("✅ GROQ_API_KEY Loaded: Yes (length:", apiKey.length, ")"); // Debug: key length check (without exposing key)

    const groq = new Groq({
      apiKey, // direct pass karo
    });

    // Extra debug log before API call
    console.log("🔄 Calling Groq API with model: llama-3.3-70b-versatile, prompt length:", body.prompt.length);

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",  // Confirmed valid model (Dec 2025)
      messages: [
        {
          role: "user",
          content: body.prompt,
        },
      ],
      temperature: 0.7,
      max_tokens: 1024,  // Better responses
    });

    const reply = completion.choices[0]?.message?.content || "No response from AI";

    console.log("✅ Groq API Success — Reply length:", reply.length); // Debug success

    return NextResponse.json({ result: reply });
  } catch (error: any) {
    console.error("🚨 Book Agent Error Details:", {
      message: error.message || "Unknown error",
      status: error.status || "N/A",
      code: error.code || "N/A",
    });
    return NextResponse.json(
      { error: `Agent error: ${error.message || "Internal server issue. Check logs."}` },
      { status: 500 }
    );
  }
}