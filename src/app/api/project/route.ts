import db from "@/libs/db";

import Project from "@/Models/Project";
import { verifyJwtToken } from "@/libs/jwt";

export async function GET(req: any) {
  await db.connect();

  try {
    const projects = await Project.find({}).limit(16).populate("authorId");
    return new Response(JSON.stringify(projects), { status: 200 });
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
    const newProject = await Project.create(body);

    return new Response(JSON.stringify(newProject), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify(null), { status: 500 });
  }
}
