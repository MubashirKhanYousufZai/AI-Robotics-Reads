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

    // YE SABSE ZAROORI CHANGE HAI
    if (!apiKey) {
      console.error("GROQ_API_KEY is missing in environment variables!");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    console.log("GROQ_API_KEY Loaded: Yes"); // success log

    const groq = new Groq({
      apiKey, // direct pass karo, kabhi "" mat do
    });

    const completion = await groq.chat.completions.create({
  model: "llama-3.3-70b-versatile",  // YE NAYA MODEL HAI — 100% working in Dec 2025
  messages: [
    {
      role: "user",
      content: body.prompt,
    },
  ],
  temperature: 0.7,
  max_tokens: 1024,  // ye bhi add kar do, better responses ke liye
});

    const reply = completion.choices[0]?.message?.content || "No response from AI";

    return NextResponse.json({ result: reply });
  } catch (error: any) {
    console.error("Book Agent Error:", error.message || error);
    return NextResponse.json(
      { error: "Agent is taking a nap. Try again in a few seconds!" },
      { status: 500 }
    );
  }
}