import { Champion } from "@/types/champTypes";
import { NextResponse } from "next/server";

const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/posts";

export async function GET() {
  const res = await fetch(DATA_SOURCE_URL);

  const champions: Champion[] = await res.json();

  return NextResponse.json(champions);
}
