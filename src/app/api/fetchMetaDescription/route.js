import { NextResponse } from "next/server";
import scrape from "metadata-scraper";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const url = searchParams.get("url");

    if (!url) {
      return NextResponse.json({ error: "URL parameter is required" }, { status: 400 });
    }

    const metadata = await scrape(url);
    return NextResponse.json({ metaDescription: metadata.description || "No meta description found." });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch meta description" }, { status: 500 });
  }
}
