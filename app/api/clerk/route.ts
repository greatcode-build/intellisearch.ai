import { Webhook } from "svix";
import User from "@/app/models/User";
import { connectDB } from "@/app/config/db";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const webHook = new Webhook(process.env.SIGNING_SECRET!);
  const headerPayload = headers();

  const svixHeaders = {
    "svix-id": headerPayload.get("svix-id"),
    "svix-signature": headerPayload.get("svix-signature"),
    "svix-timestamp": headerPayload.get("svix-timestamp"),
  };

  //Get payload and verify it
  const payload = await req.json();
  const body = JSON.stringify(payload);

  const { data, type } = webHook.verify(body, svixHeaders);

  //Prepare user data to be stored in the database

  const userData = {
    _id: data.id,
    email: data.email_addresses[0].email_address,
    name: `${data.first_name} ${data.last_name}`,
    image: data.image_url,
  };
  await connectDB();

  switch (type) {
    case "user.created":
      await User.create(userData);
      break;
    case "user.updated":
      await User.findByIdAndUpdate(data.id, userData);
      break;
    case "user.deleted":
      await User.findByIdAndDelete(data.id);
      break;

    default:
      break;
  }
  return NextResponse.json({ message: "Event received" });
}
