import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req) {
  try {
    const body = await req.json();

    const filePath = path.join(process.cwd(), "data", "inquiries.json");

    // data folder agar nahi hai to bana do
    if (!fs.existsSync(path.join(process.cwd(), "data"))) {
      fs.mkdirSync(path.join(process.cwd(), "data"));
    }

    let inquiries = [];

    if (fs.existsSync(filePath)) {
      const fileData = fs.readFileSync(filePath, "utf8");
      inquiries = fileData ? JSON.parse(fileData) : [];
    }

    inquiries.push({
      id: Date.now(),
      ...body,
      createdAt: new Date().toISOString(),
    });

    fs.writeFileSync(filePath, JSON.stringify(inquiries, null, 2));

    return NextResponse.json({
      success: true,
      message: "Inquiry Saved",
    });
  } catch (err) {
    console.log(err);

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}