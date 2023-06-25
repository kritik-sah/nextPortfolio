import db from "@/libs/db";

import Experience from "@/Models/Experience";
import { verifyJwtToken } from "@/libs/jwt";

export async function GET(req: any) {
  await db.connect();

  try {
    const experiences = await Experience.find({})
      .limit(16)
      .populate("authorId");
    return new Response(JSON.stringify(experiences), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(null), { status: 500 });
  }
}

export async function POST(req: any) {
  await db.connect();

  const accessToken = req.headers.get("authorization");
  const token = accessToken.split(" ")[1];

  const decodedToken = verifyJwtToken(token);

  if (!accessToken || !decodedToken) {
    return new Response(
      JSON.stringify({ error: "unauthorized (wrong or expired token)" }),
      { status: 403 }
    );
  }

  try {
    const body = await req.json();
    const newExperience = await Experience.create(body);

    return new Response(JSON.stringify(newExperience), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify(null), { status: 500 });
  }
}
