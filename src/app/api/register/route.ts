import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import bcrypt from "bcrypt";

export async function POST(request: Request) {
  try {
    const { firstname, lastname, email, password } = await request.json();

    if (!firstname || !lastname || !email || !password) {
      return NextResponse.json({ message: "Missing fields" }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("users"); // DB name
    const collection = db.collection("registered_users"); // Collection name

    const existingUser = await collection.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ message: "Email already in use" }, { status: 409 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await collection.insertOne({
      firstname,
      lastname,
      email,
      password: hashedPassword,
      createdAt: new Date(),
    });

    return NextResponse.json({ message: "User registered successfully" });
  } catch (error: any) {
    return NextResponse.json({ message: error.message || "Error" }, { status: 500 });
  }
}
