import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({ message: "Hello from API" });
};

export const POST = async (req: Request) => {
  const { name } = await req.json();
  return NextResponse.json({ message: `Hello ${name}` });
};
