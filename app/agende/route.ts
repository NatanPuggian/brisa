import { NextResponse } from "next/server";
import { whatsappUrl } from "@/lib/siteConfig";

export function GET() {
  return NextResponse.redirect(whatsappUrl());
}
