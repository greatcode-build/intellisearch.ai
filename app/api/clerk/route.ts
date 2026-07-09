import { verifyWebhook } from "@clerk/nextjs/webhooks";
import type { WebhookEvent } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

import User from "@/app/models/User";
import { connectDB } from "@/app/config/db";

type ClerkUserEvent = Extract<
  WebhookEvent,
  { type: "user.created" | "user.updated" }
>;

function mapClerkUser(data: ClerkUserEvent["data"]) {
  return {
    _id: data.id,
    email: data.email_addresses[0]?.email_address,
    name: `${data.first_name ?? ""} ${data.last_name ?? ""}`.trim(),
    image: data.image_url,
  };
}

export async function POST(req: NextRequest) {
  try {
    const event = await verifyWebhook(req);

    await connectDB();

    switch (event.type) {
      case "user.created":
        await User.create(mapClerkUser(event.data));
        break;

      case "user.updated":
        await User.findByIdAndUpdate(event.data.id, mapClerkUser(event.data), {
          new: true,
          upsert: true,
        });
        break;

      case "user.deleted":
        if (event.data.id) {
          await User.findByIdAndDelete(event.data.id);
        }
        break;

      default:
        break;
    }

    return NextResponse.json({ message: "Webhook received" }, { status: 200 });
  } catch (error) {
    console.error("Clerk webhook error:", error);

    return NextResponse.json(
      { message: "Webhook verification failed" },
      { status: 400 },
    );
  }
}
