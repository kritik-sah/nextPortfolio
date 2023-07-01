import db from "@/libs/db";

import Certification from "@/Models/Certification";
import { verifyJwtToken } from "@/libs/jwt";

export async function GET(req: any) {
  await db.connect();

  try {
    const certifications = await Certification.find({})
      .sort({ createdAt: -1 })
      .populate("authorId");
    return new Response(JSON.stringify(certifications), { status: 200 });
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
    const newCertification = await Certification.create(body);

    return new Response(JSON.stringify(newCertification), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify(null), { status: 500 });
  }
}
