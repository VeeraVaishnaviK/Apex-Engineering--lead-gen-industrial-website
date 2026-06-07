import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Lead from "@/models/Lead";

// ─── POST  /api/leads ────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    await dbConnect();

    const body = await req.json();
    const { name, phone, email, productInterest, requirements, source } = body;

    // Basic validation
    if (!name || !phone) {
      return NextResponse.json(
        { success: false, error: "Name and phone are required." },
        { status: 400 }
      );
    }

    if (!source || !["popup", "contact_page", "home_page"].includes(source)) {
      return NextResponse.json(
        { success: false, error: "Invalid source." },
        { status: 400 }
      );
    }

    const lead = await Lead.create({
      name,
      phone,
      email: email || "",
      productInterest: productInterest || "",
      requirements: requirements || "",
      source,
    });

    return NextResponse.json({ success: true, data: lead }, { status: 201 });
  } catch (err: unknown) {
    console.error("[API /api/leads POST] Error:", err);
    const message = err instanceof Error ? err.message : "Server error";
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}

// ─── GET  /api/leads ─────────────────────────────────────────────
export async function GET() {
  try {
    await dbConnect();

    const leads = await Lead.find({}).sort({ createdAt: -1 }).lean();

    return NextResponse.json({ success: true, data: leads }, { status: 200 });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Server error";
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}

// ─── DELETE  /api/leads?id=xxx ───────────────────────────────────
export async function DELETE(req: NextRequest) {
  try {
    await dbConnect();

    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { success: false, error: "Lead id is required." },
        { status: 400 }
      );
    }

    await Lead.findByIdAndDelete(id);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Server error";
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}
