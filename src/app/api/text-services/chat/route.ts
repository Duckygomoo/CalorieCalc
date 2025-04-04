import { openai } from "@ai-sdk/openai";
import { anthropic } from "@ai-sdk/anthropic";
import { convertToCoreMessages, streamText } from "ai";
import { NextResponse } from "next/server";

export const runtime = "edge";

// Choose a service provider (can be toggled via query param if needed)
const useProvider = process.env.TEXT_SERVICE_PROVIDER || 'provider1'; // provider1 = OpenAI, provider2 = Anthropic

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    
    let result;
    if (useProvider === 'provider2') {
      // Provider 2 (Anthropic)
      result = await streamText({
        model: anthropic("claude-3-5-sonnet-20240620"),
        messages: convertToCoreMessages(messages),
        system: "You are a helpful nutrition and fitness advisor",
      });
    } else {
      // Provider 1 (OpenAI) - default
      result = await streamText({
        model: openai("gpt-4o"),
        messages: convertToCoreMessages(messages),
        system: "You are a helpful nutrition and fitness advisor",
      });
    }
    
    return result.toDataStreamResponse();
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
} 