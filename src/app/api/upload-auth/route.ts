import crypto from "crypto";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const privateKey = process.env.PRIVATE_KEY;

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get("token") || crypto.randomUUID();

  const expire =
    searchParams.get("expire") ||
    (Math.floor(Date.now() / 1000) + 2400).toString();

  const privateAPIKey = privateKey;
  const signature = crypto
    .createHmac("sha1", privateAPIKey as string)
    .update(token + expire)
    .digest("hex");

  return NextResponse.json({
    token,
    expire,
    signature,
  });
}
