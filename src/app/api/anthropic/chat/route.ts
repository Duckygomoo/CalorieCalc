import { anthropic } from "@ai-sdk/anthropic";
import { convertToCoreMessages, streamText } from "ai";
import { NextResponse } from "next/server";

export const runtime = "edge";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const result = await streamText({
      model: anthropic("claude-3-5-sonnet-20240620"),
      messages: convertToCoreMessages(messages),
      system: "You are a helpful nutrition and fitness advisor",
    });

    return result.toDataStreamResponse();
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
